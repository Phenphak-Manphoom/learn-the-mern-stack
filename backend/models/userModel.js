import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
    },
    password: {
      type: String,
      required: [true, "Please add password"],
    },
    name: {
      type: String,
      required: [true, "Please add name"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("users", userSchema);
