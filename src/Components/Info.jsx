import React from 'react'
import parse from 'html-react-parser'
import { personalInfo } from '../data'
function Info() {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className="info_item" key={index}>
            <span className="info_title">{parse(title)}</span>
            <span className="info_description">{parse(description)}</span>
          </li>
        )
      })}
    </>
  )
}

export default Info