const sequelize = require("../config/connection");
const Postseed = require("./postInfo");
const Userseed = require("./userInfo");
const Commentseed = require("./commentInfo");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await Userseed();
  await Postseed();
  await Commentseed();
  process.exit(0);
};

seedAll();
