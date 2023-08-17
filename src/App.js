import './App.css';
import Navbar from './components/Navbar/Navbar';
import Textbox from './components/Textbox/Textbox';
import Section from './components/Section/Section';
import Content from './components/Content/Content';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='content-container'>
        <Section
          sectionTitle='About Me'
        />
        <Textbox
          id='education'
          title=''
          content= {
            <>
              <Content content="I am an undergraduate student at the University of California, Riverside studying Computer Science and Business. I have been fascinated by the world of technology ever since I was a kid. Growing up, I would always disassemble old toys and try to engineer crazy things out of them." />
              <Content content="I hold a strong interest in the field of Software Engineering and am open to new opportunities and challenges." />
            </>
          }
        />
        <Section
          sectionTitle='Education'
        />
        <Textbox
          title=''
          content= {
            <>
              <Content content="University of California, Riverside" />
              <Content content="B.S in Computer Science w/ Business Applications" />
              <Content content="GPA: 3.7; Relevant Coursework: Software Construction, Intermediate Data Structures/Algorithms, Database Management
Systems, Introduction to Artificial Intelligence, Introduction to Software Engineering, Marketing and Distribution
Management"/>
            </>
          }
        />
        <Section
          sectionTitle='Experience'
        />
        <Section
          id='projects'
          sectionTitle='Projects'
        />
        <Section
          sectionTitle='Hobbies'
        />
      </div>
    </div>
  );
}

export default App;
