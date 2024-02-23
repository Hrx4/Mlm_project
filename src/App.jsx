import React from 'react'
import Navbar from './components/Navbar'
import LeftPart from './components/LeftPart'
import RightPart from './components/RightPart'

const App = () => {
  return (
    <>
      <div className=' h-screen overflow-hidden'>
      <Navbar/>
      <div className=' w-full h-full flex'>
        <LeftPart/>
        <RightPart/>
      </div>
      </div>
    </>
  )
}

export default App