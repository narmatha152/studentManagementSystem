import { createSlice } from "@reduxjs/toolkit";
import { createdStudent, deleteStudent, getAction, saveLogin,saveNewStudent,studentList, studentListShow, updateStudent } from "../action";

const initialState = {};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAction.fulfilled, (state, action) => {
      state["permission"] = action.payload;
    });
    builder.addCase(saveLogin.fulfilled,(state,action)=>{
        state['userData'] = action.payload
    })
    builder.addCase(saveLogin.rejected,(action)=>{    
        alert(" please check your username and password")
    })


    builder.addCase(saveNewStudent.fulfilled,(state,action)=>{
      state["studentDetails"] = action.payload;
    })
    builder.addCase(studentList.fulfilled,(state,action)=>{
      state['studentDetails'] = action.payload
    })
    builder.addCase(studentListShow.fulfilled,(state,action)=>{
      console.log(action.payload,30);
      
      state['studentList']=action.payload
    })

    builder.addCase(createdStudent.fulfilled,(state,action)=>{
      state['createdStudent']=action.payload
    })
    builder.addCase(deleteStudent.fulfilled,(state,action)=>{
      console.log(state,action,37)
    })
    //update
    // builder.addCase(updateStudent.fulfilled,(state,action)=>{
    //   state['updateStudent']=action.payload
      
    // })
    
  }

});


export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;
