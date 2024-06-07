// import { Container, Row } from 'react-bootstrap';
import Navbar from './Navbar';
import './App.css';
import React from 'react';
import Introduction from './sections/Introduction';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Project from './sections/Project';

function App() {
  const sectionsRef = React.useRef([]);
  return (
    <div className='whole'>
      <Navbar sectionsRef={sectionsRef}/>
      <div>
        <Introduction sectionRef={el => sectionsRef.current[0] = el}/>
        <Experience sectionRef={el => sectionsRef.current[1] = el}/>
        <Education sectionRef={el => sectionsRef.current[2] = el}/>
        <Project sectionRef={el => sectionsRef.current[3] = el}/>
      </div>
      {/* <Container>
        <Row className='intro-app'>
          <Introduction />
        </Row>
        <Row className='experience-app'>
          <Experience />
        </Row>
        <Row className='education-app'>
          <Education />
        </Row>
        <Row className='projects-app'>
          <Project />
        </Row>
      </Container> */}
    </div>

  );
}

export default App;
