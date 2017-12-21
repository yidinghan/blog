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

在这篇文章中，将介绍如何通过使用 `mongo cursor` 与 `rxjs`，来真正`异步化`你的数据流

# 背景
## Mongo Cursor
## RxJS

# 图解

# 代码

# rx-mpaging