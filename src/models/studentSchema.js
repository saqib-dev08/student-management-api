import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

    firstName : String,
    lastName : String,
    email : {
        type : String,
        required : true,
        unique : true
    },
     password : {
        type : String,
        required : true
    }

});

export const Student = mongoose.model("students", studentSchema);