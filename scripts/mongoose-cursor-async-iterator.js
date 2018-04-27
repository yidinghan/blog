const mongoose = require('mongoose');
const co = require('co');
const { promisify } = require('util');

mongoose.Promise = Promise;
const db = mongoose.createConnection('mongodb://localhost/test');

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

  // const cursor = User.find().cursor();
  const users = [];
  const getUsersIterator = async function*() {
    const cursor = User.find().cursor();
    while (true) {
      const user = await cursor.next();
      if (!user) return;

      yield user;
    }
  };

  for await (const user of getUsersIterator()) {
    users.push(user);
  }

  console.log(users);
  await db.dropCollection(collectionName);
  process.exit(0);
})();
