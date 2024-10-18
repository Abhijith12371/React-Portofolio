import React, { useState } from 'react'; // Import useState for toggling the menu
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './nav.css'; // Import the CSS

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu
  };

  return (
    <div>
      <nav>
        <Link to="home" smooth={true} duration={500}>
          <p className="logo">Abhijith</p>
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          {/* Hamburger Icon */}
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}> {/* Toggle the menu class */}
          <li>
            <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="technologies" smooth={true} duration={500} onClick={toggleMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="achievements" smooth={true} duration={500} onClick={toggleMenu}>
              Achievements
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
