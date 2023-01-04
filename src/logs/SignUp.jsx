import React, { useState, useEffect } from 'react'
import { Box, Card, FormControl, OutlinedInput, InputAdornment, IconButton, CardContent, Typography, Container, Button } from '@mui/material'
import { Link } from "react-router-dom";
import logo from '../assets/imges/bosch.png'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Header from '../components/Header'

function SignUp() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [isResp900, setIsResp900] = useState(window.innerWidth < 900);
    useEffect(() => {
        window.addEventListener("resize", () => {
            const isresp900 = window.innerWidth < 900;
            if (isresp900 !== isResp900) setIsResp900(isresp900);
        }, false);
    }, [isResp900]);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 600;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);

    return (
        <>
            <Header />

            <Box className="logbg">
                <Box className='p-ext'>
                    <Container maxWidth="xl">
                        <Box className={isResp900 ? "d-flex align-items-center justify-content-center" : "d-flex align-items-center justify-content-end"}>
                            <Card className={isResp900 ? "log-card p-4" : "log-card p-4 mr-3"}>
                                <CardContent>
                                    <img src={logo} className="mb-2" alt="logo" style={isMobile ? { height: "auto", width: "8vw" } : { height: "auto", width: "5vw" }} />
                                    <Typography className='text-head-color font-24-22 fw-700 mb-3'>
                                        Sign Up
                                    </Typography>
                                    <Typography className='text-normal-color font-16-16 fw-600 mb-3'>
                                        Please enter your Details:
                                    </Typography>
                                    <div className='hr-50'></div>

                                    <Box className='m-3'>
                                        <FormControl className='log-ip' fullWidth>
                                            <OutlinedInput
                                                id="outlined-adornment-weight"
                                                className='log-ipbord'
                                                placeholder="Full Name"
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box className='m-3'>
                                        <FormControl className='log-ip' fullWidth>
                                            <OutlinedInput
                                                id="outlined-adornment-weight"
                                                className='log-ipbord'
                                                placeholder="Email Id"
                                            />
                                        </FormControl>
                                    </Box>

                                    <Box className='m-3'>
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
                                                placeholder="Confirm Password"
                                            />
                                        </FormControl>
                                    </Box>

                                    <Box>
                                        <Link to="/" className='text-deco-none'>
                                            <Button type='button' className='btn fw-600' width={'80%'} size="small" fullWidth>
                                                Sign Up
                                            </Button>
                                        </Link>
                                    </Box>

                                    <Typography className='text-normal-color font-16-16 fw-600 m-3'>
                                        You Already Have An Account? <Link to="/" className='text-deco-none'><span className='text-head-color'>SIGN IN</span></Link>
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default SignUp