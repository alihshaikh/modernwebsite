import React from 'react';
import './Navbar.css';
import linkedImage from '../../imgs/linked.jpeg';
import TypingEffect from '../TypingEffect/TypingEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';





const Navbar = ({togglebutton, isDarkMode}) => {
  
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);
    
    if(section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='vertical-navbar' >
      <nav>
      <ul>
        <li><h1><TypingEffect text="Hi. I'm Ali!"/></h1></li>
        <li><img src={linkedImage}></img></li>
        <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')}>Education</a></li>
        <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a></li>
        <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
        <li><a href="#hobbies" onClick={(e) => scrollToSection(e, 'hobbies')}>Hobbies</a></li>
        <li><a href="blogs" onClick={(e) => scrollToSection(e, 'blogs')}>Blogs</a></li>
        <li><a href="https://drive.google.com/file/d/1bmdHu0C-dzINuK8p9uf_FSt-Rq9r59Pf/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
        {/* <li>{togglebutton}</li> */}
        {/* <li><button className='toggle-button'>Login</button></li> */}
      </ul>
      </nav>
    </div>    
  );
};

export default Navbar;
