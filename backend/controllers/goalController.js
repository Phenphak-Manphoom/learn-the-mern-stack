import asyncHandler from "express-async-handler";
import { goal } from "../models/goalModel.js";

//@desc   Get goals
//route   GET api/goals
//access  Private
export const getGoal = asyncHandler(async (req, res) => {
  const goals = await goal.find({});
  res.status(200).json(goals);
});

//@desc   Set goals
//route   POST api/goals
//access  Private
export const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(404);
    throw new Error("Please add a text field");
  }
  const goals = await goal.create({
    text: req.body.text,
  });
  res.status(200).json(goals);
});

//@desc   Update goals
//route   PUT api/goals/:id
//access  Private
export const updateGoal = asyncHandler(async (req, res) => {
  const goals = await goal.findById(req.params.id);
  if (!goals) {
    res.status(400);
    throw new Error("Goal not found");
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
  const id = req.params.id;
  try {
    await goal.findOneAndDelete(id);
    res.status(200).json({ id: id });
  } catch (error) {
    return res.status(400).json({ massage: error });
  }
});
