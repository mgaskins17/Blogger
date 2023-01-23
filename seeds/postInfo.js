const { Post } = require("../models");

const postData = [
  {
    creator_id: 1,
    post_title: "Title 1",
    post_text: "Test text for post create 1",
  },
  {
    creator_id: 1,
    post_title: "Title 1",
    post_text: "Test text for post create 1",
  },
  {
    creator_id: 1,
    post_title: "Title 1",
    post_text: "Test text for post create 1",
  },
  {
    creator_id: 2,
    post_title: "Title 2",
    post_text: "Test text for post create 2",
  },
  {
    creator_id: 3,
    post_title: "Title 3",
    post_text: "Test text for post create 3",
  },
  {
    creator_id: 4,
    post_title: "Title 4",
    post_text: "Test Text for post create 4",
  },
];

const Postseed = () => Post.bulkCreate(postData);

module.exports = Postseed;
