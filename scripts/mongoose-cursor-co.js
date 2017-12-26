const mongoose = require('mongoose');
const co = require('co');
const { promisify } = require('util');

mongoose.Promise = Promise;
const db = mongoose.createConnection('localhost/test');

const collectionName = 'tmpuser';
const UserSchema = new mongoose.Schema({
  name: String,
  phone: String,
});
const User = db.model('User', UserSchema, collectionName);

(async () => {
  await User.insertMany([
    {
      name: 'ding',
      phone: '13888888888',
    },
    {
      name: 'dingding',
      phone: '13666666666',
    },
    {
      name: 'dingding',
      phone: '18888888888',
    },
  ]);

  const cursor = User.find().cursor();
  const users = [];
  co(function*() {
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
  db.db.dropCollection = promisify(db.db.dropCollection);
  await db.db.dropCollection(collectionName);
  process.exit(0);
})();
