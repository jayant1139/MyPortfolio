import React, {useEffect,useState} from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'
import Spinner from './Components/Spinner';
function App() {
  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after a certain delay (simulating image loading time)
    }, 3000); // Adjust the delay time according to your needs

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);
  if (isLoading) {
    return <Spinner />;
  }
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