import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import contactimg from '../../assets/contact.png'
import {Link} from 'react-scroll'
import { useState,useEffect } from 'react'

const Navbar = () => {
   const [navTheme, setNavTheme] = useState("light"); // default: Home = light

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // watch all sections
    const options = { threshold: 0.6 }; // 60% of section visible

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "intro") {
            setNavTheme("light");  // Home section → light navbar
          } else if (entry.target.id === "about") {
             setNavTheme("red");   // About section → dark navbar
          }
          else if (entry.target.id==="skills"){
             setNavTheme("light"); 
          }
          else if (entry.target.id==="contact"){
            setNavTheme("red");
          }
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
        <nav className={`Navbar ${navTheme}`}>
          <img src={logo} alt="logo" className='logo' />
          <div className='desktopmenu'>
           <Link to="intro" smooth={true} duration={500} className='desktopmenulistitem'>Home</Link>
        <Link to="about" smooth={true} duration={500} className='desktopmenulistitem'>About</Link>
            <Link to="skills"  smooth={true} duration={500} className='desktopmenulistitem'>Skills</Link>
            <Link  to="contact"  smooth={true} duration={500}className='desktopmenulistitem'>Contact</Link>
            </div>
         <Link to="contact" smooth={true} duration={500}> <button className='desktopmenubtn'><img src={contactimg} alt="" className="desktopmenuimg" />Contact Me</button></Link>
       </nav>
    
  )
}

export default Navbar