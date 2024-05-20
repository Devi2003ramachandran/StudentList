import addstudentModel from "../model/studentModel.js";

const studentpostdata=async (req,res) => {
    const {Name,Email,Phone,Enrollnumber,DateOfAdmission}=req.body

    try{
        const studata=await addstudentModel.create({Name,Email,Phone,Enrollnumber,DateOfAdmission})
        res.json({msg:'student data posted',studata})
    }catch(err){
        res.json({msg:"posted error"})
    }
}
const studengetdata=async (req,res) =>{
    try{
        const getdata=await addstudentModel.find({})
        res.json(getdata)
    }catch(err){
        res.json({msg:'getted error'})
    }
} 

const updatedata=async (req,res) => {
    const {id}=req.params

    try{
        const updatedata=await addstudentModel.findByIdAndUpdate({ _id:id},{ ...req.body});
        // console.log(updatedata);
        res.json({msg:"data updated",updatedata})
    }catch(err){
        res.json({msg:"update error"})
    }
}

const deletedata=async (req,res) => {
    const {id}=req.params;
    try{
        const deletedata=await addstudentModel.findByIdAndDelete(id);
        res.json({msg:'successfully deleted',deletedata})
    }catch(err){
        res.json({msg:"delete error"})
    }
}

export {studentpostdata,studengetdata,updatedata,deletedata}