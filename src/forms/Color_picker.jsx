import React, { useState } from 'react';
import { Box, Grid} from '@mui/material'
import { SketchPicker } from 'react-color';

function Color_picker() {
    const [colorHexCode, setColorHexCode] = useState('#ffffff');
    return (
        <Box className='m-3'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Box className="d-flex align-items-center justify-content-center">
                        <SketchPicker
                            color={colorHexCode}
                            onChange={e => setColorHexCode(e.hex)} />
                    </Box>
                    <Box>
                        <p><b>Selected Hex Color: </b>{colorHexCode}</p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Color_picker