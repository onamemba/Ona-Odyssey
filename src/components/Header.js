// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link
          to="title-section"
          smooth={true}
          duration={500}
          className="nav-link"
        >
          Home
        </Link>
        <Link
          to="about-section"
          smooth={true}
          duration={500}
          className="nav-link"
        >
          About
        </Link>
        <Link
          to="work-section"
          smooth={true}
          duration={500}
          className="nav-link"
        >
          Work
        </Link>
        <Link
          to="education-section"
          smooth={true}
          duration={500}
          className="nav-link"
        >
          Education
        </Link>
        <Link
          to="contact-section"
          smooth={true}
          duration={500}
          className="nav-link"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
