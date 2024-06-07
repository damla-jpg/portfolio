import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Fade } from 'react-reveal';
import '../styles/ExpEd.css'
import Box from '@mui/material/Box';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


function Experience() {

    return (
        <div className="experience" id='experience' >
            <h1 style={{ padding: "1em" }}>Experience</h1>

            <Timeline sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}>
                <Fade bottom>
                    <TimelineItem style={{ width: "70vw" }}>
                        <TimelineSeparator>
                            <TimelineDot style={{ backgroundColor: "rgb(0,48,73)" }} />
                            <TimelineConnector style={{ backgroundColor: "rgb(0,119,182)" }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="content">
                                <h4 style={{ color: "rgb(0,48,73)" }}>Teaching Assistant: Data Mining Techniques</h4>
                                <p className="small-text">Vrije Universiteit Amsterdam | APRIL 2024 - MAY 2024 </p>
                                <p>Responsible for giving exercise classes and grading assignments.</p>
                            </div>
                        </TimelineContent>
                    </TimelineItem >
                </Fade>
                <Fade bottom>
                    <TimelineItem style={{ width: "70vw" }}>
                        <TimelineSeparator>
                            <TimelineDot style={{ backgroundColor: "rgb(0,48,73)" }} />
                            <TimelineConnector style={{ backgroundColor: "rgb(0,119,182)" }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="content">
                                <h4 style={{ color: "rgb(0,48,73)" }}>Teaching Assistant: Automata and Complexity</h4>
                                <p className="small-text">Vrije Universiteit Amsterdam | FEBRUARY 2023 - MARCH 2023 {bull} FEBRUARY 2025 - MARCH 2024</p>
                                <p>Responsible for giving weekly exercise classes, grading assignments, and the final exam.</p>
                            </div>
                        </TimelineContent>
                    </TimelineItem >
                </Fade>

                <Fade bottom>
                    <TimelineItem style={{ width: "70vw" }}>
                        <TimelineSeparator>
                            <TimelineDot style={{ backgroundColor: "rgb(0,48,73)" }} />
                            <TimelineConnector style={{ backgroundColor: "rgb(0,119,182)" }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="content">
                                <h4 style={{ color: "rgb(0,48,73)" }}>Teaching Assistant: Web Technology</h4>
                                <p className="small-text">Vrije Universiteit Amsterdam | JANUARY 2023 {bull} JANUARY 2022</p>
                                <p>Responsible for answering questions with coding in HTML, JavaScript, and CSS and garding assignments.</p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Fade>

                <Fade bottom>
                    <TimelineItem style={{ width: "70vw" }}>
                        <TimelineSeparator>
                            <TimelineDot style={{ backgroundColor: "rgb(0,48,73)" }} />
                            <TimelineConnector style={{ backgroundColor: "rgb(0,119,182)" }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="content">
                                <h4 style={{ color: "rgb(0,48,73)" }}>Teaching Assistant: Information Retrieval</h4>
                                <p className="small-text">Vrije Universiteit Amsterdam | NOVEMBER 2022 - DECEMBER 2022</p>
                                <p>Responsible for helping with coding assignments (Python), and grading assignments.</p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Fade>

                <Fade bottom>
                    <TimelineItem style={{ width: "70vw" }}>
                        <TimelineSeparator>
                            <TimelineDot style={{ backgroundColor: "rgb(0,48,73)" }} />
                            <TimelineConnector style={{ backgroundColor: "rgb(0,119,182)" }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="content">
                                <h4 style={{ color: "rgb(0,48,73)" }}>Teaching Assistant: Logic and Sets</h4>
                                <p className="small-text">Vrije Universiteit Amsterdam | NOVEMBER 2022 - DECEMBER 2022 {bull}
                                    FEBRUARY 2022 - MARCH 2022 {bull} FEBRUARY 2021 - MARCH 2021</p>
                                <p>Responsible for grading exams and solving weekly logic exercises with a class of 150 students, answering their questions and preparing them for a final exam.</p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Fade>

                <Fade bottom>
                    <TimelineItem style={{ width: "70vw" }}>
                        <TimelineSeparator>
                            <TimelineDot style={{ backgroundColor: "rgb(0,48,73)" }} />
                            <TimelineConnector style={{ backgroundColor: "rgb(0,119,182)" }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="content">
                                <h4 style={{ color: "rgb(0,48,73)" }}>Teaching Assistant: Computational Thinking</h4>
                                <p className="small-text">Vrije Universiteit Amsterdam | SEPTEMBER 2021 - NOVEMBER 2021</p>
                                <p>Solved and explained basic data structures and algorithms exercises with students and graded assignments.</p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Fade>

                <Fade bottom>
                    <TimelineItem style={{ width: "70vw" }}>
                        <TimelineSeparator>
                            <TimelineDot style={{ backgroundColor: "rgb(0,48,73)" }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="content">
                                <h4 style={{ color: "rgb(0,48,73)" }}>Teaching Assistant: Computer Programming</h4>
                                <p className="small-text">Vrije Universiteit Amsterdam | SEPTEMBER 2021 - NOVEMBER 2021</p>
                                <p>Responsible for helping a group of students with coding in C++ and graded assignments.</p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Fade>

            </Timeline>


        </div>
    );
}

export default Experience;
