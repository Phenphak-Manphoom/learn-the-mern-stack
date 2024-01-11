import asyncHandler from "express-async-handler";
import { Goal } from "../models/goalModel.js";
import { User } from "../models/userModel.js";

//@desc   Get goals
//route   GET api/goals
//access  Private
export const getGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.find({ user: req.user.id });
  res.status(200).json(goal);
});

//@desc   Set goals
//route   POST api/goals
//access  Private
export const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    user: req.user.id,
    text: req.body.text,
  });
  res.status(200).json(goal);
});

//@desc   Update goals
//route   PUT api/goals/:id
//access  Private
export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const user = await User.findById(req.user.id);
  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const updateGoal = await goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateGoal);
});

//@desc   Delete goals
//route   DELETE api/goals/:id
//access  Private
export const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const user = await User.findById(req.user.id);
  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  await goal.deleteOne();
  res.status(200).json({ id: req.params.id });
});
