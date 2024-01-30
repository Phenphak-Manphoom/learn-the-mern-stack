import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import bodyParser from "body-parser";
import goalRoutes from "./routes/goalRoutes.js";
import { errorHandler } from "./middleware/errorMidleware.js";
import { db } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

// serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}
app.use(errorHandler);
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
