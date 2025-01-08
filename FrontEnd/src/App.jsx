import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import UserSignup from './Pages/SignUp/UserSignup'
import CaptainLogin from './Pages/LoginPages/CaptainLogin'
import CaptainSignup from './Pages/SignUp/CaptainSignup'
import UserLogin from './Pages/LoginPages/UserLogin'
import Start from './Pages/Start'
import UserProtecteWrapper from './Components/UserProtecteWrapper'

function App() {
  return (
  <Routes>
    <Route path='/' element={<Start/>}/>
    <Route path='/user/signup' element={<UserSignup/>}/>
    <Route path='/captain/signup' element={<CaptainSignup/>}/>
    <Route path='/user/login' element={<UserLogin/>}/>
    <Route path='/captain/login' element={<CaptainLogin/>}/>
    <Route path='/home' element={
      <UserProtecteWrapper>
        <Home/>
      </UserProtecteWrapper>
    }/>
  </Routes>    
  )
}

export default App