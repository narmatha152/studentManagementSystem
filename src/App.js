import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login/loginindex'
import  GridComplexExample from './components/Register/registerindex'
// import { Home } from './components/Homepage'
import Demodash from './components/Dashboard/Demodash'
// import FormDialog from './components/Dashboard/studentDetails'
 

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='' element={<Home/>}/> */}
       <Route path='' element={<Login/>}/>
       <Route path='/register' element={<GridComplexExample/>}/>
       <Route path='/demo' element={<Demodash/>}/>
       {/* <Route path='/student' element={<FormDialog/>}/> */}

       
      </Routes>
    </Router>
 
  )
}
