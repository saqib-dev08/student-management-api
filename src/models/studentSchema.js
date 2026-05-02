import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

    firstName : {
        type : String,
        required : true
    },
    lastName : String,
    email : {
        type : String,
        required : true,
        unique : true
    },
     password : {
        type : String,
        required : true
    },
    age : Number

});

export const Student = mongoose.model("students", studentSchema);