import React from 'react'
import Navbar from './components/Navbar'
// import LeftPart from './components/LeftPart'
import RightPart from './components/RightPart'
import MainPage from './components/MainPage'
import MyProfile from './pages/MyProfile'


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
        <MainPage/>
      
      </div>
    </>
  )
}

export default App