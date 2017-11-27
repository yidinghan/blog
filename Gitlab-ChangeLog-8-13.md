Release Article: https://about.gitlab.com/2016/10/22/gitlab-8-13-released/

<!-- TOC -->

- [New Issue from the Issue Board](#new-issue-from-the-issue-board)
- [Merge Conflict Editor](#merge-conflict-editor)
- [Group Labels](#group-labels)
- [Pipelines for Commits](#pipelines-for-commits)
- [Debug tracing for CI](#debug-tracing-for-ci)
- [The End](#the-end)

<!-- /TOC -->

# New Issue from the Issue Board
可以直接在 issue board 里面直接创建 issue，而不用在 issue page 创建之后再来 issue baord 里面看

![new_issue](https://about.gitlab.com/images/8_13/new_issue.gif)

# Merge Conflict Editor
这一特性之前，出现 Merge Conflict 只能对 conflict 的部分进行选择。要不选择源分支内容要不选择目标分支内容，就是一个 use ours 或 use theirs 的选择。

有了这一特性，除了单纯的选择冲突部分，还可以直接编辑冲突文件。使得解决冲突，可以完全在 merge request page 完成。

![inlinemergeconflictresolution](https://about.gitlab.com/images/8_13/inlinemergeconflictresolution.gif)

# Group Labels
label 是一个用来分类管理 issue 的非常好的工具，除了可以标记类别，还可以用来做进度标识。但是创建的 label 只能够在一个 project 里面使用，如果要在别的项目再使用的话只能重新创建，这与 DRY 原则有一定冲突。

当前的这一个新特性可以使得 label 在同一 group 内部复用，大大便利了 issue 的使用和管理。

![group-label](http://om4h4iqhe.bkt.clouddn.com/group-label.gif)

# Pipelines for Commits
前想要看到 pipelines graph，这之前只能够在 pipelines page 查看。通过这一特性，可以直接在 commit page 查看相关的 pipeline graph。

![commit_pipeline](https://about.gitlab.com/images/8_13/commit_pipeline.png)

# Debug tracing for CI
通过添加一个环境变量 flag，可以使得 Gitlab CI Runner 输出调试信息来协助我们，debug CI 过程中出现的问题。

test_async:
  script:
   - echo "this is test"
  variables:
    # debug flag down here
    CI_DEBUG_TRACE: "true"
下图是没有添加 CI_DEBUG_TRACE 的输出

![ci-no-debug-output](http://om4h4iqhe.bkt.clouddn.com/ci-no-debug-output.jpg)


下图是加了 CI_DEBUG_TRACE 的信息输出

![ci-debug-output](http://om4h4iqhe.bkt.clouddn.com/ci-debug-output.jpg)

# The End

 - 上一篇: [Gitlab-ChangeLog-8-12](https://github.com/yidinghan/blog/blob/master/Gitlab-ChangeLog-8-12.md)
 - 下一篇: [Gitlab-ChangeLog-8-14](https://github.com/yidinghan/blog/blob/master/Gitlab-ChangeLog-8-14.md)