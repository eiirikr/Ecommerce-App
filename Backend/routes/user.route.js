import { Router } from "express";
import {
  loginController,
  registerUserController,
  verifyEmailController,
} from "../controllers/user.controller.js";

const userRouter = Router();

// Register User Route
userRouter.post("/register", registerUserController);

// Verify Email Route
userRouter.post("/verify-email", verifyEmailController);

// Login Route
userRouter.post("/login", loginController);

export default userRouter;
