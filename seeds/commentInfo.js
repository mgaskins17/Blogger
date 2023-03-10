const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Comments 1",
    post_id: "1",
    username: 'User1',
  },
  {
    comment_text: "Comments 2",
    post_id: "1",
    username: 'User2'
  },
  {
    comment_text: "Comments 3",
    post_id: "1",
    username: 'User3',
  },
  {
    comment_text: "Comments 4",
    post_id: "1",
    username: 'User4'
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

