import React from 'react'
import { Box, Grid, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

function DateRange_picker() {
    const [value, setValue] = React.useState([null, null]);
    return (
        <Box className="m-3">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4} lg={4} className="d-flex align-items-center justify-content-center">
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        localeText={{ start: 'From', end: 'To' }}
                    >
                        <DateRangePicker
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                    <TextField {...startProps} />
                                    <Box sx={{ mx: 2 }}> to </Box>
                                    <TextField {...endProps} />
                                </React.Fragment>
                            )}
                        />
                    </LocalizationProvider>

                </Grid>
            </Grid>
        </Box>
    )
}

export default DateRange_picker