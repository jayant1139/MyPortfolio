import React from 'react'
import {FiSend} from 'react-icons/fi'
import './Contact.css'
import{
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,FaLinkedinIn,FaInstagram, FaYoutube,
} from 'react-icons/fa'
function Contact() {
  return (
    <section className='contact section'>
      <h2 className="section_title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact_container container grid">
        <div className="contact_data">
          <h3 className='contact_title'>
            Don't be Shy!
          </h3>
          <p className="contact_description">
            Feel free to get in touch, I am always excited and open to discuss new projects, creative ideas or opportunities to be the part of your visions
          </p>

          <div className="contact_info">
            <div className="info_item">
              <FaEnvelopeOpen className='info_icon'/>
              <div className="">
              <span className="info_title">Mail me
              </span>
              <h4 className="info_desc">jayantsingh331@gmail.com
              </h4>
              </div>
              
              </div>
              <div className="info_item">
              <FaPhoneSquareAlt className='info_icon'/>
              <div className="">
              <span className="info_title">CAll me
              </span>
              <h4 className="info_desc">+91 9928311076
              </h4>
              </div>
              </div>

            
          </div>

          <div className="contact_socials">
            <a href="https://www.linkedin.com/in/jayantsingh1139/" target='_blank' className='contact_social_links'><FaLinkedinIn/></a>
            <a href="https://www.instagram.com/jayant1139/" target='_blank' className='contact_social_links'><FaInstagram/></a>
            <a href="" className='contact_social_links'><FaYoutube/></a>
          </div>
        </div>

        <form action="" className="contact_form">
          <div className="form_input-group">
            <div className="form_input-div">
              <input type="text" className="form_control" placeholder='Your Name' />
              <input type="email" className="form_control" placeholder='Your Email' />
              <input type="text" className="form_control" placeholder='Your Subject' />
            </div>
          </div>

          <div className="form_input-div">
            <textarea placeholder="Your Message" id="" cols="30" rows="10" className="form_control textarea"></textarea>
          </div>

          <button className="button">
            Send Message
          <span className="button_icon contact_button-icon">
            <FiSend/>
          </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact