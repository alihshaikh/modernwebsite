import './HomePage.css';
import Navbar from '../components/Navbar/Navbar';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import Content from '../components/Content/Content';
import { useState } from 'react';
import TypingEffect from '../components/TypingEffect/TypingEffect';
import ucr from "../imgs/ucr.png"
import amzn from "../imgs/amzn.jpeg"
import linked from "../imgs/linked.jpeg"
import ProjectCard from '../components/ProjectCard/ProjectCard';
import BlogPost from '../components/BlogPost/BlogPost';
import AboutMeCard from '../components/AboutMeCard/AboutMeCard';
import blogpost1 from "../imgs/ bp1.png"
import rainer from "../imgs/rainer.png"

const blogPosts = [
  {
    date: "Friday, August 25 2023",
    title: 'First Blog Post',
    content: 'Hey everyone! This is my new website! I have previously created other websites, but I felt like it needed a refresher (I built the other version in freshman year of college). This time around I wanted to make it look a little bit more modern and also include a blog portion within it. The picture below shows my previous design. I hope to use this blog portion as a way to post something that I have learned hopefully on a daily basis. Does not have to be CS related, but could be anything. Hopefully it will keep me accountable haha. Cheers.',
    image: blogpost1,
  },
  {
    id: 2,
    title: 'Second Blog Post',
    content: 'Consectetur adipiscing elit...',
    image: 'url_to_image2',
  },
  // Add more blog posts...
];

const HomePage = () => {
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
        <div className='section' id='about'>
          <div className='sectionHeader'><h1>About Me</h1></div>
          <div className='contentBox'>
            <AboutMeCard image={rainer} content={"Hi! My name is Ali Shaikh and I am going into my senior year as an undergraduate student at the University of California, Riverside, majoring in Computer Science & Business. Some interests of mine include playing video games, pickup basketball, music, and learning new things on my own. I hold a strong interest in the field of Software Engineering and am open to new opportunities and challenges."}/>
          </div>
        </div>
        <div className='section' id='education'>
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
        <div className='section' id='experience'>
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
        <div className='section' id='projects'>
          <div className='sectionHeader'><h1>Projects</h1></div>
          <div className='contentBox' style={{ gap: '20px'} }>
              <ProjectCard 
              title="Bloggit"
              description = "Developed a full-stack application, allowing users to create profiles and post customized blogs to their community. Implemented a structured back-end with proper error handling, enabling requests to and from MongoDB database."
              link='https://github.com/alihshaikh/BloggerApp'
              />
              <ProjectCard 
              title="Spotify Analytics Application"
              description = "Created a web application that allows Spotify users to learn more about their listening habits. Integrated requests from the Spotify API to display user analytics such as favorite songs and artists. Designed an automated system which creates personalized playlists based on user’s interests"
              link='https://github.com/alihshaikh/mySpot'
              />
              <ProjectCard 
              title="MovieMe"
              description = "Contributed to back-end development whilst working with large movie databases with over 1000 movies. Devised an algorithm which generates movie recommendations based on user’s input of favorite movies, genres, and
              actors. Group project @ UCR"
              link='https://github.com/cs100/final-project-whe038-ashai014-npasr001-mneru002'
              />
              <ProjectCard 
              title="RedditCrawler"
              description = "Created a python script for the purpose of information retrieval from reddit. Allow for the retrieval of information from various different subreddits while aggregating data within friendly JSON files."
              link='https://github.com/cs100/final-project-whe038-ashai014-npasr001-mneru002'
              />
              <ProjectCard 
              title="9 Puzzle Solver w/ A* Search"
              description = "Given any configuration of a 9-puzzle, this python script performs an intelligent solution to solve the puzzle in an optimal manner. The A* search algorithm algorithm uses heuristics to guide its search process"
              link='https://github.com/alihshaikh/A-Star-Search-with-9-puzzle'
              />
              <ProjectCard 
              title="Split My Check"
              description = "I created this short python script because me and a few friends went to get dinner and I had to calculate how much each person owns me one too many times. This script accounts for tax and tip so each person pays their fair share."
              link='https://github.com/alihshaikh/splitmycheck'
              />
          </div>
        </div>
        <div className='section'id='hobbies'>
          <div className='sectionHeader'><h1>Hobbies</h1></div>
          <div className='contentBox'>
            <div className='hobbies-wrapper'>
              <h3>Basketball • Finance • Climbing • Fitness • Technology • Video Games • Music</h3>
            </div>
          </div>
        </div>

        <div className='section' id='blogs'>
          <div className='sectionHeader'><h1>Blogs</h1></div>
          <div className='contentBox'>
              <BlogPost title ={blogPosts[0].title} description={blogPosts[0].content} image={blogPosts[0].image}/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
