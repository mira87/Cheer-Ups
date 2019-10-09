const cheer = require("./cheer.json");
const user = require("./user.json");

const CheerUpModel = require("../../models/Cheer");
const UserModel = require("../../models/User");

CheerUpModel.deleteMany({})
  .then(() => {
    return CheerUpModel.insertMany(cheer);
  })
  .then(() => {
    console.log("It may work");
  })
  .catch(err => console.log(err, "MESSED UP SEEDS"));

UserModel.deleteMany({})
  .then(() => {
    return UserModel.insertMany(user);
  })
  .then(() => {
    console.log("It may work");
  })
  .catch(err => console.log(err, "MESSED UP SEEDS"));
