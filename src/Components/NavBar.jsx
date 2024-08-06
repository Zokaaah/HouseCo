// Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../assets/Navbar.css/';
import logo from '../assets/images/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="Logo" />
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#services">Imóveis</a>
        <a href="#services">Serviços</a>
        <a href="#services">Contato</a>

      </div>
      <div className="navbar-login">
        <a href="#login" className="login-button">Login</a>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
