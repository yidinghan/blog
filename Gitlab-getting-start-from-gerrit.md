# Gitlab 

![logo](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1467961424127_file.png)

# 背景

根据信息技术部自研发项目发展需求，现有的SCM代码审核平台已不能满足团队在代码开发过程中的协作需求，所以搭建了新一代社交化源码管理平台gitlab，以满足团队提升开发协作效率的需求。

接下来的文章分三个部分介绍 Gitlab

- Gitlab 都有什么？
- Gitlab 比 Gerrit 好？
- Gitlab 怎么玩？


# Gitlab 都有什么？

下面主要贴上用的最多，或者解除最多的六点功能


### Powerful Code Review

代码审核是开发过中重要的一环，Gitlab 除了能够给出漂亮的 commit 页面，还可以在其上对直接进行审核评论。留痕成本低，沟通效率高。

⬇️ Commit review page

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1467961637759_+2016-07-08+150633.jpg)


⬇️ Merge request review page

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909454931_file.png)



### 活动信息流

⬇️不仅有项目的 feeds

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909898794_file.png)


⬇️还有团队的 feeds

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909811836_file.png)


⬇️个人的 feeds（写日报非常方便）

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909857108_file.png)



### 代码文件浏览

一个方便易用的代码文件浏览器

⬇️文件目录

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468908828688_+2016-07-19+141220.jpg)


⬇️文件高亮

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468908857833_+2016-07-19+141401.jpg)



### 严格的权限隔离

权限是 RBAC，主要分为两种

⬇️项目权限

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468908990554_file.png)


⬇️群组权限

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909028011_file.png)



Gitlab CI Runner

如果接触过开源项目里面用过，travis-ci 和 CircleCI 就会对 Gitlab CI 不会陌生

⬇️每次 CI 被 push 时间触发后，就会附着到当前 push 的最新 commit 上

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909245294_file.png)



Issue Management

简单易用的交流中心

⬇️ Issue list page

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909554273_file.png)


⬇️ Issue detail page

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909645356_file.png)



### 小结

Github 在基本的方面和 Github 十分相似，之前在 Github 上面体验过的功能，在 Gitlab 上很快就能找到近似或一样的。总的来说，其实就是开源的风格。
