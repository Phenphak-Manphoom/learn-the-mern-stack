import mongoose from "mongoose";
const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);
export const Goal = mongoose.model("goals", goalSchema);
