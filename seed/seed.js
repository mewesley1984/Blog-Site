const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = require("./userData.json"),
  postData = require("./postData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  console.log("Seeding users...");
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  console.log("Seeding posts...");
  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
