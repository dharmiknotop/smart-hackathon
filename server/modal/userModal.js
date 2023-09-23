import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  address: String,
  userType: String,
  isGarbageFull: { type: Boolean, default: false },
});

export default mongoose.model("users", userSchema);
