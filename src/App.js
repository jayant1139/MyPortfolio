import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'


function App() {
  return (
    <HashRouter>
    <Navbar/>
   
   
    <Routes>
      <Route path='/MyPortfolio/home' element={<Home/>}/>
      <Route path='/MyPortfolio/About' element={<About/>}/>
      <Route path='/MyPortfolio/Portfolio' element={<Portfolio/>}/>
      <Route path='/MyPortfolio/Contact' element={<Contact/>}/>
      <Route path='/MyPortfolio/About' element={<About/>}/>
      <Route path='*' element={<Home/>} />

    </Routes>
    </HashRouter>
  )
}

export default App