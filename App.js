const express=require('express')
const mongoose=require('mongoose')
const cors = require('cors')
const userRouter=require('./Router/userRouter')
const app=express()
app.use(express.json())
app.use(cors())

 mongoose.connect('mongodb://localhost:27017/student',{useNewUrlParser:true},{useUnifiedTopology:true})
 .then(()=>{console.log("db connect successfully")})
 .catch(()=>{console.log("db is not connected")})

app.use('/management',userRouter)
const PORT=process.env.PORT||5000
app.listen(PORT,()=>{
    console.log("server running",PORT)
})
 