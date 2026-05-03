import { Student } from "../models/studentSchema.js";
import { successResponse } from "../responseHandler/successResponse.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();


const register = async (req, res, next) => {

    try {
        const {firstName, lastName, email, password, age} = req.body;
        console.log("body ==>", req.body);
        
       bcrypt.hash(password, 12, async function(err, hash){
            
            const signedStudent = await Student.create({
                ...req.body,
                password: hash
            });
            console.log("signedStudent ==>", signedStudent);

            successResponse(res, 200, true, "Student signed up successfully!", signedStudent);
        });
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log("body ==>", req.body);
        
        if(!email || !password) throw new Error("Invalid Credentials!");
        
        const foundStudent = await Student.findOne({email});
        
        bcrypt.compare(password, foundStudent.password, function(err, result){
            console.log("result ==>", result);

            if(result){
                const token = jwt.sign({
                    email : foundStudent.email,
                    id : foundStudent._id
                }, process.env.JWT_SECRET_KEY);

                successResponse(res, 200, true, "Student logged in succesfully!", foundStudent, token)
            } else{
                throw new Error(err)
            }
            
        });


        console.log("foundStudent ==>", foundStudent);
        
    } catch (error) {
        next(error);
    }
    
    
    
}

export { register, login }