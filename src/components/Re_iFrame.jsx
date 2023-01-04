import React from 'react'
import { Box } from '@mui/material';
import Iframe from 'react-iframe'

function Re_iFrame() {
    return (
        <Box className='m-3'>
            <Box className='d-flex justify-content-center align-items-center'>
                <Iframe  url="http://www.youtube.com/embed/xDMP3i36naA"
                    width="640px"
                    height="320px"
                    id=""
                    className=""
                    display="block"
                    position="relative" />
                    
            </Box>
        </Box>
    )
}

export default Re_iFrame