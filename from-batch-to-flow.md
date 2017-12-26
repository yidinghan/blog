<!-- TOC -->

- [从块处理到流处理](#从块处理到流处理)
- [图解](#图解)
  - [块处理](#块处理)
  - [流处理](#流处理)
- [背景](#背景)
  - [Mongo Cursor](#mongo-cursor)
    - [Examples](#examples)
      - [使用 Stream Event 的模式](#使用-stream-event-的模式)
      - [使用 Co Generator 的模式](#使用-co-generator-的模式)
  - [RxJS](#rxjs)
    - [MergeMap](#mergemap)
- [代码](#代码)
- [rx-mpaging](#rx-mpaging)

<!-- /TOC -->

# 从块处理到流处理

很多时候处理数据库数据，套路都将如下：

* parse query
* read
* transform
* return

于是不可避免的，每一步都会被前一步所阻塞，即使在 io 之上的 nodejs 亦是如此

```js
const getData = (payload) => {
  const query = parser(payload);
  const docs = await model.read(query);
  const data = await Promise.all(docs.map(transform));

  return data
}
```

在这篇文章中，将介绍如何通过使用 `mongo cursor` 与 `rxjs`，来真正**异步化**你的数据流

# 图解

先简单的用两个流程图，对比一下两种模式的区别

## 块处理

![](https://github.com/yidinghan/blog/blob/master/imgs/from-batch-to-flow-batch.jpeg)

## 流处理

![](https://github.com/yidinghan/blog/blob/master/imgs/from-batch-to-flow-flow.jpeg)

# 背景

先介绍一下相关的概念背景，已经了解的便可以直接跳过这些介绍

## Mongo Cursor

Cursor 中文意思是游标，在 MongoDB [官方文档](https://docs.mongodb.com/manual/reference/glossary/#term-cursor)释义如下

> A pointer to the result set of a query. Clients can iterate through a cursor to retrieve results. By default, cursors timeout after 10 minutes of inactivity.

Google 翻译一下

> 指向查询结果集的指针。 客户端可以迭代游标来检索结果。 默认情况下，游标在闲置 10 分钟后超时。

与 `find` 直接拿到结果集的方式不同，`cursor` 拿到的是一个指针，它指向结果集

通过这个指针，你可以像 es6 的 generator，可以按需获取，逐步处理数据

不过需要注意的是，cursor 一批一批的获取下一份数据，而非一个一个的去获取。关于每批次大小设置可以看这里，[batchSize](https://docs.mongodb.com/manual/reference/method/cursor.batchSize)

更多的 `cursor` 信息，可以看官方的这一遍介绍，[Iterate a Cursor in the mongo Shell](https://docs.mongodb.com/manual/tutorial/iterate-a-cursor/#read-operations-cursors)

### Examples

#### 使用 Stream Event 的模式

```js
const cursor = User.find().cursor();
const users = [];
await new Promise(function(resolve, reject) {
  cursor.on('data', user => users.push(user));
  cursor.on('end', resolve);
  cursor.on('error', reject);
});

console.log(users);
```

完整脚本可以看，[这个文件](https://github.com/yidinghan/blog/blob/master/scripts/mongoose-cursor-map.js)

#### 使用 Co Generator 的模式

```js
const cursor = User.find().cursor();
const users = [];
await co(function*() {
  const cursor = User.find().cursor();
  for (
    let user = yield cursor.next();
    user != null;
    user = yield cursor.next()
  ) {
    users.push(user);
  }
});

console.log(users);
```

完整脚本可以看，[这个文件](https://github.com/yidinghan/blog/blob/master/scripts/mongoose-cursor-co.js)

## RxJS

RxJS 是使用 Observables 的响应式编程的库。简单的理解，可以类比支持 Promise 的 lodash，但功能不限于此。

* 官网：http://reactivex.io/rxjs/
* 中文文档：http://cn.rx.js.org/

RxJS 非常有特点的一个地方就是 operator 非常多，足足有 101 个。而且结合数据流的异步处理，很多地方理解起来往往需要借助图表。

### MergeMap

例如这个我用的比较多的 MergeMap

> 将每个源值投射成 Observable ，该 Observable 会合并到输出 Observable 中。

![](http://reactivex.io/rxjs/img/mergeMap.png)

更多介绍可以看，[中文文档](http://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-mergeMap)

# 代码

# rx-mpaging
