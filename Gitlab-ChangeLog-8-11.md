release article: https://about.gitlab.com/2016/08/22/gitlab-8-11-released/

# Issue Board

Issue board 提供了近似 Trello 一样的面板

 - 对 issue 分类管理
 - 依照不同条件过滤
 - 通过拖拽的形式快速归类
 - workflow 一样的 issue 生命周期
 - 直观明了的 label 展示

![issueboard](https://about.gitlab.com/images/8_11/issue_boards.gif)

更多细节，可看官方文档

# Merge Conflict Resolution

在分支合并的时候遇上冲突是每个人都会烦心的事，往常需要通过命令行或者 Tower 第三方工具来协助处理冲突。

Gitlab 的这一特性可以很好帮助提交者，快速预览冲突，解决冲突而不用离开 Gitlab。

![Merge Conflict Resolution](https://about.gitlab.com/images/8_11/resolve_mc.gif)

更多细节，可看官方文档

# Resolve Discussions in MRs

在 merge request 时候的 review，常常都要涉及到代码问题以及改进。这些可以称作为 small issues，提醒提交者，可以在下一次提交解决掉。而如果只是作为简单的评论，也很容易把该评论对应的问题或想法给遗漏了。

通过这一个特性，不仅把可以记录下来都有哪些 issues 曾经闪现，还可以有像 todo list 一样的功能。

![Resolve Discussions in MRs](https://d2mxuefqeaa7sj.cloudfront.net/s_85F34ADB9E924A52412CEB4174E6A4CBD2B95E5D103DDA710B270CC1C1057DA5_1488349952011_mr-comment-resolve.gif)

更多细节，可看官方文档

# Pipelines Graph
可视化的展示了 CI/CD 的过程，以及其中每一个 job 和状态

![Pipelines Graph](https://about.gitlab.com/images/8_11/pipeline_graph2.png)

更多细节，可看官方文档

# Issue and MR Templates
这个功能其实来源于社区对 Github 的一些争议，是为了能够使得开源项目更好的发展而提出。

使用也很简单，在项目里面添加两个文件便可使用这一功能

 - `.gitlab/issue_templates`
 - `.gitlab/merge_request_templates`

![Issue and MR Templates](https://d2mxuefqeaa7sj.cloudfront.net/s_85F34ADB9E924A52412CEB4174E6A4CBD2B95E5D103DDA710B270CC1C1057DA5_1488347297884_issue-tpl.gif)

更多细节，可看官方文档

# Slash Commands
像 slash 一样，可以通过指定的语句，直接明了的使用预设功能

任务指派
添加标签
关联 milestone

![Slash Commands](https://about.gitlab.com/images/8_11/slash-commands.gif)

更多细节，可看官方文档

# Expiration date on Memberships
有时有想要临时开放代码权限给某些人，有一点需要担心的事，开了之后忘记取消该权限。

现在有了这一个功能之后，可以设置权限过期日期，再也不用担心了。

![Expiration date on Memberships](http://om4h4iqhe.bkt.clouddn.com/expiration-on-menbership.gif)
