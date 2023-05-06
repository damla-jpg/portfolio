import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const project1 = {title: "hello", text: "you"}

const CardCustom = (title, text) => (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 25, fontWeight: "bold" }} color="text.primary" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body1">
                {text}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

export default function Project() {
    return (
        <div class="projects" id="projects">
            <h1 style={{ textAlign: 'center' }}>Projects</h1>
            <div className='project-box'>
                <Box sx={{ width: "20em", margin: "1em" }}>
                    <Card sx={{ height: "20em"}} variant="outlined">{CardCustom(project1.title, project1.text)}</Card>
                </Box>
                <Box sx={{ width: "20em", margin: "1em"}}>
                    <Card sx={{ height: "20em"}}variant="outlined">{CardCustom(project1.title, project1.text)}</Card>
                </Box>
                <Box sx={{ width: "20em", margin: "1em" }}>
                    <Card sx={{ height: "20em"}} variant="outlined">{CardCustom(project1.title, project1.text)}</Card>
                </Box>
            </div>

        </div>
    );
}