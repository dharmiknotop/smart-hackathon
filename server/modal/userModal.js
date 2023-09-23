import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  address: String,
  userType: String,
});

export default mongoose.model("developer_panel_users", userSchema);
