import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  message: String,
});

export default mongoose.model("contactUs", userSchema);
