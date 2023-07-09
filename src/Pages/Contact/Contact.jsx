import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import './Contact.css'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt, FaLinkedinIn, FaInstagram, FaGithub,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vq0ccgj', 'template_g7dgr8v', form.current, '8wFe5FUbbADap1B6D')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    // Display toast notification
    toast(' Email Sent successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };



  return (
    <section className='contact section'>
      <h2 className="section_title get-in-touch-title">
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
              <FaEnvelopeOpen className='info_icon' />
              <div className="">
                <span className="info_title">Mail me
                </span>
                <h4 className="info_desc">jayantsingh331@gmail.com
                </h4>
              </div>

            </div>
            <div className="info_item">
              <FaPhoneSquareAlt className='info_icon' />
              <div className="">
                <span className="info_title">Call me
                </span>
                <h4 className="info_desc">+91 9928311076
                </h4>
              </div>
            </div>


          </div>

          <div className="contact_socials">
            <Link to="https://www.linkedin.com/in/jayantsingh1139/" target='_blank' className='contact_social_links'><FaLinkedinIn /></Link>
            <Link to="https://www.instagram.com/jayant1139/" target='_blank' className='contact_social_links'><FaInstagram /></Link>
            <Link to="https://github.com/jayant1139" target='_blank' className='contact_social_links'><FaGithub /></Link>
          </div>
        </div>

        <form ref={form} className="contact_form" onSubmit={sendEmail}>
          <div className="form_input-group">
            <div className="form_input-div">
              <input type="text" className="form_control" placeholder='Your Name' name='from_name' value={name} onChange={handleNameChange} required />
              <input type="email" className="form_control" placeholder='Your Email' name='from_email' value={email} onChange={handleEmailChange} required />
              <input type="text" className="form_control" placeholder='Your Subject' name='subject' value={subject} onChange={handleSubjectChange} />
            </div>
          </div>

          <div className="form_input-div">
            <textarea placeholder="Your Message" className="form_control textarea" name='message' value={message} onChange={handleMessageChange} required></textarea>
          </div>

          <button className="button send-msg" type='submit' value='send'

          >
            Send Message
            <span className="button_icon contact_button-icon">
              <FiSend />
            </span>
          </button>
          <ToastContainer position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark" />
        </form>
      </div>
    </section>
  )
}

export default Contact