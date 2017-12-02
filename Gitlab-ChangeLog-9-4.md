Release Article: https://about.gitlab.com/2017/07/22/gitlab-9-4-released/

# New Navigation

全新的导览界面

- 全局操作放在最上面一栏
- 子界面的操作放在最左边
  - 左边的操作栏还可以收起来

![new-navigation](https://about.gitlab.com/images/9_4/new_ui.png)

# Group-level Secret Variables 

在这之前，做 CI/CD 很容易碰上跨项目重复利用的环境变量

往往也只能在第一次配的时候，copy and paste

通过这一特性，可以最终解决这个问题啦，直接配置一次，全群组里的项目通用

![group-level-secret-variables](https://about.gitlab.com/images/9_4/group_variables.png)

一个使用场景，就是在 8.14 发布的 `DOCKER_AUTH_CONFIG` 变量配置（[介绍在这里](https://github.com/yidinghan/blog/blob/master/Gitlab-ChangeLog-8-14.md#support-for-private-container-registries-in-gitlab-ci-builds)）

只要配置的群组级别的 `DOCKER_AUTH_CONFIG` ，就可以在全部项目直接对私有的仓库 `docker pull/push` 了

# Variables in Pipeline Schedules 
# New Cache Policy for CI/CD Configuration 
# Extended Docker Configuration for CI/CD 

# The End

 - 上一篇: [Gitlab-ChangeLog-9-3](https://github.com/yidinghan/blog/blob/master/Gitlab-ChangeLog-9-3.md)
 - 下一篇: [Gitlab-ChangeLog-9-5](https://github.com/yidinghan/blog/blob/master/Gitlab-ChangeLog-9-5.md)