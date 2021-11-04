import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor1 from '../../../images/doctor-small.png';
import Doctor from './Doctor/Doctor';
import { Container, Typography } from '@mui/material';

const Doctors = () => {
    const doctors = [
        {
            name: 'Dr. John Doe',
            phone: '+885245621552',
            image: doctor1,
        },
        {
            name: 'Dr. Chaudi',
            phone: '+885245621552',
            image: doctor1,
        },
        {
            name: 'Dr. John vai',
            phone: '+885245621552',
            image: doctor1,
        },
    ]
    return (
        <Container sx={{ mt: 5, mb: 5 }}>
            <Typography variant="h4" sx={{ mb: 3, color: '#23dbd2' }}>
                Our Doctors
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.name}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Grid>
            </Box>
        </Container >
    );
};

export default Doctors;