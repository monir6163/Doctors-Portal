import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Booking from '../Booking/Booking';

const AviableAppoinment = ({ date }) => {
    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '08.00 AM - 09.00 AM',
            space: 10,
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '09.00 AM - 10.00 AM',
            space: 8,
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '10.00 AM - 11.00 AM',
            space: 9,
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '11.00 AM - 12.00 PM',
            space: 5,
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '06.00 PM - 07.00 PM',
            space: 10,
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '07.00 PM - 08.00 PM',
            space: 10,
        },
    ]
    return (
        <Container sx={{ mb: 5 }}>
            <Typography variant="h4" sx={{ color: 'info.main', p: 5, fontWeight: 600 }}>Aviable Appoinment To {date.toDateString()} </Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(book => <Booking
                        key={book.id}
                        books={book}
                        date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AviableAppoinment;