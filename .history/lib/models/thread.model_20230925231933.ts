import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
});

const User = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default User;