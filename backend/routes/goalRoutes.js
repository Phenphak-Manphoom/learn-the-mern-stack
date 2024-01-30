import { Router } from "express";
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalController.js";
import protect from "../middleware/authMiddleware.js";

const goalRoutes = Router();
goalRoutes.use(protect);

goalRoutes.get("/", getGoals);
goalRoutes.post("/", setGoal);
goalRoutes.put("/:id", updateGoal);
goalRoutes.delete("/:id", deleteGoal);

export default goalRoutes;
