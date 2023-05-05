import { Container, Row, Col } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";


function Intro() {
    return (
        <div className="intro">
            <h1 id='name'>Hi! I'm Damla.</h1>

        </div>
    );

}

function AboutMe() {
    return (
        <div className="about">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit eget leo mollis porttitor. Fusce
                vestibulum nunc vel quam feugiat, ac pellentesque ex dignissim. Praesent auctor velit in justo dictum
                ornare. Fusce ullamcorper elit vitae nulla fringilla fringilla. Sed sit amet lacus ut purus ullamcorper
                lobortis sed in elit. Etiam quis metus justo. Nunc quis dui libero. Sed eu purus at dolor vehicula
                laoreet vel ut purus. Nulla tincidunt semper enim sit amet ultrices.</p>
        </div>
    );
}

function Introduction() {
    return (
        <Container className='introduction' id="introduction">
            <Row>
                <Col>
                    <Intro />
                    <AboutMe />
                </Col>
                <Col className="profile">
                    <Avatar
                        alt="Profile Picture"
                        src="profile.jpg"
                        sx={{ width: 500, height: 500 }}
                    />
                </Col>
            </Row>
        </Container>

    );
}

export default Introduction;