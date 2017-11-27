Release Article: https://about.gitlab.com/2017/03/22/gitlab-9-0-released/

<!-- TOC -->

- [Subgroups](#subgroups)
- [GitLab CI](#gitlab-ci)
- [The End](#the-end)

<!-- /TOC -->

# Subgroups

在这之前，都是一个 group 下辖多个 repos

对于项目组人少的情况还好处理，如果遇上 10+ 以上的团队，这种模式可能就有点捉襟见肘了，往往需用开多个 group

 - team-frontend/repo-a
 - team-backend/repo-c
 - team-devops/builder

通过这一个特性，可以很轻松做到分级管理

![subgroups](https://about.gitlab.com/images/9_0/gitlab-nested.png)

更多子群组相关的信息，[在这里](https://docs.gitlab.com/ce/user/group/subgroups/)

# GitLab CI

在 9.0 发布之后，为了统一 job 的概念，下面列表中的左边变量在新版中都会有一个新名字

旧版的变量名依然可以继续使用，但是 deprecated 状态，在将来的版本中会被弃用

|       8.X name       |        9.0 name         |
| -------------------- | ----------------------- |
| `CI_BUILD_ID`        | `CI_JOB_ID`             |
| `CI_BUILD_REF`       | `CI_COMMIT_SHA`         |
| `CI_BUILD_TAG`       | `CI_COMMIT_TAG`         |
| `CI_BUILD_REF_NAME`  | `CI_COMMIT_REF_NAME`    |
| `CI_BUILD_REF_SLUG`  | `CI_COMMIT_REF_SLUG`    |
| `CI_BUILD_NAME`      | `CI_JOB_NAME`           |
| `CI_BUILD_STAGE`     | `CI_JOB_STAGE`          |
| `CI_BUILD_REPO`      | `CI_REPOSITORY_URL`     |
| `CI_BUILD_TRIGGERED` | `CI_PIPELINE_TRIGGERED` |
| `CI_BUILD_MANUAL`    | `CI_JOB_MANUAL`         |
| `CI_BUILD_TOKEN`     | `CI_JOB_TOKEN`          |

更多变量名相关的信息，[在这里](https://docs.gitlab.com/ce/ci/variables/)

# The End

 - 上一篇: [Gitlab-ChangeLog-8-16](https://github.com/yidinghan/blog/issues/10)
 - 下一篇: [Gitlab-ChangeLog-9-1](https://github.com/yidinghan/blog/issues/12)