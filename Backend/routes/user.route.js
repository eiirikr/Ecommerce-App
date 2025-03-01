import { Router } from "express";
import {
  loginController,
  logoutController,
  registerUserController,
  updateUserDetails,
  uploadAvatar,
  verifyEmailController,
} from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const userRouter = Router();

// Register User Route
userRouter.post("/register", registerUserController);

// Verify Email Route
userRouter.post("/verify-email", verifyEmailController);

// Login Route
userRouter.post("/login", loginController);

// Logout Route
userRouter.get("/logout", auth, logoutController);

// Upload User Avatar
userRouter.put("/upload-avatar", auth, upload.single("avatar"), uploadAvatar);

// Update User Details
userRouter.put("/update-user", auth, updateUserDetails);

export default userRouter;
