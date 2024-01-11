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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
