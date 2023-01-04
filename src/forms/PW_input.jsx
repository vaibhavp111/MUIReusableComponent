import React from 'react'
import { Box, Grid, FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

function PW_input() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Box className='m-3'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                        <FormControl className='log-ip' fullWidth>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                className='log-ipbord'
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOffOutlinedIcon className='p-0' /> : <VisibilityOutlinedIcon className='p-0' />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder="Password"
                            />
                        </FormControl>
                    </Grid>
                </Grid>


            </Box>
        </>
    )
}

export default PW_input