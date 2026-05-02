import express from "express"
import { getStudent } from "./controllers/studentControllers";
import { authRoutes } from "./routes/authRoutes.js";
import { studentRoutes } from "./routes/studentRoutes.js";

export const app = express();

app.use(express.json());

app.use("/auth", authRoutes)
app.use("/student", studentRoutes)