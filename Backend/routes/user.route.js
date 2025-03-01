import { Router } from "express";
import {
  loginController,
  logoutController,
  registerUserController,
  verifyEmailController,
} from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";

const userRouter = Router();

// Register User Route
userRouter.post("/register", registerUserController);

// Verify Email Route
userRouter.post("/verify-email", verifyEmailController);

// Login Route
userRouter.post("/login", loginController);

// Logout Route
userRouter.get("/logout", auth, logoutController);

export default userRouter;
