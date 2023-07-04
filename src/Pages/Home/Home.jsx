import React from 'react'
import Profile from '../../assets/home.jpg'
import {Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './Home.css'
function Home() {
  return (
    <section className="home section grid">
     <picture> 
      <img loading='lazy' src={Profile} alt="" className="home_img" /> </picture>
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