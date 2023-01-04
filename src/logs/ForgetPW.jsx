import React, { useState, useEffect } from 'react'
import { Box, Card, FormControl, OutlinedInput, CardContent, Typography, Container, Button } from '@mui/material'
import { Link } from "react-router-dom";
import Header from '../components/Header'
import logo from '../assets/imges/bosch.png'
import gmail from '../assets/imges/gmail.png'
import facebook from '../assets/imges/facebook.png'
import ln from '../assets/imges/in.png'

function Forgetpw() {

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
                                        Forget Password
                                    </Typography>
                                    <Typography className='text-normal-color font-16-16 fw-600 mb-3'>
                                        Enter your email address and we'll send you a link to reset your password.
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
                                    <Box>
                                        <Link to="/reset" className='text-deco-none'>
                                            <Button type='button' className='btn fw-600' width={'80%'} size="small" fullWidth>
                                                Reset password
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

export default Forgetpw