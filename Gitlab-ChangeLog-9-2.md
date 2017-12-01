Release Article: https://about.gitlab.com/2017/05/22/gitlab-9-2-released/

<!-- TOC -->

- [Pipeline Schedules](#pipeline-schedules)
- [Official GitLab installation on Kubernetes](#official-gitlab-installation-on-kubernetes)
- [Create Merge Request from Issue](#create-merge-request-from-issue)
- [Comments for Personal Snippets](#comments-for-personal-snippets)
- [Failed Jobs Tab allows you to access to a summary of all the failures quickly](#failed-jobs-tab-allows-you-to-access-to-a-summary-of-all-the-failures-quickly)
- [The End](#the-end)

<!-- /TOC -->

# Pipeline Schedules

在 9.2 版本中，定时触发 pipeline 的特性成为了正式版。

相对 9.1 的 beta，还多了可以 3 个配置好的触发时间可供选择

![pipeline-schedules](https://about.gitlab.com/images/9_2/scheduled_pipelines.png)

更多 pipeline 定时器相关的信息，[在这里](https://docs.gitlab.com/ce/user/project/pipelines/schedules.html)

# Official GitLab installation on Kubernetes

自从 8.15 Gitlab 加入 kubernetes 的支持后，愈发拥抱 k8s

该次提供出来官方的 Helm charts 配置文件，使得安装 Gitlab 更加的方便快捷

# Create Merge Request from Issue

根据 1 个 issue 1 个分支的原则，Gitlab 在 issue 详情页面已经提供了一个按钮去生成分支

根据这个特性，在原来的基础上面，还可以直接创建带有 WIP 合并请求的分支，一步到位

![create-merge-request-from-issue](http://om4h4iqhe.bkt.clouddn.com/create-merge-request-from-issue.gif)

结合之前的特性[合并历史版本对比](https://github.com/yidinghan/blog/blob/master/Gitlab-ChangeLog-8-12.md#merge-request-versions)，可以从分支的第一个 push 开始溯源对比了

# Comments for Personal Snippets

这一特性也只是对标 [gist](http://gist.github.com/)，可以在每个代码片下面进行评论

![comments-for-personal-snippets](http://om4h4iqhe.bkt.clouddn.com/comments-for-personal-snippets.jpg)

# Failed Jobs Tab allows you to access to a summary of all the failures quickly

以往发生了 pipeline 错误，都需要进到具体的 job 去看

如果是多个 job 都崩了，一个个看还需要切换上下文，要不就是点开多个窗口

有了这一特性

 - 直接展示最后几行，往往最后几行可以看得到错误信息啦
 - 直接展示全部失败任务，一下总览，无需切换

![failed-jobs-tab-allows-you-to-access-to-a-summary-of-all-the-failures-quickly](https://about.gitlab.com/images/9_2/failed_jobs_tab.png)

# The End

 - 上一篇: [Gitlab-ChangeLog-9-1](https://github.com/yidinghan/blog/blob/master/Gitlab-ChangeLog-9-1.md)
 - 下一篇: [Gitlab-ChangeLog-9-3](https://github.com/yidinghan/blog/blob/master/Gitlab-ChangeLog-9-3.md)