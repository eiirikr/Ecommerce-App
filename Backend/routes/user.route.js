import { Router } from "express";
import {
  forgotPasswordController,
  loginController,
  logoutController,
  refreshToken,
  registerUserController,
  resetPassword,
  updateUserDetails,
  uploadAvatar,
  userDetails,
  verifyEmailController,
  verifyForgotPasswordOtp,
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

// Forgot Password (not login)
userRouter.put("/forgot-password", forgotPasswordController);

// Verify Forgot Password Otp
userRouter.put("/verify-forgot-password-otp", verifyForgotPasswordOtp);

// Reset Password
userRouter.put("/reset-password", resetPassword);

// Refresh Token Controller
userRouter.post("/refresh-token", refreshToken);

// Get login User Details
userRouter.get("/user-details", auth, userDetails);

export default userRouter;
