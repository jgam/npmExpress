import express from "express";
import routes from "../routes.js";
import {
  users,
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
