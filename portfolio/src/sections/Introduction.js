// import { Container, Row, Col } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import profile from "./profile.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from "@mui/icons-material/Instagram";
import '../styles/Introduction.css';

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
            <h2 >About Me</h2>
            <p>Hi there! I'm a Computer Science MSc student specialized in Big Data Engineering in Vrije Universiteit Amsterdam. I'm passionate about data science, machine learning, and software engineering.</p>
            <p> I created this website to showcase my projects and experiences.</p>
            <h2 >Socials</h2>
            <div className="social">
                <a style={{ color: "rgb(253, 240, 213)" }} href="https://github.com/damla-jpg" target="_blank" rel="noreferrer"><GitHubIcon sx={{ fontSize: 40 }} /></a>
                <a style={{ color: "rgb(102, 155, 188)", marginLeft: "1vw" }} href="https://www.linkedin.com/in/damla-ural-502446213/" target="_blank" rel="noreferrer"><LinkedInIcon sx={{ fontSize: 50 }} /></a>
                <a style={{ color: "rgb(193, 18, 31)", marginLeft: "1vw" }} href="https://www.instagram.com/is.drippy/" target="_blank" rel="noreferrer"><InstagramIcon sx={{ fontSize: 50 }} /></a>
            </div>
        </div>
    );
}

function Introduction() {
    return (
        <div className='introduction' id="introduction">
            <div className="intro-about">
                <Intro />
                <AboutMe />
            </div>
            <div className="profile">
                <Avatar
                    alt="Profile Picture"
                    src={profile}
                    sx={{ width: 500, height: 500 }}
                />
            </div>
        </div>
        // <Container>
        //     <Row  className='introduction' id="introduction">
        //         <Col>
        //             <Intro/>
        //             <AboutMe />
        //         </Col>
        //         <Col className="profile">
        //             <Avatar
        //                 alt="Profile Picture"
        //                 src={profile}
        //                 sx={{ width: 500, height: 500 }}
        //             />
        //         </Col>
        //     </Row>
        // </Container>

    );
}

export default Introduction;