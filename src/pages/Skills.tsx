import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-items">
              <span className="skill-item">React</span>
              <span className="skill-item">TypeScript</span>
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">HTML/CSS</span>
              <span className="skill-item">Vue.js</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-items">
              <span className="skill-item">Node.js</span>
              <span className="skill-item">Python</span>
              <span className="skill-item">Express</span>
              <span className="skill-item">PostgreSQL</span>
              <span className="skill-item">MongoDB</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Others</h3>
            <div className="skill-items">
              <span className="skill-item">Git</span>
              <span className="skill-item">Docker</span>
              <span className="skill-item">AWS</span>
              <span className="skill-item">Figma</span>
              <span className="skill-item">Jest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
