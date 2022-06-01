import React from 'react'
import {BrowserRouter as Routers , Routes,Route} from "react-router-dom"
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'
import Details from '../pages/Details'
import Login from '../pages/Login'
import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import Update from '../pages/Update'
import PrivateRouter from './PrivateRouter'

const Router = () => {
  return (
    <div>
        <Routers>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register/>} />
              {/* kullanıcı direk linkten login yapmadan sayfaya erişim yapamasın diye privaterouter kullanıyorum */}
              <Route element={<PrivateRouter/>}>
                <Route path="/profile" element={<Profile/>} />
                <Route path="/newblog" element={<NewBlog />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/update/:id" element={<Update />} />
              </Route>
            </Routes>
        </Routers>
    </div>
  )
}

export default Router