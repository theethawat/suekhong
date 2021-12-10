import Mongoose from "mongoose";
import hash from "object-hash";
import uniqueValidator from "mongoose-unique-validator";

import config from "../configs/app";

const Schema = Mongoose.Schema;

const UserSchema = new Schema({
  id: String,
  name: String,
  username: {
    type: String,
    index: true,
    unique: true,
  },
  password: String,
  role: { type: String, default: "USER" },
});

UserSchema.plugin(uniqueValidator);

UserSchema.methods.passwordHash = (password) => {
  return hash.sha1({
    secret: config.secret,
    password: password,
  });
};

UserSchema.methods.validPassword = (password, userObj) => {
  return (
    hash.sha1({
      secret: config.secret,
      password: password,
    }) === userObj.password
  );
};

UserSchema.pre("save", function (next) {
  this.password = this.passwordHash(this.password);
  next();
});

const UserModel = Mongoose.model("User", UserSchema);

export default UserModel;
