const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
    min: 6,
    max: 255
  },
  email: {
    type: String,
    require: true,
    max: 255
  },
  password: {
    type: String,
    require: true,
    max: 1024,
    min: 6
  }
});

module.exports = mongoose.model("users", UserSchema);
