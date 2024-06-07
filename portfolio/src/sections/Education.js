import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../styles/ExpEd.css'
import { styled } from '@mui/material/styles';

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

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: 'rgb(0, 48, 73)',
      '&.Mui-selected': {
        color: "rgb(193, 18, 31)",
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
  );

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
                        bgcolor: "rgb(253, 240, 213)",
                        display: 'flex',
                        height: "60vh",
                        width: "80vw",

                    }}
                >
                    <Tabs
                        orientation="vertical"
                        // variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{
                            borderRight: 1, borderColor: 'divider',
                        }}
                    >
                        <StyledTab label="Masters (MSc)" {...a11yProps(0)} sx={{ ":hover": { textDecoration: "underline" }, color: "rgb(0, 48, 73)", fontSize: "1.5em", fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif", width: "20vw" }} />
                        <StyledTab label="Bachelors (BSc)" {...a11yProps(1)} sx={{ ":hover": { textDecoration: "underline" }, color: "rgb(0, 48, 73)", fontSize: "1.5em", fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif", width: "20vw" }} />
                        <StyledTab label="High School" {...a11yProps(2)} sx={{ ":hover": { textDecoration: "underline" }, color: "rgb(0, 48, 73)", fontSize: "1.5em", fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif", width: "20vw" }} />
                    </Tabs>
                    <TabPanel value={value} index={0} sx={{ fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif" }}>
                        <h3 style={{ color: "rgb(193, 18, 31)" }}>Vrije Universiteit Amsterdam</h3>
                        <p style={{ color: "rgb(0, 48, 73)", marginBottom: "5vh" }}>SEPTEMBER 2022 - PRESENT</p>
                        <p style={{width: "40vw"}}>I'm currently pursuing my Masters' degree in Computer Science: Big Data Engineering Track.</p>
                    </TabPanel>
                    <TabPanel value={value} index={1} sx={{ fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif" }}>
                        <h3 style={{ color: "rgb(193, 18, 31)" }}>Vrije Universiteit Amsterdam</h3>
                        <p style={{ color: "rgb(0, 48, 73)", marginBottom: "5vh" }}>SEPTEMBER 2019 - JUNE 2022</p>
                        <p style={{width: "40vw"}}>I completed my Bachelor's degree in Computer Science. During my degree I've completed the Data Science Minor.</p>
                    </TabPanel>
                    <TabPanel value={value} index={2} sx={{ fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif" }}>
                        <h3 style={{ color: "rgb(193, 18, 31)" }}>Notre Dame de Sion, Istanbul</h3>
                        <p style={{ color: "rgb(0, 48, 73)", marginBottom: "5vh" }}>SEPTEMBER 2014 - JUNE 2019</p>
                        <p style={{width: "40vw"}}>I completed a French high-school in Istanbul where I took advanced courses in Math, Physics, Biology, and Chemistry.</p>
                    </TabPanel>
                </Box>
            </div>

        </div>
    );
}