const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

// Post User
User.hasMany(Post, {
  foreignKey: "creator_id",
});
Post.belongsTo(User, {
  foreignKey: "creator_id",
});

// Post Comment
Post.hasMany(Comment, {
  foreignKey: "post_id",
});
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});


module.exports = { User, Post, Comment };
