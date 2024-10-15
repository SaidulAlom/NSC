import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Navojyoti Sports Club Logo" className="logo-img" />
        Navojyoti Sports Club
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />} {/* Show icon based on state */}
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#teams" onClick={toggleMenu}>Teams</a></li>
        <li><a href="#sports" onClick={toggleMenu}>Sports</a></li>
        <li><a href="#events" onClick={toggleMenu}>Events</a></li>
        <li><a href="#registration" onClick={toggleMenu}>Registration</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
