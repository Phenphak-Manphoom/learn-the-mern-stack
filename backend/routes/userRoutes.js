import express, { Router } from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

const userRoutes = Router();

userRoutes.post("/", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/me", protect, getMe);

export default userRoutes;
