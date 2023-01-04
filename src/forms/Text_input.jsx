import React from 'react'
import { Box, Grid, FormControl, TextField } from '@mui/material'

function Text_input() {
    return (
        <>
            <Box className='m-3'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                        <FormControl fullWidth>
                            <TextField className='reg-ipbox font-12-16' placeholder="Place Holder" />
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Text_input