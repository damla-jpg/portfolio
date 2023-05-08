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
import { useEffect, useRef, useState, useMemo } from 'react';
import Box from '@mui/material/Box';

function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry.isIntersecting),
            ),
        [],
    );

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


function Experience() {
    // IS THERE ANOTHER WAY TO DO THIS?? PROBABLY. BUT THIS WORKS FOR NOW.
    const ref1 = useRef(null);
    const isInViewport1 = useIsInViewport(ref1);
    // const ref2 = useRef(null);
    // const isInViewport2 = useIsInViewport(ref2);

    return (
        <div className="experience" id='experience' >
            <h1 style={{ padding: "1em" }}>Experience</h1>
            <div ref={ref1} defer>
                <Timeline sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}>
                <div >
                    {(isInViewport1) && <Fade bottom>
                        <TimelineItem style={{ width: "70vw" }}>
                            <TimelineSeparator>
                                <TimelineDot style={{ backgroundColor: "rgb(0,48,73)" }} />
                                <TimelineConnector style={{ backgroundColor: "rgb(0,119,182)" }} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="content">
                                    <h4 style={{ color: "rgb(0,48,73)" }}>Teaching Assistant: Automata and Complexity</h4>
                                    <p className="small-text">Vrije Universiteit Amsterdam | FEBRUARY 2023 - MARCH 2023</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit eget leo mollis
                                        porttitor. Fusce vestibulum nunc vel quam feugiat, ac pellentesque ex dignissim.</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem >
                    </Fade>}
                </div>

                <div>
                    {(isInViewport1) && <Fade bottom>
                        <TimelineItem style={{ width: "70vw" }}>
                            <TimelineSeparator>
                                <TimelineDot style={{ backgroundColor: "rgb(0,48,73)" }} />
                                <TimelineConnector style={{ backgroundColor: "rgb(0,119,182)" }} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="content">
                                    <h4 style={{ color: "rgb(0,48,73)" }}>Teaching Assistant: Web Technology</h4>
                                    <p className="small-text">Vrije Universiteit Amsterdam | JANUARY 2023 {bull} JANUARY 2022</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit eget leo mollis
                                        porttitor. Fusce vestibulum nunc vel quam feugiat, ac pellentesque ex dignissim.</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Fade>}
                </div>

                <div>
                    {(isInViewport1) && <Fade bottom>
                        <TimelineItem style={{ width: "70vw" }}>
                            <TimelineSeparator>
                                <TimelineDot style={{ backgroundColor: "rgb(0,48,73)" }} />
                                <TimelineConnector style={{ backgroundColor: "rgb(0,119,182)" }} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="content">
                                    <h4 style={{ color: "rgb(0,48,73)" }}>Teaching Assistant: Information Retrieval</h4>
                                    <p className="small-text">Vrije Universiteit Amsterdam | NOVEMBER 2022 - DECEMBER 2022</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit eget leo mollis
                                        porttitor. Fusce vestibulum nunc vel quam feugiat, ac pellentesque ex dignissim.</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Fade>}
                </div>

                <div>
                    {(isInViewport1 ) && <Fade bottom>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit eget leo mollis
                                        porttitor. Fusce vestibulum nunc vel quam feugiat, ac pellentesque ex dignissim.</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Fade>}
                </div>

                <div>
                    {(isInViewport1) && <Fade bottom>
                        <TimelineItem style={{ width: "70vw" }}>
                            <TimelineSeparator>
                                <TimelineDot style={{ backgroundColor: "rgb(0,48,73)" }} />
                                <TimelineConnector style={{ backgroundColor: "rgb(0,119,182)" }} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="content">
                                    <h4 style={{ color: "rgb(0,48,73)" }}>Teaching Assistant: Computational Thinking</h4>
                                    <p className="small-text">Vrije Universiteit Amsterdam | SEPTEMBER 2021 - NOVEMBER 2021</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit eget leo mollis
                                        porttitor. Fusce vestibulum nunc vel quam feugiat, ac pellentesque ex dignissim.</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Fade>}
                </div>

                <div>
                    {(isInViewport1) && <Fade bottom>
                        <TimelineItem style={{ width: "70vw" }}>
                            <TimelineSeparator>
                                <TimelineDot style={{ backgroundColor: "rgb(0,48,73)" }} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="content">
                                    <h4 style={{ color: "rgb(0,48,73)" }}>Teaching Assistant: Computer Programming</h4>
                                    <p className="small-text">Vrije Universiteit Amsterdam | SEPTEMBER 2021 - NOVEMBER 2021</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit eget leo mollis
                                        porttitor. Fusce vestibulum nunc vel quam feugiat, ac pellentesque ex dignissim.</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Fade>}
                </div>
            </Timeline>
            </div>
                
            </div>
    );
}

export default Experience;
