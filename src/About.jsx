import React from "react"
import { UndrawWoman } from 'react-undraw-illustrations';

const About = () => {
  return (
    <div className="ui main container">
      <div className="ui stackable two column grid">
        <div className="column">
        <img class="ui medium circular image" src="../src/img/profile.jpeg"></img>
        </div>
        <div className="column">
          <h1>About Me</h1>
          <p>Hello! My name is Becca. I am a student at the coding bootcamp, CraftAcademy, in Stockholm. 
            In November I will pursue a position as a full stack web developer.</p>
            <br></br>
            <p>This profile will show you some of my latest projects with CraftAcademy and some of my other 
            projects in SEO & Paid Advertising.
            </p>
            <br></br>
            <p></p>
        </div>
      </div>
    </div>
  )
}

export default About
