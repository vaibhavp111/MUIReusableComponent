import React from 'react'
import { Tabs, Tab, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabHorizontal() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box className="m-3">
            <Box sx={{ width: '100%' }} className="tab-panel">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="One" {...a11yProps(0)} />
                        <Tab label="Two" {...a11yProps(1)} />
                        <Tab label="Three" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    One Put your first content here
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Two Put your second content here
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Three Put your third content here
                </TabPanel>
            </Box>
        </Box>
    )
}

export default TabHorizontal