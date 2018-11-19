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

### 单独打包 SSH host keys

具体的原因，官方也说了，完整上下文[看这里](https://docs.gitlab.com/omnibus/settings/backups.html#backup-and-restore-omnibus-gitlab-configuration)

> Your machines SSH host keys are stored in a separate location at /etc/ssh/. Be sure to also backup and restore those keys to avoid man-in-the-middle attack warnings if you have to perform a full machine restore.

简单来说，这个 host key 就是机器的身份证，正常情况下每个机器都不一样。

但是在迁移过程中，若不把老机器的身份证带到新机器上，那客户端肯定就会有各种 error warning。

因为对客户端而言，校验服务器身份证是必然的安全需要。而新老机器肯定存在 id 不一，所以在客户端看来它两就是不一样。

为了解决这个问题，打包 host key，放到新机器上是上佳选择。

```
$ ls ssh/
ssh_host_dsa_key  ssh_host_dsa_key.pub  ssh_host_ecdsa_key  ssh_host_ecdsa_key.pub  ssh_host_ed25519_key  ssh_host_ed25519_key.pub  ssh_host_key  ssh_host_key.pub  ssh_host_rsa_key  ssh_host_rsa_key.pub
$ sudo tar -zcvf /gitlab-ssh-keys.tar.gz ssh/*
```

把这个 `gitlab-ssh-keys.tar.gz` 文件搞到新机器上解压恢复就好了。

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

### 恢复 SSH host keys

```
$ tar -zxvf gitlab-ssh-keys.tar.gz
$ ls ssh/
ssh_host_dsa_key  ssh_host_dsa_key.pub  ssh_host_ecdsa_key  ssh_host_ecdsa_key.pub  ssh_host_ed25519_key  ssh_host_ed25519_key.pub  ssh_host_key  ssh_host_key.pub  ssh_host_rsa_key  ssh_host_rsa_key.pub
$ sudo cp ssh/* /gitlab/ssh/
```