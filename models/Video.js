<<<<<<< HEAD
import mongoose from 'mongoose';
=======
import mongoose from "mongoose";
>>>>>>> affb1f5b3451c03d0252ee4e47fe7a67efca3a95

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
<<<<<<< HEAD
    required: 'File URL is required',
  },
  title: {
    type: String,
    required: 'Tilte is required',
=======
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Tilte is required",
>>>>>>> affb1f5b3451c03d0252ee4e47fe7a67efca3a95
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
      ref: 'Comment',
=======
      ref: "Comment",
>>>>>>> affb1f5b3451c03d0252ee4e47fe7a67efca3a95
    },
  ],
});

<<<<<<< HEAD
const model = mongoose.model('Video', VideoSchema);
=======
const model = mongoose.model("Video", VideoSchema);
>>>>>>> affb1f5b3451c03d0252ee4e47fe7a67efca3a95
export default model;
