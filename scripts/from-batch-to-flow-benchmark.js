const Benchmark = require('benchmark');
const { Observable } = require('rxjs');
const assert = require('assert');

const { User, Post, drop, initData } = require('./models');

const suite = new Benchmark.Suite('from batch to flow', {
  onComplete: () => drop(),
});

const runBatch = async defer => {
  const users = await User.find();
  const postsNested = await Promise.all(
    users.map(user => {
      return Post.find({ username: user.name });
    })
  );
  const posts = [].concat.apply([], postsNested);
  assert.ok(posts.length === 9);
  defer.resolve();
};

const runFlow = async defer => {
  const count = await User.count({});
  const usersCursor = User.find().cursor();
  const users$ = Observable.fromEvent(usersCursor, 'data');

  users$
    .take(count)
    .mergeMap(async user => {
      const posts = await Post.find({ username: user.name });
      return posts;
    })
    .mergeAll()
    .toArray()
    .subscribe(posts => {
      assert.ok(posts.length === 9);
      defer.resolve();
    });
};

(async () => {
  await User.count({});
  await drop();
  await initData();

  suite
    .add('flow', runFlow, { defer: true })
    .add('batch', runBatch, { defer: true })
    .on('cycle', event => {
      console.log(String(event.target));
    })
    .on('complete', function() {
      console.log(`Fastest is ${this.filter('fastest').map('name')}`);
      process.exit(0);
    })
    .run({ async: true, defer: true });
})();
