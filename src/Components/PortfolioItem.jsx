import React, { useState } from 'react'
import Close from '../assets/close-1.svg'
import { Tilt } from 'react-tilt';


const PortfolioItem = ({ img, title, details }) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    const defaultOptions = {
        reverse: true,  // reverse the tilt direction
        max: 20,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 600,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return (

        <div className="portfolio_item">
            <img src={img} alt="" className="portfolio_img" />
            <div className="portfolio_hover" onClick={toggleModal}>
                <h3 className='portfolio_title'>{title}</h3>
            </div>
            {modal && (
                <div className="portfolio_modal">
                    <Tilt options={defaultOptions}>
                        <div className="portfolio_modal-content">

                            <img src={Close} alt="" className="modal_close" onClick={toggleModal} />
                            <h3 className="modal_title">{title}</h3>
                            <ul className="modal_list grid">
                                {details.map(({ icon, title, desc, linkdemo }, index) => {
                                    return (
                                        <li className="modal_item" key={index}>
                                            <span className="item_icon">{icon}</span>

                                            <div className="">
                                                <span className="item_title">{title}</span>
                                                <a className="item_details" href={linkdemo} target='_blank' rel="noreferrer">{desc}</a>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>

                            <img src={img} alt="" className="modal_img" />
                        </div>
                    </Tilt>
                </div>

            )}
        </div>

    )
}

export default PortfolioItem