// import modules
const { Observable } = require('rxjs');
const { User, Post, drop, initData } = require('./models');

// parse concurrent
const concurrent = Number(process.argv[2] || 1000);

(async () => {
  // Get the number of users' count,
  // used to control the length of the data stream
  await initData();
  const count = await User.count({});
  // get users cursor
  const usersCursor = User.find().cursor();
  // init users stream observable
  const users$ = Observable.fromEvent(usersCursor, 'data');

  users$
    // control the length of the data stream
    .take(count)
    // get posts from each user
    // and rxjs will transform promise to observable
    .map(async user => {
      const posts = await Post.find({ username: user.name });
      return posts;
    })
    // flattens an Observable-of-Observables
    .mergeAll(concurrent)
    .subscribe(console.log, console.error, async () => {
      await drop();
      process.exit(0);
    });
})();
