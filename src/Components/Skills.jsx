import React from 'react'
import { skills } from '../data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Skills() {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress_bar" key={index}>
            <div className="progress_circle">
              <CircularProgressbar strokeWidth={7.5} text={`${percentage}%`} value={percentage} />
            </div>
            <h3 className="skills_title">{title}</h3>
          </div>

        )
      })}
    </>
  )
}

export default Skills