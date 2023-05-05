import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


function Experience() {
    return (
        <div className="experience" id='experience'>
            <h1 style={{textAlign: 'center'}}>Experience</h1>
            <Timeline position="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <div class="content">
                        <h4>Job Title 1</h4>
                        <p class="small-text">Company Name 1 | Date Range 1</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit eget leo mollis
                            porttitor. Fusce vestibulum nunc vel quam feugiat, ac pellentesque ex dignissim.</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
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
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
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