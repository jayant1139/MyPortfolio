import React, { useEffect,useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'
import alanBtn from '@alan-ai/alan-sdk-web';
import { Audio, BallTriangle, Rings } from 'react-loader-spinner';

function App() {
const [isLoading,setIsLoading]=useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!');
      setIsLoading(false);
      alanBtn({
        key: '6c424b283552079def6b8ac9e8ed82662e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
  
          if (commandData.command === 'aboutpage' || commandData.command === 'about') {
            // Call the client code that will react to the received command
            window.location.href = '#/About';
          }
          else if (commandData.command === 'homepage') {
            // Call the client code that will react to the received command
            window.location.href = '#/';
          }
          else if (commandData.command === 'portfoliopage') {
            // Call the client code that will react to the received command
            window.location.href = '#/Portfolio';
          }
          if (commandData.command === 'contactpage') {
            // Call the client code that will react to the received command
            window.location.href = '#/Contact';
          }
        }
      })
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <BallTriangle
    height="100"
    width="100"
    radius="5"
    color="	#8a2ce2"
    ariaLabel="loading"
    
    wrapperClass="loader-spinner" 
  />
  }

  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<Home />} />

      </Routes>
    </HashRouter>
  )
}

export default App