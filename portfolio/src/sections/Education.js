import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../styles/ExpEd.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Education() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div class="education" id="education">
            <h1>Education</h1>
            <div className='edu-box'>
                <Box
                    className='edu-tabs'
                    sx={{
                        bgcolor: 'background.paper',
                        display: 'flex',
                        height: "50vh",
                        width: "60vw",

                    }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{
                            borderRight: 1, borderColor: 'divider',
                        }}
                    >
                        <Tab label="Masters" {...a11yProps(0)} sx={{ ":hover": { bgcolor: "rgb(235, 245, 255)" }, fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif", width: "200px" }} />
                        <Tab label="Bachelors" {...a11yProps(1)} sx={{ ":hover": { bgcolor: "rgb(235, 245, 255)" }, fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif", width: "200px" }} />
                        <Tab label="High School" {...a11yProps(2)} sx={{ ":hover": { bgcolor: "rgb(235, 245, 255)" }, fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif", width: "200px" }} />
                    </Tabs>
                    <TabPanel value={value} index={0} sx={{ fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif" }}>
                        <h3 style={{ color: "rgb(0, 39, 81)" }}>Vrije Universiteit Amsterdam</h3>
                        <p style={{ color: "rgb(0, 128, 255)", marginBottom: "5vh" }}>SEPTEMBER 2022 - PRESENT</p>
                        <p style={{width: "30vw"}}>I'm currently pursuing my Masters' degree in Computer Science: Big Data Engineering Track.</p>
                    </TabPanel>
                    <TabPanel value={value} index={1} sx={{ fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif" }}>
                        <h3 style={{ color: "rgb(0, 39, 81)" }}>Vrije Universiteit Amsterdam</h3>
                        <p style={{ color: "rgb(0, 128, 255)", marginBottom: "5vh" }}>SEPTEMBER 2019 - JUNE 2022</p>
                        <p style={{width: "30vw"}}>I completed my Bachelor's degree in Computer Science. During my degree I've completed the Data Science Minor.</p>
                    </TabPanel>
                    <TabPanel value={value} index={2} sx={{ fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif" }}>
                        <h3 style={{ color: "rgb(0, 39, 81)" }}>Notre Dame de Sion, Istanbul</h3>
                        <p style={{ color: "rgb(0, 128, 255)", marginBottom: "5vh" }}>SEPTEMBER 2014 - JUNE 2019</p>
                        <p style={{width: "30vw"}}>I completed a French high-school in Istanbul where I took advanced courses in Math, Physics, Biology, and Chemistry.</p>
                    </TabPanel>
                </Box>
            </div>

        </div>
    );
}