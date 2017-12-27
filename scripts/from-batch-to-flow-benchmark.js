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
  assert.ok(posts.length === 250);
  defer.resolve();
};

const runFlow = async defer => {
  const usersCursor = User.find().cursor();
  const users$ = Observable.fromEvent(usersCursor, 'data');

  users$
    .take(50)
    .mergeMap(user => Post.find({ username: user.name }))
    .toArray()
    .subscribe(postsNested => {
      const posts = [].concat.apply([], postsNested);
      assert.ok(posts.length === 250);
      defer.resolve();
    });
};

(async () => {
  await Promise.all([User.count({}), Post.count({})]);
  await drop();
  await initData();

  suite
    .add('batch', runBatch, { defer: true })
    .add('flow', runFlow, { defer: true })
    .on('cycle', event => {
      console.log(String(event.target));
    })
    .on('complete', function() {
      console.log(`Fastest is ${this.filter('fastest').map('name')}`);
      process.exit(0);
    })
    .run({ async: true, defer: true });
})();
