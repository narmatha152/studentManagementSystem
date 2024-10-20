const mongoose = require("mongoose");
const staffSchema=new mongoose.Schema({
  user:{type:String,required:true},
  firstName:{type:String,required:true},
  lastName:{type:String,required:true},
  userName:{type:String,required:true},
  password:{type:String,required:true},
  confirmPassword:{type:String,required:true},
  emailId:{type:String,required:true},
  phoneNumber:{type:String,required:true},
  dateOfBirth:{type:String,required:true},
  gender:{type:String,required:true},
  address:{type:String,required:true},
})
const studentSchema=new mongoose.Schema({
  user:{type:String,required:true},
  firstName:{type:String,required:true},
  lastName:{type:String,required:true},
  userName:{type:String,required:true},
  password:{type:String,required:true},
  confirmPassword:{type:String,required:true},
  emailId:{type:String,required:true},
  phoneNumber:{type:String,required:true},
  dateOfBirth:{type:String,required:true},
  gender:{type:String,required:true},
  address:{type:String,required:true},
})
const staff=mongoose.model( 'staff',staffSchema)
const student=mongoose.model('student',studentSchema)

module.exports = {staff,student};

