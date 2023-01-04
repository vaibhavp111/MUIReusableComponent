import React from 'react'
import { Box, Grid, Slider, Typography, TextField } from '@mui/material'


function valuetext(value) {
    return `${value}`;
}

const minDistance = 10;

function Slicer() {

    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };
    const [value2, setValue2] = React.useState([0, 100]);
    // const [diffVal, setDiffVal] = React.useState();
    const handleChange2 = (event, newValue, activeThumb) => {

        if (!Array.isArray(newValue)) {
            return;
        }
        // const diffVal = newValue[1] - newValue[0];
        if (newValue < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue);
            // setDiffVal(diffVal);
        }
    };

    return (
        <>
            <Box className='m-3'>

                <Box sx={{ width: 250 }}>

                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <Typography id="input-slider" gutterBottom>
                                Weightage
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <TextField value={value} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <Slider
                                value={typeof value === 'number' ? value : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                            />
                        </Grid>
                        <Grid item>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ width: 250 }}>
                    <Slider
                        getAriaLabel={() => 'Minimum distance shift'}
                        value={value2}
                        onChange={handleChange2}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                    />
                    <TextField value={value2} />
                </Box>

            </Box>
        </>
    )
}

export default Slicer