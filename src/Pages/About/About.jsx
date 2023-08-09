import React from 'react'
import './About.css'
import { resume } from '../../data'
import Info from '../../Components/Info'
import Stats from '../../Components/Stats'
import CV from '../../assets/cv.pdf'
import Skills from '../../Components/Skills'
import { FaDownload } from 'react-icons/fa'
import ResumeItem from '../../Components/ResumeItem'
function About() {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section_title about-title">About <span>Me</span></h2>
        <div className="about_container grid">
          <div className="about_info">
            <h3 className="section_subtitle">
              Personal Infos
            </h3>
            <ul className="info_list grid">
              <Info />
            </ul>

            <a href={CV} download='' className="button cv">Download Cv <span className="button_icon"><FaDownload /></span></a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>
      <section className="resume">

        <h3 className="section_subtitle subtitle_center"> Experience & Education</h3>
        <div className="resume_container grid">
          <div className="resume_data">

            {resume.map((val) => {
              if (val.category === 'experience') {
                return <ResumeItem key={val.id}{...val} />;
              }
            })}
          </div>

          <div className="resume_data">
            {resume.map((val) => {
              if (val.category === 'education') {
                return <ResumeItem key={val.id}{...val} />
              }
            })}
          </div>
        </div>
      </section>

      <div className="separator"></div>



      <section className="skills">
        <h3 className="section_subtitle subtitle_center">My Skills</h3>
        <div className="skills_container grid">
          <Skills />
        </div>
      </section>

    </main>
  )
}

export default About