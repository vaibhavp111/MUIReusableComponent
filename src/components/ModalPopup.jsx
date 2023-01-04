import React from 'react'
import { Box, Grid, Typography, Button, Modal } from '@mui/material'
import ReactPlayer from "react-player";
import Success from '../assets/imges/success.png'
import Del from '../assets/imges/del.png'

const simple = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'var(--white)',
    border: '1px solid var(--borders)',
    color: 'var(--black)',
    boxShadow: 24,
    p: 4,
};

const succes = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'var(--successbg)',
    border: '1px solid var(--success)',
    color: 'var(--success)',
    boxShadow: 24,
    p: 4,
};

const failure = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'var(--failbg)',
    border: '1px solid var(--fail)',
    color: 'var(--fail)',
    boxShadow: 24,
    p: 4,
};

function ModalPopup() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    return (
        <>
            <Box className='m3'>

                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                            <Button onClick={handleOpen} className='btn btwl font-12-16 fw-600' variant="contained" size="small">Succuess</Button>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                            <Button onClick={handleOpen1} className='btn btwl font-12-16 fw-600' variant="contained" size="small">Fail</Button>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                            <Button onClick={handleOpen2} className='btn btwl font-12-16 fw-600' variant="contained" size="small">Simple</Button>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                            <Button onClick={handleOpen3} className='btn btwl font-12-16 fw-600' variant="contained" size="small">videos</Button>
                        </Grid>
                    </Grid>
                </Box>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={succes} className="text-center border-rad8">
                        <Box className=''>
                            <img src={Success} className="log-social" alt="succes" />
                        </Box>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Successfully add new Category
                        </Typography>
                    </Box>
                </Modal>
                <Modal
                    open={open1}
                    onClose={handleClose1}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={failure} className="text-center border-rad8">
                        <Box className=''>
                            <img src={Del} className="log-social" alt="succes" />
                        </Box>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Successfully deleted the selected Category
                        </Typography>
                    </Box>
                </Modal>
                <Modal
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={simple} className="text-center border-rad8">
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Put your content here
                        </Typography>
                    </Box>
                </Modal>
                <Modal
                    open={open3}
                    onClose={handleClose3}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={simple} className="text-center border-rad8">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=WDpxqopXd9U"
                            width="100%"
                            height="calc(100vh - 150px)"
                        />
                    </Box>
                </Modal>
            </Box>
        </>
    )
}

export default ModalPopup