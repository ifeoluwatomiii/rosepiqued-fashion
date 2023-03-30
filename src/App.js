import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fragrances from './pages/Fragrances'
import Furnitures from './pages/Furnitures'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div className='font-manrope'>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/fragrances" element={<Fragrances/>}/>
        <Route path='/furnitures' element={<Furnitures/>}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
