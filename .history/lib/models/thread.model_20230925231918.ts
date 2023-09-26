import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
});

const User = mongoose.models.User || mongoose.model("Thread", threadSchema);

export default User;