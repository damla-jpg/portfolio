import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import About from './sections/About';
import Main from './Main';
import Project from './sections/Project';

function App() {
  return (
    <Container>
      <Row>
        <Main />
      </Row>
      <Row>
        <Col>
          <About />
        </Col>
        <Col>
          <Project />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
