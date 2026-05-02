import { Student } from "../models/studentSchema.js";
import { successResponse } from "../responseHandler/successResponse.js";
import bcrypt from "bcrypt";


const register = async (req, res, next) => {
    
    try {
        
        const {firstName, lastName, email, password, age} = req.body;
        
        console.log("body ==>", req.body);
        
       bcrypt.hash(password, 12, async function(err, hash){
            
            const signedStudent = await Student.create({
                ...req.body,
                password: hash
            });
            console.log("signedStudent", signedStudent);
            
            successResponse(res, 200, true, "Student signed up successfully!", signedStudent);
        });
    } catch (error) {
        next(error)
    }

}

const login = (req, res, next) => {

}

export { register, login }