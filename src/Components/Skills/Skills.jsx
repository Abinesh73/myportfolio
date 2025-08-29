import React from 'react'
import './Skills.css'
import { Element } from 'react-scroll'
const Skills = () => {
  return (
   <Element name="Skillsection">
      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">My Skills</h2>
          <div className="serv-content">
            {/* Skill Card 1 */}
            <div className="card">
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="text">Web Design</div>
                <p>HTML, CSS, JavaScript, React.js</p>
              </div>
            </div>

            {/* Skill Card 2 */}
            <div className="card">
              <div className="box">
                <i className="fas fa-chart-line"></i>
                <div className="text">Software Development</div>
                <p>Python</p>
              </div>
            </div>

            {/* Skill Card 3 */}
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">App Development</div>
                <p>Android Studio</p>
              </div>
            </div>

            {/* Skill Card 4 */}
            <div className="card">
              <div className="box">
                <i className="fas fa-database"></i>
                <div className="text">Database</div>
                <p>MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default Skills