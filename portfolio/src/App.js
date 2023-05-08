// import { Container, Row } from 'react-bootstrap';
import Navbar from './Navbar';
import './App.css';
import Introduction from './sections/Introduction';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Project from './sections/Project';

function App() {
  return (
    <div className='whole'>
      <Navbar />
      <div>
        <Introduction />
        <Experience />
        <Education />
        <Project />
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
