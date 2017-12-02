Release Article: https://about.gitlab.com/2017/06/22/gitlab-9-3-released/

<!-- TOC -->

- [Edit Issue Description Inline, Without Losing Context](#edit-issue-description-inline-without-losing-context)
- [Autolinking Package Names](#autolinking-package-names)
- [The End](#the-end)

<!-- /TOC -->

# Edit Issue Description Inline, Without Losing Context

如果 issue 内容因为讨论的内容发生变动，而在编辑的时候又因为跳页而没法查看原来的讨论内容

当然这个问题也可通过多开一个 tab 来解决，如果不用多开那可多好

通过这一特性，直接在当前页面编辑 issue 内容，不用跳页，不用开 tab

![edit-issue-description-inline](http://om4h4iqhe.bkt.clouddn.com/edit-issue-description-inline.gif)

# Autolinking Package Names

就是当你在看一个项目依赖的时候，会根据一定规则，帮每个依赖包做一个链接

通过这个链接，很方便的就可以直接去到包对应的介绍页面

下面是官方的支持列表

 - `*.gemspec` (Ruby)
 - `package.json` (Node.js)
 - `composer.json` (PHP)
 - `Podfile` (Objective-C)
 - `*.podspec` (Objective-C)
 - `*.podspec.json` (Objective-C)
 - `Cartfile` (Objective-C)
 - `Godeps.json` (Go)
 - `requirements.txt` (Python)

![autolinking-package-names](http://om4h4iqhe.bkt.clouddn.com/autolinking-package-names.gif)

# The End

 - 上一篇: [Gitlab-ChangeLog-9-2](https://github.com/yidinghan/blog/issues/13)
 - 下一篇: [Gitlab-ChangeLog-9-4](https://github.com/yidinghan/blog/issues/15)