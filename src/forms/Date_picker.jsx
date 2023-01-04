import React from 'react'
import { Box, Grid, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Date_picker() {
    const [value, setValue] = React.useState(null);
    return (
        <Box className='m-3'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            className="dtpicker"
                            placeHolder="Basic example"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Date_picker