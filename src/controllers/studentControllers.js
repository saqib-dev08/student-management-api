import { Student } from "../models/studentSchema.js";
import { successResponse } from "../responseHandler/successResponse.js";

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

const updateStudent = (req, res, next) => {};

export { getStudent, updateStudent };
