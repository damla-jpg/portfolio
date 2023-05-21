import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/Projects.css';

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
        <div>
            {/* if isPublishible is set to true display something else display something else */}
            {isPublishible ? <CardActions>
                <Button size="small" sx={{ ":hover": { textDecoration: "underline", color: "rgb(102, 155, 188)" } }}><a target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "rgb(102, 155, 188)" }} href={link}>Learn More</a></Button>
            </CardActions> : <CardActions><Button size="small" disabled><p>Not available</p></Button></CardActions> }
        </div>

    </React.Fragment>
);

export default function Project() {
    const boxStyle = {
        height: "22em",
        backgroundColor: "rgb(120, 0, 0)",
        color: "rgb(253, 240, 213)"
    }

    return (
        <div class="projects" id="projects">
            <h1 style={{ padding: "1em", color: "rgb(253, 240, 213)" }}>Projects</h1>
            <div className='project-box'>
                <Box sx={{ width: "25em", margin: "1em" }}>
                    <Card sx={boxStyle} variant="outlined">{CardCustom(project1.title, project1.text, project1.link, true)}</Card>
                </Box>
                <Box sx={{ width: "25em", margin: "1em" }}>
                    <Card sx={boxStyle} variant="outlined">{CardCustom(project2.title, project2.text, project2.link, false)}</Card>
                </Box>
                <Box sx={{ width: "25em", margin: "1em" }}>
                    <Card sx={boxStyle} variant="outlined">{CardCustom(project1.title, project1.text)}</Card>
                </Box>
            </div>

        </div>
    );
}