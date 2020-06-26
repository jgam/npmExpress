import express from "express";
import routes from "../routes.js";
import {
  videos,
  upload,
  videoDetail,
  editVideo,
  deleteVideo,
} from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
