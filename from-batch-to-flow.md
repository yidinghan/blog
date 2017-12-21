<!-- TOC -->

- [从块处理到流处理](#从块处理到流处理)
- [背景](#背景)
  - [Mongo Cursor](#mongo-cursor)
  - [RxJS](#rxjs)
- [图解](#图解)
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

# 背景

先介绍一下相关的概念背景，已经了解的便可以直接跳过这些介绍

## Mongo Cursor

Cursor 中文意思是游标，在 MongoDB [官方文档](https://docs.mongodb.com/manual/reference/glossary/#term-cursor)释义如下

>A pointer to the result set of a query. Clients can iterate through a cursor to retrieve results. By default, cursors timeout after 10 minutes of inactivity.

Google 翻译一下

>指向查询结果集的指针。 客户端可以迭代游标来检索结果。 默认情况下，游标在闲置10分钟后超时。

与 `find` 直接拿到结果集的方式不同，`cursor` 拿到的是一个指针，它指向结果集

通过这个指针，你可以像 es6 的 generator，可以按需获取，逐步处理数据

不过需要注意的是，cursor 一批一批的获取下一份数据，而非一个一个的去获取。
关于每批次大小设置可以看这里，[batchSize](https://docs.mongodb.com/manual/reference/method/cursor.batchSize)

更多的 `cursor` 信息，可以看官方的这一遍介绍，[Iterate a Cursor in the mongo Shell](https://docs.mongodb.com/manual/tutorial/iterate-a-cursor/#read-operations-cursors)

## RxJS

# 图解

# 代码

# rx-mpaging