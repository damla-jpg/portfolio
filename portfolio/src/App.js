import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Introduction from './sections/Introduction';
import Project from './sections/Project';
import Navbar from './Navbar';
import './App.css';
import Experience from './sections/Experience';
import Education from './sections/Education';




function App() {
  return (
    <div>
      <Navbar />
      <Container className='page'>
        <Row>
          <Introduction />
        </Row>
        <Row>
          <Experience />
        </Row>
        <Row>
          <Education />
        </Row>
        <Row>
          <Project />
        </Row>
      </Container>
    </div>

  );
}

export default App;
