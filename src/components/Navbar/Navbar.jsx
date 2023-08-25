import React from 'react';
import './Navbar.css';
import linkedImage from '../../imgs/linked.jpeg';
import TypingEffect from '../TypingEffect/TypingEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';





const Navbar = ({togglebutton, isDarkMode}) => {

  return (
    <div className='vertical-navbar' >
      <nav>
      <ul>
        <li><h1><TypingEffect text="Hi. I'm Ali!"/></h1></li>
        <li><img src={linkedImage}></img></li>
        <li><a href="/education">Education</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/hobbies">Hobbies</a></li>
        <li><a href="/resume">Downloadable Resume</a></li>
        {/* <li>{togglebutton}</li> */}
        {/* <li><button className='toggle-button'>Login</button></li> */}
      </ul>
      </nav>
    </div>    
  );
};

export default Navbar;
