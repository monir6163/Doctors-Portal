import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, books, date }) => {
    const { name, time } = books;
    const handlebook = e => {
        alert('booked')
        handleBookingClose()
        e.preventDefault()
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handlebook}>
                        <div>
                            <TextField
                                disabled
                                sx={{ width: '90%', mb: 2 }}
                                hiddenLabel
                                id="filled-hidden-label-small"
                                defaultValue={time}
                                variant="filled"
                                size="small"
                            />
                        </div>
                        <div>
                            <TextField
                                sx={{ width: '90%', mb: 2 }}
                                hiddenLabel
                                id="filled-hidden-label-small"
                                defaultValue="Your Name"
                                variant="filled"
                                size="small"
                            />
                        </div>
                        <div>
                            <TextField
                                sx={{ width: '90%', mb: 2 }}
                                hiddenLabel
                                id="filled-hidden-label-small"
                                defaultValue="Your Phone Number"
                                variant="filled"
                                size="small"
                            />
                        </div>
                        <div>
                            <TextField
                                sx={{ width: '90%', mb: 2 }}
                                hiddenLabel
                                id="filled-hidden-label-small"
                                defaultValue="Your Email"
                                variant="filled"
                                size="small"
                            />
                        </div>
                        <div>
                            <TextField
                                disabled
                                sx={{ width: '90%', mb: 2 }}
                                hiddenLabel
                                id="filled-hidden-label-small"
                                defaultValue={date.toDateString()}
                                variant="filled"
                                size="small"
                            />
                        </div>
                        <Button type="submit" variant="contained" color="success">
                            BOOK Now
                        </Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;