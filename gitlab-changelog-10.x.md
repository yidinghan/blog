gitlab changelog 10.x

- [10.0](#100)
  - [New User Experience](#new-user-experience)
  - [Group Merge Requests Search and Filter Bar](#group-merge-requests-search-and-filter-bar)
  - [New Predefined Variables for User Identity](#new-predefined-variables-for-user-identity)
- [10.1](#101)
  - [Image Discussions](#image-discussions)
  - [Online View of HTML Artifacts](#online-view-of-html-artifacts)
  - [Lock Discussions](#lock-discussions)
  - [Semi-linear History and Fast-forward Merge Requests in CE](#semi-linear-history-and-fast-forward-merge-requests-in-ce)
- [10.3](#103)
  - [Merge Request Commit Discussions](#merge-request-commit-discussions)
  - [Customize branch name when creating merge request from issue](#customize-branch-name-when-creating-merge-request-from-issue)
  - [Flow charts, sequence diagrams, and Gantt diagrams in GitLab Flavored Markdown (GFM) with Mermaid](#flow-charts-sequence-diagrams-and-gantt-diagrams-in-gitlab-flavored-markdown-gfm-with-mermaid)
  - [Strict check on artifacts dependencies](#strict-check-on-artifacts-dependencies)
  - [Restricted deletion of CI/CD job logs](#restricted-deletion-of-cicd-job-logs)
- [10.4](#104)
  - [Clear the Runner cache](#clear-the-runner-cache)
- [10.5](#105)
  - [Push to create a project](#push-to-create-a-project)
  - [Color chips in GitLab Flavored Markdown](#color-chips-in-gitlab-flavored-markdown)
- [10.6](#106)
  - [Single Group Issue Board in Core and Free](#single-group-issue-board-in-core-and-free)
  - [Navigate to external issue tracker](#navigate-to-external-issue-tracker)
- [10.7](#107)
  - [Web IDE is now open source](#web-ide-is-now-open-source)
  - [Deploy Tokens](#deploy-tokens)
  - [Variables support in 'only' and 'except' keywords](#variables-support-in-only-and-except-keywords)
  - [GitLab Plugins](#gitlab-plugins)
  - [HTTP(s) Git protocol always available for CI/CD jobs](#https-git-protocol-always-available-for-cicd-jobs)
  - [Easily get failure reasons for CI/CD jobs](#easily-get-failure-reasons-for-cicd-jobs)
  - [Runner-specific job timeout](#runner-specific-job-timeout)
- [10.8](#108)
  - [Fuzzy file finder in the Web IDE](#fuzzy-file-finder-in-the-web-ide)
  - [Stage and commit by file in the Web IDE](#stage-and-commit-by-file-in-the-web-ide)
  - [Specify variables for manual pipelines](#specify-variables-for-manual-pipelines)
  - [GitLab Runners for groups](#gitlab-runners-for-groups)

# 10.0

本版本的完整 release，请看[这里](https://about.gitlab.com/2017/09/22/gitlab-10-0-released/)

## New User Experience

更优雅的可收缩侧边栏

![10-0-menu-loop](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-0-menu-loop.gif)

可读性更高的内缩侧边栏预览

![10-0-flyouts](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-0-flyouts.png?imageView2/2/w/900)

更多关于该版本 UI 特点，请看[这里](https://about.gitlab.com/2017/09/13/unveiling-gitlabs-new-navigation/)

## Group Merge Requests Search and Filter Bar

同一个群组内处理 MR，以往都要一个个项目切换，在管理的角度非常的不方便。

这个版本开始，便可以管理群组的级别全部 MR 了，节省很多项目切换成本。

![10-0-group-level-merge-request](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-0-group-level-merge-request.jpg?imageView2/2/w/900)

更多有关群组的操作，请看[这里](https://docs.gitlab.com/ee/user/project/merge_requests/#merge-requests-per-group)

## New Predefined Variables for User Identity

| name              | description                       | example                    |
| :---------------- | :-------------------------------- | :------------------------- |
| GITLAB_USER_NAME  | 启动当前任务（job）的真实用户名   | 用户在系统里面设置的用户名 |
| GITLAB_USER_LOGIN | 启动当前任务（job）的用户的登录名 | 用户注册登陆用的用户名     |

更多 CI RUNNER 的预设变量，请看[这里](https://docs.gitlab.com/ce/ci/variables/#predefined-variables-environment-variables)

# 10.1

本版本的完整 release，请看[这里](https://about.gitlab.com/2017/10/22/gitlab-10-1-released/)

## Image Discussions

gitlab 不仅仅可以作为代码仓库，更广义的可以作为协作文件仓库。

以此推广开来，设计的图片等等也可以放到 git 中去分享沉淀。但是图片讨论，不像代码可以按行进行，直接的页面上执行 code review。

因而很多时候，讨论图片的修改都有过戳屏幕的冲动。毕竟平铺开来看，这是一个二维的物体。

但有了这一特性，就可以真的对一个图进行具体位置的 image review 啦。

![10-1-image-discussions](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-1-image-discussions.png?imageView2/2/w/900)

发起方式也很简单，只要把鼠标移到图片上你想发起的讨论的位置，点击鼠标，输入内容，done！

![10-1-start_image_discussion](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-1-start_image_discussion.gif)

更多 image review 的使用教程，请看[这里](https://docs.gitlab.com/ce/user/discussions/#image-discussions)

## Online View of HTML Artifacts

前端页面的构建结果，单元测试的报告，等等过程在 gitlab ci 上都可以输出到 artifacts 中去。但想要查看输出文件，就必须下载，这略显麻烦。

有了这一特性，可以快速在线预览输出文件，跳过下载这一步，省时省事。

![10-1-html_artifacts_browser](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-1-html_artifacts_browser.jpg?imageView2/2/w/900)

更多预览 Artifacts 的说明，请看[这里](https://docs.gitlab.com/ce/user/project/pipelines/job_artifacts.html#browsing-artifacts)

## Lock Discussions

可以像 GitHub 一样，可以锁定讨论，使其不能再进行。

![10-1-lock-discussions.jpg](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-1-lock-discussions.jpg?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ee/user/discussions/#lock-discussions)

## Semi-linear History and Fast-forward Merge Requests in CE

两个有趣且进阶的 Git 操作，在 merge request 中的应用，有兴趣的可以点击 [Semi-linear History](https://docs.gitlab.com/ee/user/project/merge_requests/#semi-linear-history-merge-requests) 和 [Fast-forward](https://docs.gitlab.com/ee/user/project/merge_requests/#fast-forward-merge-requests) 进行了解。

# 10.3

本版本的完整 release，请看[这里](https://about.gitlab.com/2017/12/22/gitlab-10-3-released/)

## Merge Request Commit Discussions

通过 mr 我们可以看到代码的具体变更，照此也可方便全局性的进行 code review。

但并非每个人都会于在后 mr 的时候一次性进行 review，反而在每个 commit 下进行也会进行 code review。

有了这一特性，这些就可针对一个 mr 里的 commits 逐个 review 了。

官方有一个 [video demo](https://about.gitlab.com/2018/01/04/comment-on-commits-feature-tutorial/)，感兴趣的可以看一下。

更多文档说明，请看[这里](https://docs.gitlab.com/ee/user/discussions/#commit-discussions-in-the-context-of-a-merge-request)

## Customize branch name when creating merge request from issue

在创建 issue 之后的 detail page，有一个可以一键创建 mr 的按钮，非常的方便。

但是通过这个创建出来的分支名称格式，却是被固定死了，并不能改变。

通过这一特性，你可以自定义一键 mr 时创建的分支名称啦。

![10-3-create_merge_request_customize_branch_name](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-3-create_merge_request_customize_branch_name.png?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ee/user/project/issues/issues_functionalities.html#18-new-merge-request)

## Flow charts, sequence diagrams, and Gantt diagrams in GitLab Flavored Markdown (GFM) with Mermaid

就是流程图在 markdown 里面的支持，下面一张图直观的展示一下效果。

![10-3-mermaid_gfm.png](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-3-mermaid_gfm.png?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ee/user/markdown.html#mermaid)

## Strict check on artifacts dependencies

因为你的成品也是会过期的啦，现在如果你的 job 依赖于某个成品，恰好那个成品又过期了，那你的任务就会因此失败。之前没报错，那是之前没有严格检查啦。

更多文档说明，请看[这里](https://docs.gitlab.com/ee/ci/yaml/#when-a-dependent-job-will-fail)

## Restricted deletion of CI/CD job logs

其实 job 日志都是可被删除的，但是有些日志比较重要，如果被随意删除那是会对回溯审计照成麻烦。为此需要加强限制，只有本人触发的任务，或者是 master 能够删除相关日志记录。

更多文档说明，请看[这里](https://docs.gitlab.com/ee/user/permissions.html#gitlab-cicd-permissions)

# 10.4

本版本的完整 release，请看[这里](https://about.gitlab.com/2018/01/22/gitlab-10-4-released/)

## Clear the Runner cache

出问题最简单的解决方案，重启啊！

如果你的 runner cache 除了冲突，或着别的问题。最简单的当然是删掉啦，反正是 cache。

![10-4-clear-cache](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-4-clear-cache.png?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ee/user/permissions.html#gitlab-cicd-permissions)

# 10.5

本版本的完整 release，请看[这里](https://about.gitlab.com/2018/02/22/gitlab-10-5-released/)

## Push to create a project

提交到一个不存在的项目会怎么样，现在你的行为结果就是创建一个啦。

这是最快的创建一个项目，特别是从一个本地模版项目开始，直接跳过 UI 上的初始化流程。

更多文档说明，请看[这里](https://docs.gitlab.com/ee/gitlab-basics/create-project.html#push-to-create-a-new-project)

## Color chips in GitLab Flavored Markdown

直接在 markdown 把颜色渲染出来，小优化带来的可不止小便利呀。

![10-5-gfm-colors](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-5-gfm-colors.png?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ee/user/markdown.html#colors)

# 10.6

本版本的完整 release，请看[这里](https://about.gitlab.com/2018/03/22/gitlab-10-6-released/#navigate-to-external-issue-tracker)

## Single Group Issue Board in Core and Free

跨项目管理 issue，那简直不要太方便，特别是在这微服务盛行的年份，项目数量如雨后春笋。

![10-6-one-group-board-libre](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-6-one-group-board-libre.png?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ce/user/project/issue_board.html#group-issue-boards-premium)

## Navigate to external issue tracker

如果网址好记，浏览器里面简单输入就可以联想回车直达。但是能直接点的，肯定比输入方便啊。

![10-6-external-tracker-nav](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-6-external-tracker-nav.png?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ee/integration/external-issue-tracker.html)

# 10.7

本版本的完整 release，请看[这里](https://about.gitlab.com/2018/04/22/gitlab-10-7-released/)

## Web IDE is now open source

进步是啥，是方便啊。能够直接在一个地方解决的操作，必然不会再想着花精力分两处做，这也是全家桶的魅力。

在 code review 的时候，常常看到一些简单的问题恨不得自己上手改。但是一想到，切分支，拉代码，开编辑器，修改变更，提交远端后。这时间都够煮包泡面啦。

点击界面上的 Web IDE 按钮，即刻享受一站式体验。

![10-7-open_web_ide](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-7-open_web_ide.png?imageView2/2/w/900)

![10-7-web-ide-01](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-7-web-ide-01.jpg?imageView2/2/w/900)

![10-7-web-ide-02](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-7-web-ide-02.jpg?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ee/user/project/web_ide/)

## Deploy Tokens

主要还是部署的场景，如果使用个人的验证信息去拉去项目，纵然方便，但是泄漏和被恶意不得不防啊。一个只读权限的验证信息，安全你我他。

![10-7-deploy_tokens](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-7-deploy_tokens.png?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ee/user/project/deploy_tokens/)

## Variables support in 'only' and 'except' keywords

更高级的参数，带来的就是更繁多的场景。作为开发，各种 if/else 不会陌生，而对于任一门语言更为一种基本语法。

官方的例子很易懂，当变量是 `GITLAB_USER_NAME` 特定用户才触发或不触发某个任务。例如发布的任务，可以设置为只有管理员才可以粗发这个任务。

更多预设的变量，可以看看[这里](https://docs.gitlab.com/ee/ci/variables/#predefined-variables-environment-variables)，找找是否有你念念已久的呢。

![10-7-variables_expressions](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-7-variables_expressions.png?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ee/ci/variables/#variables-expressions)

## GitLab Plugins

这是 gitlab 的一小步，是 gitlab 生态系统的一大步（误）。开放 [System hooks](https://docs.gitlab.com/ee/system_hooks/system_hooks.html)，也算了是为统一内外部入口，创造更丰富的外部生态打基础。

更多文档说明，请看[这里](https://docs.gitlab.com/ce/administration/plugins.html)

## HTTP(s) Git protocol always available for CI/CD jobs

出于安全考虑，屏蔽 http git 操作是常见的场景。但是这也带来一个问题，那就是 gitlab ci 就不能用了。

为了解决这一问题，在作出严格的安全考虑和措施之后，无论 http git 操作与否，gitlab ci 都可以通过 http clone/fetch 到一个项目。

因为 gitlab ci 用的都是 otp（one time password），是无法被用于重放攻击的。

更多文档说明，请看[这里](https://docs.gitlab.com/ee/user/admin_area/settings/visibility_and_access_controls.html)

## Easily get failure reasons for CI/CD jobs

通过 hover 就可以简单了解到任务失败的阶段。帮你快速定位，到底是准备工作（before script），还是进行中（script）等不同阶段出的问题。

![10-7-failure_reason](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-7-failure_reason.png?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ee/ci/pipelines.html#seeing-the-failure-reason-for-jobs)

## Runner-specific job timeout

# 10.8

本版本的完整 release，请看[这里](https://about.gitlab.com/2018/05/22/gitlab-10-8-released/)

## Fuzzy file finder in the Web IDE

在 vs code `cmd + p` 就是一个文件的查找功能，在 web IDE 也一样！相同的操作，帮助你快速打开当前项目中你想要的文件。

![10-8-web_ide_fuzzy](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-8-web_ide_fuzzy.png?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ee/user/project/web_ide/#file-finder)

## Stage and commit by file in the Web IDE

改动全都 commit？不了不了.jpg

能够按需提交才是最好的，可以让你的 commit 的改动足够的小，信息的记录更加完整。

![10-8-web_ide_staging](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-8-web_ide_staging.jpg?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ee/user/project/web_ide/#stage-and-commit-changes)

## Specify variables for manual pipelines

在手动触发 pipelines 的时候，可以带上自定义的参数。这个功能对于 Jenkins 的用户而言可不陌生。

![10-8-manual-pipeline-variables.png](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-8-manual-pipeline-variables.png?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ee/ci/pipelines.html#manually-executing-pipelines)

## GitLab Runners for groups

project runner 难分享，shared runner 太暴露。group runner 来帮你。

一个小组的人用同一个 runner，这种场景下放到多项目部门，那就显得相当方便啦。

省时省事不用重复 setup runner by project，安全可靠不必担心 shared runner leak secret。

![10-8-group-runners.png](https://yiding-pub-1253641397.picgz.myqcloud.com/gitlab-changelog-10-x/10-8-group-runners.png?imageView2/2/w/900)

更多文档说明，请看[这里](https://docs.gitlab.com/ee/ci/runners/#shared-specific-and-group-runners)
