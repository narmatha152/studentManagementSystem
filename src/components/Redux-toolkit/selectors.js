const studentSelector=(state)=>{
return state.student
}
const userData=(state)=>{
    return studentSelector(state).userData
}
const studentDetails = (state)=>{
    return studentSelector(state).studentDetails
}
const allStudentList=(state)=>{
    return studentSelector(state).studentList 
}
const createdStudentList=(state)=>{
    return studentSelector(state).createdStudent //this name is taken from the reducer page,it is a key
}
//update
// const updateStudent=(state)=>{
//     return studentSelector(state).updateStudent
// }
 
 
export {userData,studentDetails,allStudentList,createdStudentList}

