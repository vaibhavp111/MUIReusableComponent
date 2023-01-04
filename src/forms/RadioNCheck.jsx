import React from 'react'
import { Box, Grid, FormControl, Radio, Checkbox, RadioGroup, FormControlLabel, FormLabel, FormGroup } from '@mui/material'

function RadioNCheck() {
    return (
        <Box className="m-3">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6} className="d-flex align-items-center justify-content-center">
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} className="d-flex align-items-center justify-content-center">
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Choose multiple</FormLabel>
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Tea" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Coffee" />
                            <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Alligators" />
                        </FormGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    )
}

export default RadioNCheck