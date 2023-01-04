import React from 'react'
import { Box, Card, CardContent, Typography, Container } from '@mui/material'
import Header from '../components/Header'
import AgGrid from '../components/AgGrid';
import Slicer from '../components/Slicer';
import ModalPopup from '../components/ModalPopup';
import Text_input from '../forms/Text_input';
import PW_input from '../forms/PW_input';
import Date_picker from '../forms/Date_picker';
import Time_picker from '../forms/Time_picker';
import DateRange_picker from '../forms/DateRange_picker';
import Color_picker from '../forms/Color_picker';
import Dropdown_all from '../forms/Dropdown_all';
import RadioNCheck from '../forms/RadioNCheck';
import FileUp_simple from '../forms/FileUp_simple';
import DropZones from '../forms/DropZones';

import DrawerSimple from '../components/DrawerSimple';
import DrawerWithsub from '../components/DrawerWithsub';
import CarouselSimple from '../components/CarouselSimple';
import AccordionSimp from '../components/AccordionSimp';
import TooltipSample from '../components/TooltipSample';
import TabHorizontal from '../components/TabHorizontal';
import TabVertical from '../components/TabVertical';
import Re_iFrame from '../components/Re_iFrame';
import PdfViewer from '../components/PdfViewer';


function Sample_page() {
    return (
        <>
            <Header />
            <Box className='portals-ext'>
                <Container maxWidth="xl">
                    <Typography className='text-normal-color font-16-16 fw-600 my-3'>
                        Check your component here
                    </Typography>
                    <Card className='p-3 bx-shdow text-center'>
                        <CardContent className='p-0'>
                            {/* <AgGrid /> */}
                            {/* <Text_input /> */}
                            {/* <PW_input /> */}
                            {/* <Date_picker /> */}
                            {/* <Time_picker /> */}
                            {/* <DateRange_picker /> */}
                            {/* <Color_picker /> */}
                            {/* <Dropdown_all /> */}
                            {/* <RadioNCheck /> */}
                            {/* <FileUp_simple /> */}
                            {/* <DropZones /> */}

                            {/* <Slicer /> */}
                            {/* <ModalPopup /> */}
                            {/* <DrawerSimple /> */}
                            {/* <DrawerWithsub /> */}
                            {/* <CarouselSimple/> */}
                            {/* <AccordionSimp /> */}
                            {/* <TooltipSample /> */}
                            {/* <TabHorizontal /> */}
                            {/* <TabVertical /> */}
                            {/* <Re_iFrame /> */}
                            <PdfViewer />
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </>
    )
}

export default Sample_page