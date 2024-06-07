import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        variant="fullWidth"
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: 'rgb(193, 18, 31)',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgb(26, 117, 159)',
        '&.Mui-selected': {
            color: "rgb(193, 18, 31)",
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

const ToApp = React.forwardRef((props, ref) => (
    <Link {...props} ref={ref} to="#introduction" />
));

const ToExperience = React.forwardRef((props, ref) => (
    <Link {...props} ref={ref} to="#experience" />
));

const ToEducation = React.forwardRef((props, ref) => (
    <Link {...props} ref={ref} to="#education" />
));

const ToProjects = React.forwardRef((props, ref) => (
    <Link {...props} ref={ref} to="#projects" />
));

export default function Navbar() {
    const [value, setValue] = React.useState(0);
    const sectionsRef = React.useRef([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = sectionsRef.current.indexOf(entry.target);
                    setValue(index);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        const currentSections = sectionsRef.current;
        currentSections.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            currentSections.forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, [sectionsRef]);

    return (
        <BrowserRouter>
            <Box sx={{ width: '100%', height: "4vh", position: 'fixed', top: "0", backgroundColor: "rgb(253, 240, 213)", zIndex: "100"}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <StyledTabs value={value} onChange={handleChange}>
                        <StyledTab label="About Me" component={ToApp} />
                        <StyledTab label="Experience" component={ToExperience} />
                        <StyledTab label="Education" component={ToEducation} />
                        <StyledTab label="Projects" component={ToProjects} />
                    </StyledTabs>
                </Box>
            </Box>
        </BrowserRouter>
    );
}