import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);

  // Smooth scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
      setActiveSection("/contact");
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h2>Ihor Lavrov</h2>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link
                  to="/"
                  className={activeSection === "/" ? "active" : ""}
                  onClick={() => setActiveSection("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={activeSection === "/about" ? "active" : ""}
                  onClick={() => setActiveSection("/about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className={activeSection === "/skills" ? "active" : ""}
                  onClick={() => setActiveSection("/skills")}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={activeSection === "/projects" ? "active" : ""}
                  onClick={() => setActiveSection("/projects")}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={activeSection === "/contact" ? "active" : ""}
                  onClick={() => setActiveSection("/contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Ihor Lavrov</h3>
              <p>Building digital experiences that matter</p>
            </div>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link">
                GitHub
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Ihor Lavrov. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
