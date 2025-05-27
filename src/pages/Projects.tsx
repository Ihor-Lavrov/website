import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">🚀</div>
            </div>
            <div className="project-content">
              <h3>E-Commerce Platform</h3>
              <p>
                A full-stack e-commerce solution built with React, Node.js,
                and MongoDB.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  Live Demo
                </a>
                <a href="#" className="project-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">📱</div>
            </div>
            <div className="project-content">
              <h3>Task Management App</h3>
              <p>
                A collaborative task management application with real-time
                updates.
              </p>
              <div className="project-tech">
                <span>Vue.js</span>
                <span>Firebase</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  Live Demo
                </a>
                <a href="#" className="project-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">🌐</div>
            </div>
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>
                A modern, responsive portfolio website built with React and
                TypeScript.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>TypeScript</span>
                <span>Vite</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  Live Demo
                </a>
                <a href="#" className="project-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
