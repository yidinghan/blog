# Gitlab 

![logo](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1467961424127_file.png)

接下来的文章分三个部分介绍 Gitlab

- Gitlab 都有什么？
- Gitlab 比 Gerrit 好？
- Gitlab 怎么玩？

# Table of Content

<!-- vim-markdown-toc GFM -->
* [Gitlab 都有什么？](#gitlab-都有什么)
    * [Powerful Code Review](#powerful-code-review)
    * [活动信息流](#活动信息流)
    * [代码文件浏览](#代码文件浏览)
    * [严格的权限隔离](#严格的权限隔离)
    * [小结](#小结)
* [Gitlab 比 Gerrit 好？](#gitlab-比-gerrit-好)
    * [Gitlab 更偏向分支开发](#gitlab-更偏向分支开发)
    * [Gitlab 有团队或项目为单位的权限管理](#gitlab-有团队或项目为单位的权限管理)
    * [Gitlab 能以 MR/PR 为代码审核单元](#gitlab-能以-mrpr-为代码审核单元)
    * [Gitlab 自家非常易用的 CI](#gitlab-自家非常易用的-ci)
* [Gitlab 怎么玩？](#gitlab-怎么玩)
    * [项目迁移](#项目迁移)
        * [Migrate Address](#migrate-address)
        * [Auth Password](#auth-password)
            * [HTTP Password](#http-password)
            * [Gerrit Login Password](#gerrit-login-password)
        * [Final](#final)
        * [PS](#ps)
    * [项目权限](#项目权限)
    * [Git Flow + Merge Request](#git-flow--merge-request)
    * [Code Review](#code-review)
            * [Merge Request Code Review](#merge-request-code-review)
            * [Commit Code Review](#commit-code-review)
    * [Gitlab CI Runner](#gitlab-ci-runner)
        * [配置简单](#配置简单)
        * [功能强大](#功能强大)
        * [结合紧密](#结合紧密)

<!-- vim-markdown-toc -->

# Gitlab 都有什么？

下面主要贴上用的最多，或者解除最多的六点功能


## Powerful Code Review

代码审核是开发过中重要的一环，Gitlab 除了能够给出漂亮的 commit 页面，还可以在其上对直接进行审核评论。留痕成本低，沟通效率高。

⬇️ Commit review page

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1467961637759_+2016-07-08+150633.jpg)


⬇️ Merge request review page

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909454931_file.png)



## 活动信息流

⬇️不仅有项目的 feeds

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909898794_file.png)


⬇️还有团队的 feeds

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909811836_file.png)


⬇️个人的 feeds（写日报非常方便）

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909857108_file.png)



## 代码文件浏览

一个方便易用的代码文件浏览器

⬇️文件目录

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468908828688_+2016-07-19+141220.jpg)


⬇️文件高亮

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468908857833_+2016-07-19+141401.jpg)



## 严格的权限隔离

权限是 RBAC，主要分为两种

⬇️项目权限

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468908990554_file.png)


⬇️群组权限

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909028011_file.png)



Gitlab CI Runner

如果接触过开源项目里面用过，[travis-ci](https://github.com/travis-ci/travis-ci) 和 [CircleCI](https://github.com/integrations/circle-ci) 就会对 Gitlab CI 不会陌生

⬇️每次 CI 被 push 时间触发后，就会附着到当前 push 的最新 commit 上

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909245294_file.png)



Issue Management

简单易用的交流中心

⬇️ Issue list page

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909554273_file.png)


⬇️ Issue detail page

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468909645356_file.png)



## 小结

Github 在基本的方面和 Github 十分相似，之前在 Github 上面体验过的功能，在 Gitlab 上很快就能找到近似或一样的。总的来说，其实就是开源的风格。


# Gitlab 比 Gerrit 好？

## Gitlab 更偏向分支开发

先解释什么是分支开发，相对于只有一条 Master 或者还有 Develop 的开发，分支开发提倡的是 Feature-Per-Branch（在不考虑 pr 的情况下）。

无论开发模式是几条主干走到底，还是 Feature-Per-Branch，各种情景自然有各自的利弊，从实际的角度来看都只是一个成本的问题。

Review-Per-Commit 可以保证在开发过程中的质量以及安全，严格的做到杜绝 bad code 污染。带来的较高的审核量，特别单次审核成倍不低的情况下，除非是有效的组织认同，否则难以推动。

相对而言，Gitlab 没有 review 的限制，适合频繁的提交，大量需求的情景。这时候就会有疑惑，代码的质量如何保证？简单来说代码质量有三点

- 是否实现功能
- 是否最小重复
- 是否优雅实现

其实更多的时候，我们的精力是放在保证好低一点，恰恰这一点却是只要写好单测就好。更多的久涉及别的理念问题，就不再展开。

## Gitlab 有团队或项目为单位的权限管理

不知道别的团队情况如何，在我所处情境里面，权限只有管理人员才能控制，所以修改成本较高。于是乎就进入了一种怪境，每个人权限都是一样的。不是说这种情况不可行，就不能开发了，而是想要表明相对的灵活性。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468911156086_file.png)

对于一般开发而言可能用不着在意每个小项都是什么功能，但对于管理者而言作用非常大，也对于代码隔离而言非常方便。最极端的情况就是逐个项目逐个人开放，最省事就是团队为单位批量授权。


## Gitlab 能以 MR/PR 为代码审核单元

这种优势体现在于，想要保留 Gerrit 模式下 review 全部进入主干的提交，但又不必逐个 review 的情况。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468911424905_+2016-07-19+145621.jpg)

当然 review 的形式可以多种模式，最终还是要依照自身的情况去决定。这里主要提供三种 review 情境
 
- 每次 commit 都会 review。不是说同事每 push 一次就马上要去看，而是每天或者固定周期花一点时间来看，不需用像 Gerrit 那么着急。
- 以 MR/PR 为单元。这样的好处在于降低了时间成本还有审核次数，不仅开发者能够专心完成功能，审核者也能一次性以完整功能的视角检查。
- 上面两者结合。毕竟没有完美的方案，结合实际交叉服用都是可以的。

## Gitlab 自家非常易用的 CI

配置简单，功能强大，结合紧密。

相对于其他 CI 最大的亮点在于结合紧密，毕竟是亲儿子。这项优点也就意味着很多方面的工作，例如配置 Git Hooks 都是可以已经集成好的。

已知功效不限于

- Build email
- Build status with commit
- Merge request auto confirm 


# Gitlab 怎么玩？

## 项目迁移

无损迁移，按照步骤来就可搞定

### Migrate Address

先去到项目列表页面

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468914238065_+2016-07-19+153858.jpg)

找到确定项目后，进入项目主页

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468914244823_+2016-07-19+154004.jpg)

进入 access 里面的 history

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468914256991_+2016-07-19+154021.jpg)

进入了另外一个页面，选择 summary

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468914372551_+2016-07-19+154437.jpg)

在 summary 页面就可以看到需要的仓库的 http 地址，复制下来

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468914426520_+2016-07-19+154451.jpg)

接下来打开 gitlab 新建一个项目，选择最后一个“any repo by URL”，并把上面复制的URL放到第三个框，别忘了填上项目名称。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468914598033_file.png)

### Auth Password

接下来还差最后一步就可以了，因为要组装成下面的格式，我们还差一个password
https://username:password@gitlab.company.com/group/project.git 

根据不同的 gerrit 配置，验证的密码有两种

#### HTTP Password

在 scm 主页右上角选择 setting

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468914936055_+2016-07-19+155348.jpg)


然后就可以在HTTP Password 这个 tab 下面找到 password 了，如果为空就生成一个

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468915018269_+2016-07-19+155401.jpg)

#### Gerrit Login Password

就是你的登陆密码，而不是上一个方法里面的页面密码

这种密码虽然直接，但是降低了一定的安全性

### Final 

接下来把 password 填在 gitlab new project 页面正确地方，就可以 create 了

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468915178852_+2016-07-19+155928.jpg)

接下来只要稍等一会

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468915217307_file.png)

就可以在 Gitlab 上面出现你的项目了

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468915263380_+2016-07-19+160029.jpg)

### PS

其实中间说到是最后要拼凑成下面的形式，而除了 password，其他的都是有本地就可以找到的
https://username:password@gitlab.company.com/group/project.git

在原来的项目目录下执行一下命令就可以拿到除了 password 以外的信息了

```
git remote get-url origin
```

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468916734937_file.png)

## 项目权限

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468845873922_+2016-07-18+202731.jpg)

［branch protection page］
另外的有一点特性可以特别注意，那就是 branch protection。正常开发情况下难免会遇上 push to master 的类似情况，这时候只要设置好相应权限，就再也不担心此类事件发生。


## Git Flow + Merge Request

关于 [git-flow](https://github.com/nvie/gitflow) 的简介可看看 ＝》 [这里](http://danielkummer.github.io/git-flow-cheatsheet/index.zh_CN.html)，简单来说就是一种分支开发的规范。


## Code Review

通常的，有两种评论形式

- 对整个 commit 进行评论
- 针对指定 commit 的指定文件的指定行进行评论

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1467961637759_+2016-07-08+150633.jpg)

Gitlab Code Review 总的来说有两种入口

- 大的方面，Merge Request 一次性 review 一批提交
- 小的方面，每个 Commits 逐个 review

#### Merge Request Code Review
⬇️是一个 MR 结束之后的界面，可以看到针对某个变动的评论会直接出现在 MR 讨论的 timeline 上

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1467961126344_+2016-07-08+145711.jpg)

⬇️一个查看整个 MR 所有设计到的改动，对于 review 而言有更丰富的上下文

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1467961045258_+2016-07-08+145553.jpg)

