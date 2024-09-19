// Navbar.js
import React from "react";
import { FaHome } from "react-icons/fa"; // Import home icon from FontAwesome
import "./Navbar.css"; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side: Logo with Home Icon */}
      <div className="logo">
        <a href="/">
          <FaHome className="home-icon" /> {/* Green filled home icon */}
        </a>
      </div>

      {/* Right Side: Navigation Links */}
      <ul className="nav-links">
        <li>
          <a href="#home" className="nav-btn">
            Home
          </a>
        </li>
        <li>
          <a href="#blog" className="nav-btn">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
