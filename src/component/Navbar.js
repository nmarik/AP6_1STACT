import React from 'react';
import './Nav.css';

export const Navbar = () => (
  <nav className="navbar">
    <h1>Aurestila's Navbar</h1>
    <ul className="navlinks">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
