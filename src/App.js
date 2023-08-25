import './App.css';
import Navbar from './components/Navbar/Navbar';
import ContentContainer from './components/ContentContainer/ContentContainer';
import Content from './components/Content/Content';
import { useState } from 'react';
import TypingEffect from './components/TypingEffect/TypingEffect';
import ucr from "./imgs/ucr.png"
import amzn from "./imgs/amzn.jpeg"
import ProjectCard from './components/ProjectCard/ProjectCard';

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
      <div className='main-content'>
        <div className='section'>
          <div className='sectionHeader'><h1>About Me</h1></div>
          <div className='contentBox about-me-description'>
            <p>
            Hi! My name is Ali Shaikh and I am currently a first year student at the University of California, Riverside, majoring in Computer Science (B.S.). Some interests of mine include playing video games, pickup basketball, music, and learning new things on my own. I hold a strong interest in the field of Software Engineering and am open to new opportunities and challenges.
            </p>
          </div>
        </div>
        <div className='section'>
          <div className='sectionHeader'><h1>Education</h1></div>
          <div className='contentBox'>
            <Content 
              title={"University of California, Riverside"}
              content={[
                "Cumulative GPA: 3.7; Chancellor's Honor List",
                "Software Construction, Intermediate Data Struture/Algorithms, Database Management Systems, Introduction to Artificial Intelligence, Introduction to Software Engineering, Marketing and Distribution Management",
              ]}
              image={ucr}
              date={"September 2020 - June 2024"}
            />
          </div>
        </div>
        <div className='section' >
          <div className='sectionHeader'><h1>Experience</h1></div>
            <div className='contentBox' style={{ gap: '20px' }}>
            <Content 
              title={"Software Development Engineer Intern - Amazon"}
              content={[
                "Designed and implemented the launch of a new product within Amazon Corporate B2B services",
                "Leveraged AWS services in backend development such as AWS Lambda, API Gateway, S3, DynamoDB, and SQS",
                "Developed frontend experience using Spring MVC Java framework",
                "Conducted weekly development demonstrations/standups among associates and various external teams"
              ]}
              image={amzn}
              date={"June 2023 - August 2023"}
              className="content-with-padding"
            />
            <h1></h1>
            <Content 
              title={"Supplemental Instruction Leader - UCR"}
              content={[
                "Instructor for CS 10A/B (C++ Programming I and II) and CS 10C (Data Structures and Algorithms)",
                "Tutored 40+ students in Introductory Programming in C++ and 30+ students in Data Structures/Algorithms",
                "Organized lesson plans for 3+ classes, focusing on material covered in class to solidify students’ understanding",
                "Achieved an average increase of student overall grade by 10% whilst holding 4+ sessions per week"
              ]}
              image={ucr}
              date={"June 2023 - August 2023"}
              className="content-with-padding"
            />
            </div>
        </div>
        <div className='section'>
          <div className='sectionHeader'><h1>Projects</h1></div>
          <div className='contentBox' style={{ gap: '20px' }}>
              <ProjectCard 
              title="Bloggit"
              description = "Developed a full-stack application, allowing users to create profiles and post customized blogs to their community. Implemented a structured back-end with proper error handling, enabling requests to and from MongoDB database."
              />
              <ProjectCard 
              title="Spotify Analytics Application"
              description = "Created a web application that allows Spotify users to learn more about their listening habits. Integrated requests from the Spotify API to display user analytics such as favorite songs and artists. Designed an automated system which creates personalized playlists based on user’s interests"
              />
              <ProjectCard 
              title="MovieMe"
              description = "Contributed to back-end development whilst working with large movie databases with over 1000 movies. Devised an algorithm which generates movie recommendations based on user’s input of favorite movies, genres, and
              actors. Group project @ UCR"
              />
          </div>
        </div>
        <div className='section' >
          <div className='sectionHeader'><h1>Hobbies</h1></div>
          <div className='contentBox'>
            <h3>Basketball • Finance • Climbing • Fitness • Technology • Video Games • Music</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
