# 前文

Gitlab 服务数据迁移，可能几百年不会遇上一次，但也难免会碰上一次

其实数据迁移很可以很简单的拆分成两步

 - 数据备份
 - 数据恢复
 
所以接下来的内容，可以不限于用在数据迁移上，还可以用在灾备，升级测试等等

# 坑

记录下碰上的一些问题，以及需要注意的地方

 - Gitlab 版本
   - 很好理解，就是 Gitlab 8.12.3 备份的文件，不能直接用在高版本上面
   - 8.13.3 的备份就用在 8.13 上面，不要直接在 8.14 下面恢复
   - 每次版本升级，都会有数据库 schema 升级等操作，所以会有版本间不兼容性
 - 备份文件文件名
   - 在 8.15 后备份文件文件名格式有变
   - 8.15 之前是 1487391589_gitlab_backup.tar
   - 8.15 之后是 1488827338_2017_03_06_gitlab_backup.tar
 - Placeholder

# 正文

下面假设

 - Gitlab 在 host 的数据挂载路径为 /gitlab
 - 使用的是 docker-gitlab 版本 Gitlab 来部署的

# 数据备份

通过调用备份命令，产出备份文件

 - 如果需要另起一个服务使用到该文件，可以再行把对应文件移动到目标的 Gitlab 服务对应的文件夹下面
 - 如果两个服务之间跨服务器，使用 scp 或 rsync 等类似的工具即可

## Docker Compose 版本

在 host 上面，Gitlab 的备份目录就在 /gitlab/backups ，在 container 里面是 /home/git/data/backups

在 docker-compose.yml 同级执行创建备份的命令，过一会，就可以在备份目录下面看见备份文件

```sh
$ docker-compose run --rm gitlab app:rake gitlab:backup:create
+ case ${1} in
+ initialize_system
+ map_uidgid
++ id -u git
+ USERMAP_ORIG_UID=1000
++ id -g git
+ USERMAP_ORIG_GID=1000
+ USERMAP_GID=1000
+ USERMAP_UID=1000
+ [[ 1000 != 1000 ]]
+ [[ 1000 != 1000 ]]
+ initialize_logdir

......

Creating backup archive: 1488873276_2017_03_07_gitlab_backup.tar ... done
Uploading backup archive to remote storage  ... skipped
Deleting tmp directories ... done
done
done
done
done
done
done
Deleting old backups ... done. (0 removed)
$ ls /gitlab/backups/
1488873276_2017_03_07_gitlab_backup.tar
```

# 数据恢复

## Docker Compose 版本

目录环境和创建备份是一样的，只要备份文件夹下面由备份文件就可以进行恢复

在 docker-compose.yml 同级执行恢复命令，过一会，就可以在看到列出的可选备份文件

```sh
$ docker-compose run --rm gitlab app:rake gitlab:backup:restore
+ case ${1} in
+ initialize_system
+ map_uidgid
++ id -u git
+ USERMAP_ORIG_UID=1000
++ id -g git
+ USERMAP_ORIG_GID=1000
+ USERMAP_GID=1000
+ USERMAP_UID=1000
+ [[ 1000 != 1000 ]]
+ [[ 1000 != 1000 ]]
+ initialize_logdir
+ echo 'Initializing logdir...'
Initializing logdir...

......

++ ls /home/git/data/backups
++ grep _gitlab_backup
++ sort -r
+ for b in '$(ls ${GITLAB_BACKUP_DIR} | grep _gitlab_backup | sort -r)'
++ date --date=@1488878217_2017_03_07 '+%d %b, %G - %H:%M:%S %Z'
date: invalid date '@1488878217_2017_03_07'
+ echo '‣ 1488878217_2017_03_07_gitlab_backup.tar (created at )'
‣ 1488878217_2017_03_07_gitlab_backup.tar (created at )
+ echo

+ read -p 'Select a backup to restore: ' file
Select a backup to restore:
把选中的备份文件的文件名输入，就可以开始备份了，会有很多交互提问，一一填写即可
+ read -p 'Select a backup to restore: ' file
Select a backup to restore: 1488878217_2017_03_07_gitlab_backup.tar
+ [[ -z 1488878217_2017_03_07_gitlab_backup.tar ]]
+ [[ ! -f /home/git/data/backups/1488878217_2017_03_07_gitlab_backup.tar ]]
+ BACKUP=1488878217_2017_03_07
+ echo 'Running raketask gitlab:backup:restore...'
Running raketask gitlab:backup:restore...
+ exec_as_git bundle exec rake gitlab:backup:restore BACKUP=1488878217_2017_03_07
++ whoami
+ [[ root == git ]]
+ sudo -HEu git bundle exec rake gitlab:backup:restore BACKUP=1488878217_2017_03_07
Unpacking backup ... done
Before restoring the database we recommend removing all existing
tables to avoid future upgrade problems. Be aware that if you have
custom tables in the GitLab database these tables and all data will be
removed.
Do you want to continue (yes/no)? yes
Removing all tables. Press Ctrl-C within 5 seconds to abort

......

Restoring lfs objects ...
done
This will rebuild an authorized_keys file.
You will lose any data stored in authorized_keys file.
Do you want to continue (yes/no)? yes
Deleting tmp directories ... done
done
done
done
done
done
done
$ ls /gitlab/backups/
1488878217_2017_03_07_gitlab_backup.tar
```