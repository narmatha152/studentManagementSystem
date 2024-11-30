import { configureStore } from "@reduxjs/toolkit";
 import studentSlice from './Reducer/reducer'
export const store = configureStore({
  reducer: {
    student: studentSlice
  },
});