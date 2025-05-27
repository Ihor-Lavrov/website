import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software developer with expertise in modern web
              technologies. I love solving complex problems and creating
              elegant solutions that make a difference.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source, or sharing knowledge with the
              developer community.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
