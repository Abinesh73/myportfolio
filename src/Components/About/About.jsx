import React from 'react'
import './About.css'
import bg from '../../assets/Profile1.jpg'
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <Element name="aboutsection">
      <section className="about" id="about">
    <div className="max-width">
      <h2 className="title">About me</h2>
      <div className="about-content">
        <div className="column left">
        <img src={bg} alt="Profile" />   
        </div>
        <div className="text">I'm <span class="highlight">Abinesh</span></div>
       <span className="skillDesc">I am a passionate and dynamic Information Technology graduate with a strong foundation in various IT domains. Eager to contribute my skills and knowledge to innovative projects, I am dedicated to staying updated with the latest industry trends.</span>
      </div>
    </div>
             <Link to="Skillsection" smooth={true} duration={500}><button className="btn1">Skills</button></Link>
  </section>
  </Element>
  )
}

export default About