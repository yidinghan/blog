const Benchmark = require('benchmark');
const { fromEvent } = require('rxjs');
const { take, mergeMap, mergeAll, toArray } = require('rxjs/operators');
const assert = require('assert');

const { User, Post, drop, initData } = require('./models');

const suite = new Benchmark.Suite('from batch to flow', {
  onComplete: () => drop(),
});

const warnup = async (defer) => {
  await Promise.all([User.count({}), Post.count({})]);
  defer && defer.resolve();
};

const runBatch = async (defer) => {
  const users = await User.find();
  const postsNested = await Promise.all(
    users.map((user) => Post.find({ username: user.name }))
  );
  const posts = [].concat.apply([], postsNested);
  assert.ok(posts.length === 250);
  defer.resolve();
};

const runFlow = async (defer) => {
  const usersCursor = User.find().cursor();
  fromEvent(usersCursor, 'data')
    .pipe(
      take(50),
      mergeMap((user) => Post.find({ username: user.name })),
      mergeAll(),
      toArray()
    )
    .subscribe((posts) => {
      assert.ok(posts.length === 250);
      defer.resolve();
    });
};

const runAsyncIterator = async (defer) => {
  const getPostsIterator = async function*() {
    const cursor = User.find().cursor();
    while (true) {
      const user = await cursor.next();
      if (!user) return;
      const posts = await Post.find({ username: user.name });
      yield posts;
    }
  };
  const postsNested = [];
  for await (const post of getPostsIterator()) {
    postsNested.push(post);
  }

  const posts = [].concat.apply([], postsNested);
  assert.ok(posts.length === 250);
  defer.resolve();
};

(async () => {
  await warnup();
  await drop();
  await initData();

  suite
    .add('warm up 1', warnup, { defer: true })
    .add('batch', runBatch, { defer: true })
    .add('warm up 2', warnup, { defer: true })
    .add('flow', runFlow, { defer: true })
    .add('warm up 3', warnup, { defer: true })
    .add('async iterator', runAsyncIterator, { defer: true })
    .on('cycle', (event) => {
      console.log(String(event.target));
    })
    .on('complete', function() {
      console.log(`Fastest is ${this.filter('fastest').map('name')}`);
      process.exit(0);
    })
    .run({ async: true, defer: true });
})();
