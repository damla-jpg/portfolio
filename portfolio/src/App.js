import { Container, Row } from 'react-bootstrap';
import Introduction from './sections/Introduction';
import Project from './sections/Project';
import Navbar from './Navbar';
import './App.css';
import Experience from './sections/Experience';
import Education from './sections/Education';



function App() {
  return (
    <div className='whole'>
      <Navbar />
      <div>
        <Introduction />
        <Experience />
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
