import React from 'react'
import {BrowserRouter as Routers , Routes,Route} from "react-router-dom"
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Register from '../pages/Register'

const Router = () => {
  return (
    <div>
        <Routers>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register/>} />
              <Route path="/profile" element={<Profile/>} />
              


            </Routes>
        </Routers>
    </div>
  )
}

export default Router