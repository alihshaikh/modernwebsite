import './App.css';
import Navbar from './components/Navbar/Navbar';
import Textbox from './components/Textbox/Textbox';
import Section from './components/Section/Section';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='content-container'>
        <Section
          sectionTitle='About Me'
        />
        <Textbox
          title='Hi! My name is Ali.'
          content={`I am an undergraduate student at the University of California, Riverside studying Computer Science and Business. I have been fascinated by the world of technology ever since I was a kid. Growing up, I would always disassemble old toys and try to engineer crazy things out of them.`}

        />
        <Section
          sectionTitle='Education'
        />
        <Section
          sectionTitle='Experience'
        />
        <Section
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
