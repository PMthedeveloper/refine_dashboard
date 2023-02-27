import mongoose from "mongoose";

let User;

try {
  User = mongoose.model("User");
} catch {
  const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: true },
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
  });
  User = mongoose.model("User", UserSchema);
}

export default User;
