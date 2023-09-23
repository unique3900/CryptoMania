import React from 'react'
import Navbar from './Pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import SubNav from './Pages/SubNav'
import Hero from './Pages/Hero'
import HomeTableList from './Pages/HomeTableList'

const App = () => {
  return (
    <div className='w-screen h-screen bg-black text-white py-2'>
      <Navbar />
      <SubNav />
      <Hero />
      <HomeTableList/>
      <Routes>
        <Route path='' Component={""} />
        <Route path='/coins' Component={<h1>Coins</h1>}/>
      </Routes>
    </div>
  )
}

export default App