#### Commit Code Review
⬇️页面结构和 MR 的 changes 页面类似，但会出来关于该 commit 更多的相关信息

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1467962613063_file.png)


⬆️Tips，每个评论都邮件给 commit 提交人，但是想专门提醒某些人也收到该通知时，就可以用 @ 来实现这个需求，除了指定某人，还可以指定该项目的参与人，或者整个 Group⬆️

PS，两种 review 的 comment 都是独立的，也就是说在 MR 的 comment 只是出现在对应 MR 中，而不会再次 comment 到对应 commit 的对应文件的对应位置。

## Gitlab CI Runner

想要全面了解，从官方的 document 入手，可以看 ＝》 [这里](http://docs.gitlab.com/ce/ci/README.html)。

### 配置简单
以一个 nodejs 语言的为例，简单的几句，就可以跑起单元测试。

```
    test:
      script:
        - npm i
        - npm test
      tags:
        - node
```

### 功能强大
同样给予一个例子，体现了 cache，service，stages 和 environment。更多的功能还要翻看 .gitlab-ci.yml [配置手册](http://docs.gitlab.com/ce/ci/yaml/README.html)。

```
    stages:
        - test
        - build
    
    test_feature_develop:
        script:
            - npm i --ignore-scripts
            - npm run test:ci
        stage: test
        cache:
            key: "$CI_BUILD_REF_NAME"
            paths:
                - node_modules/
        services:
            - docker.gf.com.cn/mongo:3.2
        only:
            - /^feature.*$/
            - develop
        tags:
            - node
    
    build_image:
        script:
            - docker login -u $DOCKER_GF_USERNAME -p $DOCKER_GF_PASSWORD -e $DOCKER_GF_EMAIL docker.gf.com.cn
            - sh ./sbin/build_gfwealth_base.sh $CI_BUILD_REF_NAME
        stage: build
        only:
            - develop
            - master
        tags:
            - dind
```

从上到下，解释一下上面的配置文件几个关键的地方

- stages，是用来划分整个 CI 阶段用，每个 stage 都可以有多个 jobs
- cache，主要是文件 cache，可以根据 key 的不同安做 cache，例子里面就是按照 branch
- services，运行的依赖，例子里面的单测需要有 mongo 实例的依赖，也可以用一个已经运行在别的地方的
- tags，是用来选择 runner 用的，不同的 runner 根据配置的不同，会有执行环境和默认镜像的差别

### 结合紧密
只要配置好了 .gitlab-ci.yml 文件，每次对仓库的操作都会触发一次 ci 的检查，执行符合条件的配置操作。上面配置文件里面出现的 only，就是限制条件的一种。

每次 ci 也会记录到相应的 commit 上

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468892865044_file.png)

通过配置，CI 的结果也会向对应的人发送相关邮件

![](https://d2mxuefqeaa7sj.cloudfront.net/s_794FAEFB0B2845A072FAC4002EE4E459C17D9F497F3D1C6FA2D2CEA5A9DC0909_1468892964392_+2016-07-19+094912.jpg)

