// VerticalNavbar.js
import React from 'react';
import './Navbar.css';
import linkedImage from '../../imgs/linked.jpeg';

const Navbar = () => {
  return (
    <nav className="vertical-navbar">
      <ul>
        <li><img src={linkedImage}></img></li>
        <li><a href="/education">Education</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/hobbies">Hobbies</a></li>
        <li><a href="/resume">Downloadable Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;