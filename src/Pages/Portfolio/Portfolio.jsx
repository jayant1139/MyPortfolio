import React from 'react'
import { portfolio } from '../../data'
import PortfolioItem from '../../Components/PortfolioItem'
import './Portfolio.css'
import { Tilt } from 'react-tilt'
function Portfolio() {
  const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            30,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          600,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  return (
    <section className="portfolio section">
      <h2 className="section_title portfolio-title">My <span>Portfolio</span></h2>
      <div className="portfolio_container container grid">
        {portfolio.map((item)=>{
          return <Tilt options={defaultOptions}><PortfolioItem key={item.id}{...item}/></Tilt>
      
})}
      </div>
    </section>
  )
}

export default Portfolio