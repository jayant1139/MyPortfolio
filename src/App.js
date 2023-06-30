import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Portfolio' element={<Portfolio/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='About' element={<About/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App