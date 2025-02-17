import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`} id="navbar-menu">
        <a href="/services">Services</a>
        <a href="/howit">How It Works</a>
        <a href="/faq">FAQs</a>
        <a href="/contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default Header;
