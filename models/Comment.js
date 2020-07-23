<<<<<<< HEAD
import mongoose from 'mongoose';
=======
import mongoose from "mongoose";
>>>>>>> affb1f5b3451c03d0252ee4e47fe7a67efca3a95

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
<<<<<<< HEAD
    required: 'Text is required',
=======
    required: "Text is required",
>>>>>>> affb1f5b3451c03d0252ee4e47fe7a67efca3a95
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

<<<<<<< HEAD
const model = mongoose.model('Comment', CommentSchema);
=======
const model = mongoose.model("Comment", CommentSchema);
>>>>>>> affb1f5b3451c03d0252ee4e47fe7a67efca3a95
export default model;
