import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Fade } from 'react-reveal';


function Experience() {
    return (
        <div className="experience" id='experience'>
            <h1 style={{textAlign: 'center', padding: "1em"}}>Experience</h1>
            <Timeline position="alternate">
            <Fade bottom>
                <TimelineItem style={{width: "40vw"}}>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: "rgb(0,48,73)"}} />
                    <TimelineConnector style={{backgroundColor: "rgb(0,119,182)"}}/>
                </TimelineSeparator>
                <TimelineContent>
                    <div class="content">
                        <h4 style={{color: "rgb(0,48,73)"}}>Teaching Assistant: Automata and Complexity</h4>
                        <p class="small-text">Vrije Universiteit Amsterdam FEBRUARY 2023 - MARCH 2023</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit eget leo mollis
                            porttitor. Fusce vestibulum nunc vel quam feugiat, ac pellentesque ex dignissim.</p>
                    </div>
                </TimelineContent>
            </TimelineItem >
            </Fade>
            
            <Fade bottom>
                <TimelineItem style={{width: "40vw"}}>
                    <TimelineSeparator>
                        <TimelineDot style={{backgroundColor: "rgb(0,48,73)"}} />
                        <TimelineConnector style={{backgroundColor: "rgb(0,119,182)"}} />
                    </TimelineSeparator>
                    <TimelineContent>
                    <div class="content">
                            <h4>Job Title 2</h4>
                            <p class="small-text">Company Name 2 | Date Range 2</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit eget leo mollis
                                porttitor. Fusce vestibulum nunc vel quam feugiat, ac pellentesque ex dignissim.</p>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            </Fade>
            

            <TimelineItem style={{width: "40vw"}}>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: "rgb(0,48,73)"}}/>
                </TimelineSeparator>
                <TimelineContent>
                <div class="content">
                        <h4>Job Title 2</h4>
                        <p class="small-text">Company Name 2 | Date Range 2</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit eget leo mollis
                            porttitor. Fusce vestibulum nunc vel quam feugiat, ac pellentesque ex dignissim.</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        </div>
    );
}

export default Experience;
