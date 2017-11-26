Link: https://about.gitlab.com/2016/09/22/gitlab-8-12-released/

# Cycle Analytics
一个关于功能特性，生命周期的跟踪统计功能。从图片中也可以看得出来，从 issue 到 production，一个 特性平均都花了多少时间。从中可以发现那个阶段花的时间多，那个阶段可以改进。

![cycle_analytics](https://about.gitlab.com/images/8_12/cycle_analytics.png)

更多细节，可看官方文档

# Merge Request Versions
再开启一个 MR 之后，还可以继续在当前分支继续提交。在老的版本下的 diff 只能显示最终版本和目标的 diff，往往没法找回原来的 diff，需要到对应 commit 里面来看。而很多改动都是对应着很多 commits，而非一两个 commit。

这一个 versions 特性，可非常方便的对比这一 MR 不同版本之间的 diff。动图中简单的演示一下使用方式，以及触发方式。

![mr-diff-version](http://om4h4iqhe.bkt.clouddn.com/mr-diff-version.gif)

更多细节，可看官方文档

# Bulk update Merge Requests
可以在列表页面，批量对 MR 进行操作。例如批量加 label，把某一批 MR 指派给某一个人

![bulk](https://about.gitlab.com/images/8_12/bulk.gif)

# Submodules in CI
如果项目里面用到了 submodule，很可能会遇上在 Gitlab CI 里面使用的问题，因为 CI 里面访问对应的 submodule 会有权限问题。

```sh
[submodule "foo"]
    path = tools
    url = git@gitlab.com/group/tools.git
[submodule "bar"]
    path = tools
    url = ../../group/tools.git
```

一如上面的例子，可以说 foo 是一个绝对路径，bar 是一个相对路径

使用相对路径，可以非常方便的使用 CI 触发着一样的权限。

更多细节，可看官方文档