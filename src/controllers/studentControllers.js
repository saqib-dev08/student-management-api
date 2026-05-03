import jwt from "jsonwebtoken";
import { Student } from "../models/studentSchema.js";
import { successResponse } from "../responseHandler/successResponse.js";
import dotenv from "dotenv";

dotenv.config();

const getStudent = async (req, res, next) => {
  try {
    const { studentId } = req.body;
    console.log("body ==>", req.body);

    if (!studentId) throw new Error("Id is required!");

    const myStudent = await Student.findById({ _id: studentId });
    console.log("myStudent ==>", myStudent);

    successResponse(res, 200, true, "Student fetched successfully!", myStudent);
  } catch (error) {
    next(error);
  }
};

const updateStudent = async (req, res, next) => {
    try {
        const studentUpdates = req.body;
        console.log("Student updates ==>", studentUpdates);
        
        const studentToken = req.headers.authorization.split(" ")[1];
        console.log("studentToken ==>", studentToken);
        
        const decodedToken = jwt.verify(studentToken, process.env.JWT_SECRET_KEY);
        console.log("decodedToken ==>", decodedToken);
        
        const updatedStudent = await Student.findByIdAndUpdate(decodedToken.id, studentUpdates);
        console.log("updatedStudent ==>", updatedStudent);

        successResponse(res, 200, true, "Student data updated successfully!", updatedStudent);
        
} catch (error) {
    next(error);
}
};

const deleteStudent = async (req, res, next) => {
      try {
        const studentToken = req.headers.authorization.split(" ")[1];
        console.log("studentToken ==>", studentToken);
        
        const decodedToken = jwt.verify(studentToken, process.env.JWT_SECRET_KEY);
        console.log("decodedToken ==>", decodedToken);
        
        const deletedStudent = await Student.findByIdAndDelete(decodedToken.id);
        console.log("deletedStudent ==>", deletedStudent);

        successResponse(res, 200, true, "Student deleted successfully!", deletedStudent);

} catch (error) {
    next(error);
}
}

export { getStudent, updateStudent, deleteStudent };
