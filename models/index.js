const User = require('./user'),
      Post = require('./post'),
      Comment = require('./comment');

// User.hasMany(Post, {
//   foreignKey: "user_id"
// })
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
})

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE"
})
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
})

module.exports = { User, Post, Comment };