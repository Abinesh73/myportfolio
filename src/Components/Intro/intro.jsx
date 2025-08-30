import React from 'react'
import { useEffect } from 'react'
import './intro.css'
import bg from '../../assets/myimage2.png'
import {Link} from 'react-scroll'
import btnimage1 from '../../assets/hireme.png'
import Typed from "typed.js";
const Intro = () => {
    useEffect(() => {
    const options = {
      strings: ["Programmer", "Web Developer", "App Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed(".typing", options);

    return () => {
      typed.destroy(); // cleanup
    };
  }, []);

  return (
    <section id="intro">
        <div className="introcontent">
             <span className="hello">Hello,aa</span>
             <span className="introtxt">I,m <span className="introname">Abinesh </span><br/></span>
             <div class="text-3"><span class="typing"></span><span class="typed-cursor">|</span></div>
             <Link to="aboutsection" smooth={true} duration={500}><button className="btn">About Me</button></Link>
        </div>
      
    </section>
  )
}

export default Intro