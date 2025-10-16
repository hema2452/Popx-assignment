import React from 'react'
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Account from './components/Account'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { DataProvider } from './Context/Data'

const App = () => {
  const[data, setUserData] =  useState(
    () => {
      const storedData = localStorage.getItem("userData");
      return storedData ? JSON.parse(storedData) : 
    [{
      name:"h",
      email:"e@mail.com",
      phonenumber:"123456789",
      password:"123",
      company:"a",
      agency:false
    }]
  })
  
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data))
  
  },[data])
  return (
      <Routes>
        <Route path="" element={<Welcome/>}/>
        <Route path="signin" element={<SignIn user={{data , setUserData}}/>}/>
        <Route path="signup" element={<SignUp user={{data, setUserData}}/>}/>
        <Route path="account" element={<Account user={{data , setUserData}}/>}/>
      </Routes>
   
  )
}

export default App
