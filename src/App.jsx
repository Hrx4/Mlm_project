import React from 'react'
import Login from './pages/Login/Login'
import {  Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage"
import AdminMainPage from './pages/Admin/AdminMainPage';
import SignUp from './pages/Login/SignUp';
import SignIn from './pages/Login/SignIn';


const App = () => {
  return (
    <>
      {/* <div className=' h-screen overflow-hidden'>
      <Navbar/>
      <div className=' w-full h-full flex'>
        <LeftPart/>
        <RightPart/>
        <MainPage/>
      </div>
      </div> */}
<div>
  <Routes>
    <Route path='/login' element={<Login/>} index />
    <Route path='/' element={<MainPage/>}/>
    <Route path='/admin' element={<AdminMainPage/>}/>
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/signin" element={<SignIn/>} />

        </Routes>
</div>
    </>
  )
}

export default App