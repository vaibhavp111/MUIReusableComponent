import * as React from 'react';
import { AppBar, Toolbar, Typography, Container} from '@mui/material';

function Header() {

    return (
        <>
            <AppBar position="fixed" className='header'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                            }}
                            className="text-head-color"
                        >
                            Reusable Componets
                        </Typography>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                            }}
                            className="text-head-color"
                        >
                           Reusable Componets
                        </Typography>
                       
                    </Toolbar>
                </Container>
            </AppBar>
        </>

    )
}

export default Header