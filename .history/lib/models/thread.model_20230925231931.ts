import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
});

const User = mongoose.models.Thre || mongoose.model("Thread", threadSchema);

export default User;