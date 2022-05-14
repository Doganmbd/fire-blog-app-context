import {createContext , useContext } from 'react';


const AuthContext = createContext();


import React from 'react'

const AuthContextProvider = ({children}) => {



  return (
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider