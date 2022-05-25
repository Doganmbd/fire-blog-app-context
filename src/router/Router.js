import React from 'react'
import {BrowserRouter as Routers , Routes,Route} from "react-dom-router"
import Navbar from '../components/Navbar'

const Router = () => {
  return (
    <div>
        <Routers>
            <Navbar />
            <Routes>

            </Routes>
        </Routers>
    </div>
  )
}

export default Router