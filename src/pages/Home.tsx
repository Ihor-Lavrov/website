import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Navigate to contact page
  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm Ihor Lavrov</h1>
          <p className="hero-subtitle">
            Full-Stack Developer & Software Engineer
          </p>
          <p className="hero-description">
            I create innovative digital solutions and build amazing web
            experiences. Passionate about clean code, user experience, and
            cutting-edge technology.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary" onClick={goToContact}>Get In Touch</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <span>👨‍💻</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
