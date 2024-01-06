import mongoose from "mongoose";
const url =
  "mongodb+srv://kpinya:peesing@cluster.fzjzygp.mongodb.net/learn-mongo-restapi";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

export const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connection Successfully");
});
db.on("error", () => {
  console.log("Connection Failed");
});
