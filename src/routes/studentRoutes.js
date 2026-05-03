import express from "express";
import { deleteStudent, getStudent, updateStudent } from "../controllers/studentControllers.js";

export const studentRoutes = express.Router();

studentRoutes.get("/", getStudent);

studentRoutes.put("/update-student", updateStudent);

studentRoutes.delete("/delete-student", deleteStudent);