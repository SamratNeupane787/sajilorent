import mongoose , {Schema ,models} from "mongoose";
 
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const User = models.User || mongoose.model("User", userSchema);

export default User;
