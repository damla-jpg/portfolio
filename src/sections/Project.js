import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/Projects.css';

const publication1 = {
    title: "Towards a Workload Trace Archive for Metaverse Systems",
    text: "We work towards a workload trace archive for Metaverse systems. We design, implement, and validate librnr, a system to record and replay human input on VR devices, automating large parts of the process of collecting VR traces. \n This work was published in ICPE '24 Companion.",
    link: "https://dl.acm.org/doi/10.1145/3629527.3651421"
}

const publication2 = {
    title: "A Controlled Experiment on the Energy Efficiency of the Source Code Generated by Code Llama",
    text: "We present an empirical study that assesses the energy efficiency of Code Llama with respect to human-written source code. This work was published in QUATIC '24.",
    link: "https://arxiv.org/abs/2405.03616"
}

const project1 = {
    title: "3D Kadaster",
    text: "During the first period of my Masters I took a course called Large Scale Data Engineering. As a group of three we built a 3D model of some Dutch citites given the Actuele Hoogtekaart Nederland (AHN) point-cloud dataset, consisting of 3D points measured using LIDAR technology and 2D building plan polygons.",
    link: "https://homepages.cwi.nl/~boncz/lsde2022/group19/"
}

const project2 = {
    title: "Mini Semantic Web",
    text: "During the second period of my Masters I took a course called Web Data Processing Systems. As a group of four we built a program that could detect entities and their relationships given an HTML page using Python. For this, we used the WikiData API and complex Machine Learning algorithms. Finally, we containerized our program using Docker.",
    link: "None"
}

const project3 = {
    title: "Improving Expedia Hotel Recommendations",
    text: "During a Masters couse I took called Data Mining Techniques, I built a data mining pipeline to improve hotel recommendations on the Expedia dataset. The original Kaggle competition can be found here: https://www.kaggle.com/competitions/expedia-personalized-sort. I used Python and the Scikit-learn library to build the pipeline.",
    link: "https://github.com/damla-jpg/data-mining-2/tree/damla-branch"
}

const project4 = {
    title: "Multi-user URL Shortener",
    text: "During a Masters couse I took called Web Services and Cloud Based Systems, as a group of 3 we implemented a Dockerized URL shortener program connected to an MySQL database with JWT authentication. We used Python and the Flask library to build the program.",
    link: ""
}

const CardCustom = (title, text, link, isPublishible) => (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 25, fontWeight: "bold" }} gutterBottom>
                {title}
            </Typography>
            <Typography variant="body1">
                {text}
            </Typography>
        </CardContent>
        <div className='link'>
            {/* if isPublishible is set to true display something else display something else */}
            {isPublishible ? <CardActions>
                <Button size="small" sx={{ ":hover": { textDecoration: "underline", color: "rgb(102, 155, 188)" } }}><a target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "rgb(102, 155, 188)" }} href={link}>Learn More</a></Button>
            </CardActions> : <CardActions><Button size="small" disabled><p>Not available</p></Button></CardActions> }
        </div>

    </React.Fragment>
);

export default function Project({ sectionRef }) {
    const boxStyle = {
        height: "23em",
        backgroundColor: "rgb(120, 0, 0)",
        color: "rgb(253, 240, 213)",
        // '.link': {
        //     display: "flex",
        //     justifyContent: "left"
        // }
    }

    const publicationStyle = {
        height: "23em",
        backgroundColor: "rgb(0, 48, 73)",
        color: "rgb(253, 240, 213)"
    }

    return (
        <div class="projects" id="projects" ref={sectionRef}>
            <h1 style={{ padding: "1em", color: "rgb(253, 240, 213)" }}>Publications and Projects</h1>
            <div className='project-box'>
                <Box sx={{ width: "25em", margin: "1em" }}>
                    <Card sx={publicationStyle} variant="outlined">{CardCustom(publication1.title, publication1.text, publication1.link, true)}</Card>
                </Box>
                <Box sx={{ width: "25em", margin: "1em" }}>
                    <Card sx={publicationStyle} variant="outlined">{CardCustom(publication2.title, publication2.text, publication2.link, true)}</Card>
                </Box>
                <Box sx={{ width: "25em", margin: "1em" }}>
                    <Card sx={boxStyle} variant="outlined">{CardCustom(project4.title, project4.text, project4.link, false)}</Card>
                </Box>
            </div>
            <div className='project-box'>
                <Box sx={{ width: "25em", margin: "1em" }}>
                    <Card sx={boxStyle} variant="outlined">{CardCustom(project1.title, project1.text, project1.link, true)}</Card>
                </Box>
                <Box sx={{ width: "25em", margin: "1em" }}>
                    <Card sx={boxStyle} variant="outlined">{CardCustom(project2.title, project2.text, project2.link, false)}</Card>
                </Box>
                <Box sx={{ width: "25em", margin: "1em" }}>
                    <Card sx={boxStyle} variant="outlined">{CardCustom(project3.title, project3.text, project3.link, true)}</Card>
                </Box>
            </div>

        </div>
    );
}