import React from 'react'
import {BrowserRouter as Routers , Routes,Route} from "react-router-dom"
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'

const Router = () => {
  return (
    <div>
        <Routers>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/login" element={<Login />} />
              

            </Routes>
        </Routers>
    </div>
  )
}

export default Router