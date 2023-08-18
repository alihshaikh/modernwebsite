import './App.css';
import Navbar from './components/Navbar/Navbar';
import Textbox from './components/Textbox/Textbox';
import Section from './components/Section/Section';
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
        togglebutton={ <button onClick={setDarkMode}>Toggle Mode</button>}
        isDarkMode={isDark}
      />
      <div className='content-container'>
        <Textbox
          title='About Me'
          content= {
            <>
              <Content content="I am an undergraduate student at the University of California, Riverside studying Computer Science and Business. I have been fascinated by the world of technology ever since I was a kid. Growing up, I would always disassemble old toys and try to engineer crazy things out of them." />
              <Content content="I hold a strong interest in the field of Software Engineering and am open to new opportunities and challenges." />
            </>
          }
          isDarkMode={isDark}
        />
        <Textbox
          title='Education'
          content= {
            <>
              <Content content="University of California, Riverside" />
              <Content content="B.S in Computer Science w/ Business Applications" />
              <Content content="GPA: 3.7; Relevant Coursework: Software Construction, Intermediate Data Structures/Algorithms, Database Management
Systems, Introduction to Artificial Intelligence, Introduction to Software Engineering, Marketing and Distribution
Management"/>
            </>
          }
          isDarkMode={isDark}
        />
        <Textbox
          title='Projects'
          content= {
            <>
            {/* to add */}
            </>
          }
          isDarkMode={isDark}
        />
        <Textbox
          title='Hobbies'
          content= {
            <>
            {/* to add */}
            </>
          }
          isDarkMode={isDark}
        />
    
      </div>
    </div>
  );
}

export default App;
