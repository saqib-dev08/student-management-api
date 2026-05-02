import express from "express"
import { getStudent } from "./controllers/studentControllers.js";
import { authRoutes } from "./routes/authRoutes.js";
import { studentRoutes } from "./routes/studentRoutes.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

export const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);

app.use(errorMiddleware);