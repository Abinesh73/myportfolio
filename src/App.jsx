import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/intro'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
function App() {

  return (
  <div>
    <Navbar/>
   <section id="intro"><Intro/></section>
    <section id="about"><About/></section>
    <section id="skills"><Skills/></section>
    <section id="contact"><Contact/></section>
    <Footer/>
  </div>
      
  )
}

export default App
