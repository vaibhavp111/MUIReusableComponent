import React, { useState, useEffect } from 'react'
import { Grid, Box, Card, FormControl, OutlinedInput, InputAdornment, IconButton, CardContent, Typography, Container, Checkbox, Button } from '@mui/material'
import { Link } from "react-router-dom";
import Header from '../components/Header'
import logo from '../assets/imges/bosch.png'
import gmail from '../assets/imges/gmail.png'
import facebook from '../assets/imges/facebook.png'
import ln from '../assets/imges/in.png'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

function Login() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLinkedIn = () => {
        window.open("https://www.linkedin.com/company/bosch-india/");
    };

    const handleFacebook = () => {
        window.open("https://www.facebook.com/BoschIndia");
    };

    const handleMail = () => {
        window.open("https://www.bosch.in/contact/");
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
                                        Sign In
                                    </Typography>
                                    <Typography className='text-head-color font-18-16 fw-600 mb-3'>
                                        Welcome to Bosch Admin Portal
                                    </Typography>
                                    <div className='hr-50'></div>
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
                                                placeholder="Password"
                                            />
                                        </FormControl>
                                    </Box>

                                    <Box className='m-3'>
                                        <Grid container spacing={1} alignContent='center' alignItems='center'>
                                            <Grid item xs={6} sm={6} md={6} lg={6} className="pl-0 pt-0">
                                                <Typography className={isMobile ? "text-normal-color font-12-16 fw-600 pl-2 d-flex align-items-center justify-content-start checkcol" : "text-normal-color font-14-16 fw-600 pl-2 d-flex align-items-center justify-content-start checkcol"}>
                                                    <Checkbox className='p-0' />Remember Me!
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6} md={6} lg={6} className="pl-2 pt-0">
                                                <Link to="/forget" className='text-deco-none'>
                                                    <Typography className={isMobile ? "text-normal-color font-12-16 fw-600 d-flex align-items-center justify-content-end" : "text-normal-color font-14-24 fw-600 d-flex align-items-center justify-content-end"}>
                                                        Forget Password?
                                                    </Typography>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    <Box>
                                        <Link to="/" className='text-deco-none'>
                                            <Button type='button' className='btn fw-600' width={'80%'} size="small" fullWidth>
                                                Sign In
                                            </Button>
                                        </Link>
                                    </Box>

                                    <Box className='d-flex justify-content-space-around m-3'>
                                        <Button onClick={handleMail}>
                                            <img src={gmail} className="log-social" alt="gmail" />
                                        </Button>
                                        <Button onClick={handleFacebook}>
                                            <img src={facebook} className="log-social" alt="facebook" />
                                        </Button>
                                        <Button onClick={handleLinkedIn}>
                                            <img src={ln} className="log-social" alt="linkedIn" />
                                        </Button>
                                    </Box>

                                    <Typography className='text-normal-color font-16-16 fw-600 m-3'>
                                        Need An Account? <Link to="/signup" className='text-deco-none'><span className='text-head-color'>SIGN UP</span></Link>
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

export default Login