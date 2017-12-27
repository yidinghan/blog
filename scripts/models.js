const mongoose = require('mongoose');
const { promisify } = require('util');

mongoose.Promise = Promise;
const db = mongoose.createConnection('localhost/test');
db.db.dropCollection = promisify(db.db.dropCollection);

const UserSchema = new mongoose.Schema({
  name: String,
  phone: String,
});
const User = db.model('User', UserSchema, 'tmpuser');
const PostSchema = new mongoose.Schema({
  username: String,
  content: String,
});
const Post = db.model('Post', PostSchema, 'tmppost');

const initData = async () => {
  const users = Array(50)
    .fill('ding')
    .map((value, index) => ({ name: value + index }));
  const userP = User.insertMany(users);
  const posts = [];
  users.forEach(({ name: username }) => {
    Array(5)
      .fill('tmp')
      .forEach((value, index) => {
        posts.push({
          username,
          content: username + value + index,
        });
      });
  });
  const postP = Post.insertMany(posts);

  await Promise.all([userP, postP]);
};

const drop = async () => {
  const userP = db.db.dropCollection('tmpuser');
  const postP = db.db.dropCollection('tmppost');

  await Promise.all([userP, postP]);
};

module.exports = { User, Post, initData, drop };
