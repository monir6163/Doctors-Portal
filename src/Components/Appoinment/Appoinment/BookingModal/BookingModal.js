import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../../Hooks/useAuth';
import { useState } from 'react';
import Swal from 'sweetalert2'

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
    const { user } = useAuth();
    const handlebook = e => {
        e.preventDefault();
        const appoinment = {
            ...bookingInfo,
            time,
            servicename: name,
            date: date.toLocaleDateString()
        }
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Good!',
                        'Appoinment Booked SuccessFully!',
                        'success'
                    )
                    handleBookingClose()
                }
            })
    }
    const initilaize = { patientname: user?.displayName, email: user?.email, phone: "" }
    const [bookingInfo, setBookingInfo] = useState(initilaize)
    const handleOnBlur = (e) => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        setBookingInfo(newInfo)
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
                                onBlur={handleOnBlur}
                                name="patientname"
                                defaultValue={user?.displayName}
                                variant="filled"
                                size="small"
                            />
                        </div>
                        <div>
                            <TextField
                                sx={{ width: '90%', mb: 2 }}
                                hiddenLabel
                                id="filled-hidden-label-small"
                                onBlur={handleOnBlur}
                                email="email"
                                defaultValue={user?.email}
                                variant="filled"
                                size="small"
                            />
                        </div>
                        <div>
                            <TextField
                                sx={{ width: '90%', mb: 2 }}
                                hiddenLabel
                                id="filled-hidden-label-small"
                                onBlur={handleOnBlur}
                                phone="phone"
                                placeholder="Your Phone Number"
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