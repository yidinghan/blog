Release Article: https://about.gitlab.com/2017/05/22/gitlab-9-2-released/

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
# Failed Jobs Tab allows you to access to a summary of all the failures quickly

# The End

 - 上一篇: [Gitlab-ChangeLog-9-1](https://github.com/yidinghan/blog/blob/master/Gitlab-ChangeLog-9-1.md)
 - 下一篇: [Gitlab-ChangeLog-9-3](https://github.com/yidinghan/blog/blob/master/Gitlab-ChangeLog-9-3.md)