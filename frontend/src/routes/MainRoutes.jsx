import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LoginSuccess from '../pages/navbar/LoginSuccess'
import Home from '../pages/Home'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login/success' element={<LoginSuccess/>} />
    </Routes>
  )
}

export default MainRoutes