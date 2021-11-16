import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ books, date }) => {
    const { name, time, price, space } = books;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" gutterBottom display="block">
                        Price: ${price}
                    </Typography>
                    <Typography variant="caption" gutterBottom display="block">
                        {space} SPACES AVIABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained" color="success">
                        BOOK APPOINMENT
                    </Button>
                </Paper>
            </Grid>
            <BookingModal
                books={books}
                date={date}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
            >
            </BookingModal>
        </>
    );
};

export default Booking;