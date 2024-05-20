import mongoose from "mongoose";

const studentSchema=mongoose.Schema({
    Name:String,
    Email:String,
    Phone:Number,
    Enrollnumber:Number,
    DateOfAdmission:Date
})

const addstudentModel=mongoose.model("student",studentSchema)

export default addstudentModel;