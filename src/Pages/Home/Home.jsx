import React from 'react'
import Profile from '../../assets/home.jpg'
import optimize from '../../assets/home-optimize.jpg'
import optimized from '../../assets/home-optimize-min.jpg'
import {Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { Tilt } from 'react-tilt'
import './Home.css'
function Home() {
  const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            25,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          100,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  return (
    <section className="home section grid">
     <Tilt options={defaultOptions}> 
      <img loading='lazy' src={Profile} srcSet={`${optimized} ${200}w, ${optimize} ${500}w,` }  alt="" className="home_img" /> </Tilt>
    <div className="home_content">
      <div className="home_data">
        <h1 className="home_title">
          <span id='jayant'>I'm Jayant Singh.</span> <br></br> Web Developer
        </h1>
        <p className="home_description">
          I'm a Front-end developer focused on crafting clean and user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
        </p>
        <Link to='/MyPortfolio/About' className='button more-about'>More About Me <span className='button_icon'><FaArrowRight/></span></Link>
      </div>
    </div>

    <div className="color_block"></div>

    </section>
  )
}

export default Home