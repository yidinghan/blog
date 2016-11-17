# NingJSConf
JSConf China（JavaScript 中国开发者大会）是一个为期两天的以技术开发者为中心的非营利国际性技术大会，主要关注JavaScript和Node.JS 方面的技术。期间我们将邀请众多国内外JavaScript社区著名的开发者来分享他们的知识及对JavaScript的独到见解。这里是过去几届活动的链接：（[2012](http://2012.jsconf.cn/)，[2013](http://2013.jsconf.cn/)，[2014](http://2014.jsconf.cn/)，[2015](http://2015.jsconf.cn/)）。去年深圳JS大会的视频可以在 [YouTube](https://www.youtube.com/channel/UCvFAekDfG_dL2Kcbq-vrPXQ) 和 [Tudou](http://www.tudou.com/home/wiredcraft)上看到。今年JS中国开发者大会将在南京于**2016年9月3日 － 9月4日举行.**

# Table of Conten

<!-- vim-markdown-toc Redcarpet -->
* [前端](#前端)
    * [Vue.js: the Past and the Future](#vue-js-the-past-and-the-future)
    * [Building Virtual Reality on the Web](#building-virtual-reality-on-the-web)
    * [移动海量服务下基于React的高性能同构实践](#移动海量服务下基于react的高性能同构实践)
* [后端](#后端)
    * [egg - 企业级 node 框架](#egg-企业级-node-框架)
    * [GridControl: Networked PM2 for Microservices applications](#gridcontrol-networked-pm2-for-microservices-applications)
    * [Node.js在线性能调优与故障排查](#node-js在线性能调优与故障排查)
* [原理](#原理)
    * [How to build a compiler](#how-to-build-a-compiler)
    * [聊聊 JS 测试框架](#聊聊-js-测试框架)
    * [Learning design patterns from modern JavaScript frameworks](#learning-design-patterns-from-modern-javascript-frameworks)
* [](#)
* [devops](#devops)
    * [面向未来的自动化测试-Macaca](#面向未来的自动化测试-macaca)
* [其他](#其他)
    * [Managing Async with RxJS 5 at Netflix](#managing-async-with-rxjs-5-at-netflix)
    * [DevTools for the Progressive Web](#devtools-for-the-progressive-web)

<!-- vim-markdown-toc -->

# 前端
## Vue.js: the Past and the Future

**Speaker: **[**Evan You**](https://github.com/yyx990803)

除了介绍 vue 的发展历程，主要讲解了一下 vue 接下来的目标蓝图。

vue 自定位为渐进式框架，套路是小而美。所以它的洋葱模型便是依照功能作为边界，开发不同的工具。希望解藕功能模块，需要多少功能就引入多少组件。

2.0 将会更加轻量，更快，这些 benchmark 都体现在 slice 中。 除了引入 Virtual DOM 外，还有 render watcher，server render 支持等等。更远的目标就是和 Weex 合作就是向原生应用靠拢。

**keywords**

vue 2.0, render function, native app

**links**

- [Github](https://github.com/vuejs/vue)
- [slice](https://github.com/jsconfcn/ningjs/files/461401/Vue.js.NingJS.2016.pdf)

**功能模块化**

- 洋葱模型
- 声名式渲染
  - vue.js core
- 组件系统
  - vue.js core
- 客户端路由
  - vue-router
- 大规模状态管理
  - vuex
- 构建工具
  - vue-loader
  - vueify
  - vue-cli
- 数据持久化

**vue 2.0**

- Virtual DOM
- 每个 render 对应一个 watcher
  - 有选择性的 update Virtual DOM，不做多余 render
- render function
  - 模版。书写便利易读，适合简单逻辑
  - JSX。类似 react，有更多灵活性，适合复杂逻辑
- server render
  - 组件级缓存
  - webpack，把代码打包成两种文件，server bundle，client bundle
- 编译和模版分开


## Building Virtual Reality on the Web

**Speaker: **[**Kevin Ngo**](https://github.com/ngokevin)**
**
随着 VR 概念越来越火，在 web 端实现 VR 也称为了一个很火的方向。

该次 presentation 从基础设施支持开始介绍，硬件上除了传统的硬件设备，主流浏览器也有的相应的支持版本。软件上虽然 WebGL 也是早早就支持了，但是过于复杂的 API 和撰写逻辑，也使得 WebVR 的实现略显困难。

A-Frame 主要解决的，是代码层面一套简易可行的方案。基于 DOM，简单配置就可产出一个具备 VR 特性的页面。

类似 egg，只是有一个简单的基底还是不够的，丰富的生态才是最宝贵的资源。在 A-Frame 中便是 [**Entity-Component-System**](https://aframe.io/docs/core/)**，**类比 Minecraft 里面的工具模块，一样通过简单的特性确定，一个 Component 就出来了**。**

**keywords**

VR, AFRAME, web

**links**

- [slice](https://ngokevin.github.io/ningjs-presentation)
- [github](https://github.com/aframevr/aframe)
- [home](https://aframe.io/)
- [samples](https://ngokevin.github.io/ningjs-presentation/#/4)

**WebVR**

- platform support
  - Firefox Nightly
  - Chromium (Experimental)
  - Samsung Internet
  - Mobile Polyfill
- code supoort
  - js cdoe to messy
  - html just fine
  - a-scene

**Entity-Component-System**

- API 演示
- Minecraft


## 移动海量服务下基于React的高性能同构实践

**Speaker: 梁伟盛**

从出首屏时间这个指标入手，逐步讲解了优化的过程中遇到的问题和解决的方案，很多地方还是蛮有意思的。

开场先简单介绍了 web 端发展以及 react 大法好，这些老生常谈就不说了。

首屏时间：2.2s

第一个概念是 RTT，简单理解可以是一次数据从发送到返回的时间。按照 tcp 三次握手，一次数据的拉取要两个 RTT。按照传统的 SAP，需要 n 个 js 文件拉取，接着是 n 个 ajax 数据拉取。同样是拉取数据，在服务端之间的 RTT 必然小于正常 web 端。在这个基础上面改用 server render，于是时间就变成服务端 n 个 API 拉取，到客户端 n 个 js 文件拉取。

首屏时间：1.7s

第二个概念是首屏，首屏的概念更加狭义化，变成首个页面的首个画面。再此之上，server render 只用负责首屏，首个页面剩下的 render 依然交给 web 端。

首屏时间：1s

第三个改造就是在数据交互上面

- 从 HTTP 到 UDP，加上 retry 策略也可以达到非常好的效果。
- 从 JSON 到二进制，按位截取数据，数据包大小显著降低
- 使用 Protocol buffer

首屏时间：0.8s

**keywords**

server render，首屏

**link**

- [slice](https://github.com/jsconfcn/ningjs/files/455791/React.pdf)

**RTT**

- now: n * js + n * ajax。js 主要作用于数据拉取和render
- server render: n * api + n * js。js 主要作用于交互

**首屏**

- 首个页面的首个画面
- 首屏 server render
- 其余 ajax

**数据交互**

- upd 大法好
- 使用 retry 高达三个9
- 二进制数据协议
- protocol buffer

**其他**

- 服务器监控
- 组件配置开关
- 多级缓存


# 后端
## egg - 企业级 node 框架

**Speaker: **[**天猪**](https://github.com/atian25)

主要讲解了他们规范后端项目开发做出的一些努力成果，这个成果的直接体现就是egg。

egg 主要的工作其实都是在抽象通用的功能，包括目录结构，日志等等。

这样就可以做到一处发布，处处同步。实现这一套的关键，就是他的插件系统，一切功能都可插件化，都可即插即用。

**keywords**

egg，插件化

**links**

- [slice](https://github.com/atian25/blog/blob/master/assets/files/egg%20-%20JSConf%20China%202016.pdf)
- [Github](https://github.com/eggjs/egg)

**规范化**

- 目录结构
- 应用规范
- 插件系统

**安全方面**

- 插件配置
- 统一管理
- node 版本
- 依赖升级

**日志**

- 配置化
- 全链路

**其他**

- 跨语言 RPC：jar2proxy
- alinode


## GridControl: Networked PM2 for Microservices applications

**Speaker: **[**Alexandre Strzelewicz**](https://github.com/Unitech)

GridControl 主要是在解决 PM2 的网络层问题。熟悉 PM2 的同学都会知道这是一个 node process manager, 但是细心就会发现其实是一个纯粹的 process manager。

所以往架构的方面说，想要基于 PM2 来实现微服务架构还是太弱，作者直接选择另外一个也很火热的方向 -- serverless。

实现 serverless 的关键之一就是网络层。通过简单的配置（Gridfile），把几台服务器资源统一起来，安装，注册，通信一切都隐藏在 GridControl 背后自动完成。

接下来便可做各种有意思的事情，在整个集群上执行 CLI 命令，跨机器在不同的 process 之间通信，基本的 serverless 实现等等。

现在结尾的时候，作者现场开源，观众惊呼此伏彼起，给会场带来了一阵小高潮。

**keywords**

GridControl, serverless, network layer

**links**

- [slice](https://github.com/jsconfcn/ningjs/raw/master/slides/GridControl_NingJS.pdf)
- [Github](https://github.com/gridcontrol/gridcontrol)

**主要亮点**

- multiple DNS
- process manager
- task execute across grid
- distributed messaging
- lots of demo


## Node.js在线性能调优与故障排查

**Speaker: **[**朴灵**](https://github.com/JacksonTian)

该篇分享稍偏底层，主要从排查方法入手，顺带介绍一下 alinode 的在线排查功能。
分三种场景 cpu，memory 和 GC 讲解，分别会遇上什么问题，该怎么排查定位，该怎么解决。

**keywords**
cpu 密集，memory leak，GC

**links**

- [slice](https://github.com/JacksonTian/jsconfcn2016/raw/master/Node.js%E5%9C%A8%E7%BA%BF%E6%80%A7%E8%83%BD%E8%B0%83%E4%BC%98%E4%B8%8E%E6%95%85%E9%9A%9C%E6%8E%92%E6%9F%A5_ningjsconf.pdf)
- [home](http://alinode.aliyun.com/)

**CPU 密集**

对于 node 而言并不适合做 CPU 密集运算，其中加密就是参见的场景。

利用导出的 CPU profile，在 debug tool 进行对比排查，可以找出 CPU 占用率高的地方。

在加密场景中，便是常见的同步加密，这时只要把同步改异步便可。

**内存泄漏**

内存占用过多这个是常见问题，主要原因都是内存无法回收，导致程序内存高居不下。

利用导出的 head snapshot，在 debug tool 进行对比排查，可以容易找出占用内存过高的地方。

其中 head snapshot 包括了 object count，object size，这些都是排查的关键指标。

常见的变量未回收的场景，一般是变量的作用域过高，被长期引用就导致无法回收。

两个解决方向

- 降低声明作用域
- 减少没有必要的引用

需要注意的还有变量名问题，如果是匿名变量大多数情况下其实是难以定位的。

**GC 频繁**

GC 可以很好的帮助我们的程序降低内存占用，让程序健壮运行，但是过多的 GC 却会让有没有必要的停滞。

GC trace log 就是帮助我们检查 GC 问题的利器，在正常版本的 node 需要开启以下 flag。


    node --trace_gc --trace_gc_verbose app.js

至于场景从源头思考便可容易知道，“垃圾” 过多才会 GC 频繁，也就是过于频繁的声明的变量。（其实 Promise 比 callback 慢的一个原因也是变量声明上）。

解决办法就是避免没必要的声明，或是把变量置空，或是常用变量集中处理。

**最后**

笔者在 alinode 早期推出的时候，就曾试用过一段时间，说实话真的不错。无论是从界面上，还是上述三种 debug file 的在线分析，都做的很棒。

# 原理
## How to build a compiler

个小时上手编译原理
**Speaker: James Kyle**
**keywords**
compile
source code
**复杂**
流程并不复杂
教的复杂
**parsing**
number
string
etc
**transformation**
tree
node
**code generation**
ast
**demo time**

## 聊聊 JS 测试框架

**Speaker: 严清**
**keywords**
mocha
tape
**links**
slice
github
**mocha**
支持 suite
方便组织测试代码
**ava**
多种异步模式支持
多线程

## Learning design patterns from modern JavaScript frameworks

**Speaker: Fraser Xu**
**link**
slice

# 
# devops
## 面向未来的自动化测试-Macaca

**Speaker: 徐达峰**
**keywords**
自动化测试
CI
跨平台
electron
**links**
slice
github
home
**UI**
截图测试
跨平台自动 Diff
**CI**
支持主流 CI 工具
输出数据
cpu
memory
traffic
通过率
**可同时驱动两台 driver**
例如，聊天
**支持主流浏览器**



# 其他
## Managing Async with RxJS 5 at Netflix

**Speaker: Ben Lesh**
**keywords**
RxJS
callback
async
**link**
slice
github
**lodash for async**
**cancelable**
**iterable turned inside**
next
error
complete
**time dimension**
**RxJS 5**
btter performance
easier debugging
**good**
can model any type of async
declarative and expressive
**bad**
too many operators
learning curve

## DevTools for the Progressive Web

**Speaker: Kenneth Auchenberg**

