import express from "express";
import { deleteStudent, getAllStudents, getStudent, updateStudent } from "../controllers/studentControllers.js";

export const studentRoutes = express.Router();

studentRoutes.get("/", getStudent);

studentRoutes.get("/all-students", getAllStudents);

studentRoutes.put("/update-student", updateStudent);

studentRoutes.delete("/delete-student", deleteStudent);