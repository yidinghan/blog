Link:

 - https://about.gitlab.com/2017/01/22/gitlab-8-16-released/
 - http://www.infoq.com/cn/news/2017/02/gitlab-816-gce

# New issues search and filter interface

这个套路是把原来存在于一个 section 上的 filter list 做在了搜索框里面，通过规定格式（DSL）调用不同的 key filter

不过这个功能对于有大量 issues 的 repo 才比较有用

![new-issues-search-and-filter-interface](https://about.gitlab.com/images/8_16/issues_search_1.png)

# Introduce a new/mergeslash command for merge requests

通过这个特性，可以直接在评论框里面进行 MR 合并了，效果如下

![introduce-a-new-mergeslash-command-for-merge-requests](http://om4h4iqhe.bkt.clouddn.com/introduce-a-new-mergeslash-command-for-merge-requests-1.gif)

更多的的 slash 命令，[在这里](https://docs.gitlab.com/ee/user/project/slash_commands.html)

# Storage statistics

作为管理者，可以通过这一特性，查看某一个 Group 或者一个 repo 所占用的磁盘大小啦

![storage-statistics](http://om4h4iqhe.bkt.clouddn.com/storage-statistics.jpg)

# The End

 - 上一篇: [Gitlab-ChangeLog-8-14](https://github.com/yidinghan/blog/blob/master/Gitlab-ChangeLog-8-14.md)
 - 下一篇: [Gitlab-ChangeLog-9-0](https://github.com/yidinghan/blog/blob/master/Gitlab-ChangeLog-9-0.md)