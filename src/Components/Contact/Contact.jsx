import React from 'react'
import './Contact.css'
import { Element } from 'react-scroll'
import facebook from '../../assets/facebook-icon.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import emailjs from "emailjs-com";
import Resume from '../../AbineshResume.pdf';
const Contact = () => {
  function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_s4h6j7t",   // from EmailJS
    "template_i7cvkt6",  // from EmailJS
    e.target,
    "WydovxoJDM0j1a_YM"    // from EmailJS
  ).then(
    (result) => {
      console.log(result.text);
      alert("✅ Message sent successfully!");
    },
    (error) => {
      console.log(error.text);
      alert("❌ Failed to send message. Please try again.");
    }
  );

  e.target.reset();
}
  return (
    <Element id="contactsection">
    <section className="contact" id="contact">
       <div className="max-width">
    <h2 className="title">Contact me</h2>
    <div className="contact-content">
      <div className="column left">
        <div className="text">Contact</div>
        <div className="icons">
          <div className="row">
            <i className="fas fa-user"></i>
            <div className="info">
              <div className="head">Name</div>
              <div className="sub-title">Abinesh</div>
            </div>
          </div>
          <div className="row">
            <i className="fas fa-map-marker-alt"></i>
            <div className="info">
              <div className="head">Address</div>
              <div className="sub-title">TamilNadu, India</div>
            </div>
          </div>
          <div className="row">
            <i className="fas fa-envelope"></i>
            <div className="info">
              <div className="head">Email</div>
              <div className="sub-title">abinesh7318@gmail.com</div>
            </div>
          </div>
        </div>
        
      </div>
      <div>
          <a 
          href={Resume} 
          download="AbineshResume.pdf" 
          className="button-area"
        >
          Download CV
        </a>
         <h3 className="reachout-title">Let’s Connect</h3>
    <p className="reachout-text">
  Thanks for visiting my portfolio! 🚀 I’m excited to kickstart my career and open to job opportunities.  
  If you think I’d be a good fit for your team, feel free to reach out!
</p>
  <form className='contactform' onSubmit={sendEmail}>
    <input type='Text'  name="name"className='name' placeholder='Enter your name' required></input>
     <input type="email" name="email" className="email" placeholder="Enter your email" required></input>
     <textarea name="message" className='msg' rows="6" placeholder="Your Message" required> </textarea>
     <button type='Submit' className='sumbitbtn'>Send</button>
  </form>
   <div className='links'>
    <a 
  href="https://www.facebook.com/people/Wipper/pfbid0LmTLtqydibmbU1JPZPxRqiKRRuxN6j1Liqi6qdvEeZx6iwXkxCvPD5nEoAjCHFaQl/?sk=about" 
  target="_blank" 
  rel="noopener noreferrer"><img src={facebook} alt="Facebook" className="link" /></a>
     <a 
  href="https://www.instagram.com/abi_nesh_3/?hl=en/?sk=about" 
  target="_blank" 
  rel="noopener noreferrer"><img src={instagram} alt="Instagram" className="link" /></a> 
     <a 
  href="https://www.linkedin.com/in/abinesh2002/" 
  target="_blank" 
  rel="noopener noreferrer"><img src={linkedin} alt="Instagram" className="link" /></a> 
  </div>
      </div>
    </div>
  </div>

 
</section>
</Element>
  )
}

export default Contact