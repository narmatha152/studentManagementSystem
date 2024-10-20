const express = require('express')
const {staff,student}=require('../Models/usermodel')
const router=express.Router()
router.use(express.json())

 const validation=(req,res,next)=>{
  const {userName,password}=req.body;
   if(userName && password)return next()
    return res.status(404).json({message:'your input is not valid'})
 }
router.post('/login',validation,async(req,res)=>{
  const {userName,password}=req.body;
  try {
    const staffUser=await staff.findOne({userName,password},{role:1,_id:1,fullname:1}).lean();
    if(staffUser){
      const role=staffUser.role;
      const _id=staffUser._id;
      const userName=staffUser.fullname;
      return res.status(200).json({message:" staff login successfully",user:{role,_id,userName}});
    }

    const studentUser=await student.findOne({userName,password},{role:1,_id:1,fullname:1}).lean()
    if(studentUser){
      const role=studentUser.role;
      const _id=studentUser._id;
      const userName=studentUser.fullname;
     return res.status(200).json({message:" student login successfully", user:{role,_id,userName}})
  
    } 
   
   }
  catch (error) {
    res.status(500).json({message:"cannot login"})
  }
})

router.post('/staff',async(req,res)=>{
  const{user,firstName,lastName,userName,password,confirmPassword,emailId,phoneNumber,dateOfBirth,gender,address}=req.body
  try {
    const newStaff=new staff({user,firstName,lastName,userName,password,confirmPassword,emailId,phoneNumber,dateOfBirth,gender,address}) 
    await newStaff.save();
    res.status(200).json({message:"register successfully"})
  } 
 
  catch (error) {
    res.status(500).json({message:"cannot register"})
  }
})


router.post('/student',async(req,res)=>{
  const{user,firstName,lastName,userName,password,confirmPassword,emailId,phoneNumber,dateOfBirth,gender,address}=req.body
  try {
    const newStaff=new student({user,firstName,lastName,userName,password,confirmPassword,emailId,phoneNumber,dateOfBirth,gender,address}) 
    await newStaff.save();
    res.status(200).json({message:"register successfully"})
  } 
 
  catch (error) {
    res.status(500).json({message:"cannot register"})
  }
})
 


module.exports=router;