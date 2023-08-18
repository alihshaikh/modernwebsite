import './App.css';
import Navbar from './components/Navbar/Navbar';
import ContentContainer from './components/ContentContainer/ContentContainer';
import Content from './components/Content/Content';
import { useState } from 'react';


function App() {

  const [isDark, setDark] = useState(true);

  const setDarkMode = () => {
    setDark(!isDark);
    const body = document.querySelector('body');
    if (body) {
      body.style.backgroundColor = isDark ? '#9b9bc7' : '#393956';
      body.style.color = isDark ? 'white' : 'black';
      }
  };


  return (
    <div className='App'>      
      <Navbar
        togglebutton={ <button className='toggle-button' onClick={setDarkMode}>  {isDark ? 'Light' : 'Dark'} Mode</button>}
        isDarkMode={isDark}
      />
      <div className='content-container'>
        <ContentContainer
          title='About Me'
          content= {
            <>
              <Content content="I am an undergraduate student at the University of California, Riverside studying Computer Science and Business. I have been fascinated by the world of technology ever since I was a kid. Growing up, I would always disassemble old toys and try to engineer crazy things out of them." />
              <Content content="I hold a strong interest in the field of Software Engineering and am open to new opportunities and challenges." />
            </>
          }
          isDarkMode={isDark}
        />
        <ContentContainer
          title='Education'
          content= {
            <>
              <Content title="University of California Riverside" />
              <Content content="B.S in Computer Science w/ Business Applications" />
              <Content content="GPA: 3.7; Relevant Coursework: Software Construction, Intermediate Data Structures/Algorithms, Database Management
Systems, Introduction to Artificial Intelligence, Introduction to Software Engineering, Marketing and Distribution
Management"/>
            </>
          }
          isDarkMode={isDark}
        />
        <ContentContainer
          title='Projects'
          content= {
            <>
            <Content title="Bloggit" content="A full-stack social media blogging application inspired by Instagram and Reddit. Supports features such as creating an account, posting blogs, and discovering blogs posted by others users."/>
            <Content title="Spotify Analytics Application" content="Web application built to analyze Spotify users' music taste. Determines favorite songs, artists, and can even create a new playlist filled with your favorite songs with a click of a buttion. Utilized Spotify API."/>
            <Content title="MovieMe" content="C++ terminal based application to display movie reccomendations based on user's interests (actor, genre, etc). Scrapes movie data from popular movie databases such as IMDB."/>

            </>

          }
          isDarkMode={isDark}
        />
        <ContentContainer
          title='Hobbies'
          content= {
            <>
            <Content title="Basketball"/>
            <Content title="Finance/Business Strategy"/>
            <Content title="Fashion"/>
            <Content title="Lifting"/>
            <Content title="Technology"/>
            </>
          }
          isDarkMode={isDark}
        />
    
      </div>
    </div>
  );
}

export default App;
