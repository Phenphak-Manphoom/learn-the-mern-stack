import express, { Router } from "express";
import {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalController.js";

const goalRoutes = Router();

goalRoutes.get("/", getGoal);
goalRoutes.post("/", setGoal);
goalRoutes.put("/:id", updateGoal);
goalRoutes.delete("/:id", deleteGoal);

export default goalRoutes;
