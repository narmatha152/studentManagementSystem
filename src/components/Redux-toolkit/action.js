import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAction = createAsyncThunk("/action", async (state, payload) => {
  const res = await axios.get(
    "http://localhost:5000/management/modulePermission?userType=staff"
  );
  console.log(res, 6);
  return res.data.data;
});
export const saveLogin = createAsyncThunk("/login", async (payload) => {
  const { userName,password,callBack } = payload;
  console.log(payload, 11);
  const res = await axios.post("http://localhost:5000/management/login", {
    userName,
    password,
  });
  callBack(res.status);
  console.log(res, 12);
  return res.data.data;
});
// new studentdetails dta created api
export const saveNewStudent = createAsyncThunk(
  "/createStudent",
  async (payload
  ) => {
    const {input,callBack,_id}=payload
    const {
      studentId,
      studentName,
      dob,
      contactNumber,
      email,
      address,
      enrollmentDate,
      parentName,
      parentNumber,
    } = input;
   
    console.log(callBack,39);
    const res = await axios.post(
      "http://localhost:5000/management/createStudent",
      {
        studentId,
        studentName,
        dob,
        contactNumber,
        email,
        address,
        enrollmentDate,
        parentName,
        parentNumber,
        _id
      }
    );
  callBack(res.status) 
  
 return res.data.data;
  }
);

export const studentList = createAsyncThunk('/list',async()=>{
  const res = await axios.post('http://localhost:5000/management/createdStudentList')
  return res.data.data;
})
export const studentListShow=createAsyncThunk("/studentList",async()=>{
    const res = await axios.get(
      "http://localhost:5000/management/studentList"
      
    );
 return res.data.data;
  }
   
)
export const createdStudent=createAsyncThunk('/createdStudent',async(state,payload)=>{
  console.log(payload,74);
  const res=await axios.get(`http://localhost:5000/management/createdStudentDetails?userId=${payload._id} & userType=${payload.loginedUserType}`)
  return res.data.data;
  
})
 
//delete student by staff
export const deleteStudent=createAsyncThunk('/delete',async(payload)=>{
  const res = await axios.delete(`http://localhost:5000/management/deleteStudent?userId=${payload._id}`)
  payload.cb()
  return res.data.data; 
})

//edit code
// export const updateStudent=createAsyncThunk('/update',async(payload)=>{
//   const res=await axios.put(`http://localhost:5000/management/update?userId=${payload._id}`)
//   return res.data.data
// })