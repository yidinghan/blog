Release Article: https://about.gitlab.com/2017/04/22/gitlab-9-1-released/

<!-- TOC -->

- [Discussions in Merge Requests and Issues](#discussions-in-merge-requests-and-issues)
- [Scheduled Pipelines Triggers](#scheduled-pipelines-triggers)
  - [PS](#ps)
- [Pipeline mini-graph added to Commit View](#pipeline-mini-graph-added-to-commit-view)
- [The End](#the-end)

<!-- /TOC -->

# Discussions in Merge Requests and Issues

以往再 issues 或者 merge requests 下的评论，都是类似论坛一样的。

一条接一条，如果出现指向性回复，则是需要相互 @ 对方

关键就在于，针对特定主题（issue or merge request）下的讨论，时常会出现副主题讨论。

特别是在副主题便多的时候，讨论的时间线就会变得混乱。

通过 discussions 这个特性，可以很好的把一个副主题的讨论聚合起来展示，而不影响主时间线

![discussions-in-merge-requests-and-issues-1](https://about.gitlab.com/images/9_1/merge_request_resolvable_discussion.png)

![discussions-in-merge-requests-and-issues-2](http://om4h4iqhe.bkt.clouddn.com/discussions-in-merge-requests-and-issues-2.jpg)

更多讨论相关的信息，[在这里](https://docs.gitlab.com/ce/user/discussions/)

# Scheduled Pipelines Triggers

9.1 版本对 pipelines 的触发，引入了定时器，虽然还是 beta 版本

配置方式还是经典的 cron 语法

![scheduled-pipelines-triggers](https://about.gitlab.com/images/9_1/ci_schedule_trigger.png)

更多 pipeline 定时器相关的信息，[在这里](https://docs.gitlab.com/ce/user/project/pipelines/schedules.html)

## PS

这里有一个网站 [crontab.guru](https://crontab.guru/) 可以更好理解 cron 语法

![crontab-guru](http://om4h4iqhe.bkt.clouddn.com/crontab-guru.jpg)

# Pipeline mini-graph added to Commit View 

在 commit 详细页面，也能够看到对应 pipelines 的缩略图了

![pipeline-mini-graph-added-to-commit-view](https://about.gitlab.com/images/9_1/mini_graph.png)

# The End

 - 上一篇: [Gitlab-ChangeLog-9-0](https://github.com/yidinghan/blog/issues/11)
 - 下一篇: [Gitlab-ChangeLog-9-2](https://github.com/yidinghan/blog/issues/13)