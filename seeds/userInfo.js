const { User } = require("../models");

const userData = [
  { // id - 1
    username: "User1",
    email: "user1@mail.com",
    password: "password1",
  },
  { // id - 2
    username: "User2",
    email: "user2@mail.com",
    password: "password2",
  },
  { // id - 3
    username: "User3",
    email: "user3@mail.com",
    password: "password3",
  },
  { // id - 4
    username: "User4",
    email: "user4@mail.com",
    password: "password4",
  },
];

const Userseed = () => User.bulkCreate(userData);

module.exports = Userseed;