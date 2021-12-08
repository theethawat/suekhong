import Mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const Schema = Mongoose.Schema;

const UserSchema = new Schema({
  id: String,
  name: String,
  username: String,
  password: String,
  role: { type: String, default: "USER" },
});

UserSchema.plugin(passportLocalMongoose);

const UserModel = Mongoose.model("User", UserSchema);

export default UserModel;
