// import modules
const { Observable } = require('rxjs');
const { User, Post } = require('../models');

// parse concurrent
const concurrent = Number(process.argv[2] || 1000);

(async () => {
  // Get the number of users' count,
  // used to control the length of the data stream
  const count = await User.count();
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
      const posts = await Post.find({ user: user._id });
      return posts;
    })
    // flattens an Observable-of-Observables
    .mergeAll(concurrent)
    .subscribe(console.log, console.error, () => {
      console.log('update process complete');
      process.exit(0);
    });
})();
