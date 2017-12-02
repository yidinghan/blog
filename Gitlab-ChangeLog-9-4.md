Release Article: https://about.gitlab.com/2017/07/22/gitlab-9-4-released/

<!-- TOC -->

- [New Navigation](#new-navigation)
- [Group-level Secret Variables](#group-level-secret-variables)
- [Variables in Pipeline Schedules](#variables-in-pipeline-schedules)
- [New Cache Policy for CI/CD Configuration](#new-cache-policy-for-cicd-configuration)
- [Extended Docker Configuration for CI/CD](#extended-docker-configuration-for-cicd)
- [The End](#the-end)

<!-- /TOC -->

# New Navigation

全新的导览界面

- 全局操作放在最上面一栏
- 子界面的操作放在最左边

![new-navigation](https://about.gitlab.com/images/9_4/new_ui.png)

# Group-level Secret Variables 

在这之前，做 CI/CD 很容易碰上跨项目重复利用的环境变量

往往也只能在第一次配的时候，copy and paste

通过这一特性，可以最终解决这个问题啦，直接配置一次，全群组里的项目通用

![group-level-secret-variables](https://about.gitlab.com/images/9_4/group_variables.png)

一个使用场景，就是在 8.14 发布的 `DOCKER_AUTH_CONFIG` 变量配置（[介绍在这里](https://github.com/yidinghan/blog/blob/master/Gitlab-ChangeLog-8-14.md#support-for-private-container-registries-in-gitlab-ci-builds)）

只要配置的群组级别的 `DOCKER_AUTH_CONFIG` ，就可以在全部项目直接对私有的仓库 `docker pull/push` 了

# Variables in Pipeline Schedules 

有些变量想要在周期 pipeline 中特别配置的，就可以通过这个特性实现啦

![variables-in-pipeline-schedules](https://about.gitlab.com/images/9_4/schedule_variables.png)

# New Cache Policy for CI/CD Configuration 

对于 job 缓存，基本行为方式都是在开始的时候拉取下来，在结束的时候提交上去

但是对于有些 job，是根本用不上提交缓存，或者是拉取缓存

于是通过这两个 `.gitlab-ci.yml` 配置项，就可以减少 job 的运行时间，从而加速 pipeline 的执行

- `policy: pull`: 只拉取缓存，不提交缓存
- `policy: push`: 只提交缓存，不拉取缓存

更多缓存策略说明，[在这里](http://docs.gitlab.com/ee/ci/yaml/#cache-policy)

# Extended Docker Configuration for CI/CD 

使用 docker 作为 runner 的时候，不仅可以使用指定的镜像配置 image，还可以 services

```yml
image: "registry.example.com/my/image:latest"

services:
  - postgresql:9.4
  - redis:latest
```

但是这还远远不够，有时有还会有一些不方便的地方

- 想要针对这些镜像做一些启动配置，这是完全没入口的
- 同一个镜像只能配置一个 services
- 如果使用了私有镜像做 services，使用的地址 URL 还会有固定的转义规则
  - 关于地址转义，官方文档[在这里](https://docs.gitlab.com/ee/ci/docker/using_docker_images.html#accessing-the-services)

这一版本中发布的特性，就可以解决这些问题

- `image`:
  - `name`: 镜像地址
  - `entrypoint`: 就是 docker 的 entrypoint 参数
- `services`:
  - `name`: 镜像地址
  - `alias`: service 的别名，最重要的用处，就是当你不想使用默认的转义地址的时候，可以在这里制定
  - `entrypoint`: 就是 docker 的 entrypoint 参数
  - `command`: 就是 docker 的 command 参数

```yml
image:
  name: ruby:2.2
  entrypoint: ["/bin/bash"]

services:
  - name: my-postgres:9.4
    alias: db-postgres-old
    entrypoint: ["/usr/local/bin/db-postgres"]
    command: ["start"]
  - name: my-postgres:9.5
    alias: db-postgres-new
    entrypoint: ["/usr/local/bin/db-postgres"]
    command: ["start"]
```

更多 Docker 参数说明，[在这里](https://docs.gitlab.com/ee/ci/docker/using_docker_images.html#extended-docker-configuration-options)

# The End

 - 上一篇: [Gitlab-ChangeLog-9-3](https://github.com/yidinghan/blog/issues/14)
 - 下一篇: [Gitlab-ChangeLog-9-5](https://github.com/yidinghan/blog/issues/16)