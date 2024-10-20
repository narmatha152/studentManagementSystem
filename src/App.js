import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login/loginindex'
import Register from './components/Register/registerindex'
import { Home } from './components/Homepage'
import { Dashboard } from './components/Dashboard/dashboard'
 


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
 
  )
}
