import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import doctorbg from '../../../images/appointment-bg.png';
import { Typography, Button, Container } from '@mui/material';

const appoinmentbg = {
    background: `url(${doctorbg})`,
    backgroundColor: 'rgba(75, 73, 73, 0.6)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
}
const AppoinmentBanner = () => {
    return (
        <Box style={appoinmentbg} sx={{ flexGrow: 1, mb: 5 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%', marginTop: '-115px' }} src={doctor} alt="doctor" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center', p: 2 }}>
                        <Box>
                            <Typography variant="h6" sx={{ color: '#23dbd2', mb: 3 }}>
                                Appoinment
                            </Typography>;
                            <Typography variant="h4" sx={{ mb: 3 }} style={{ color: '#fff', }}>
                                Make A Appoinment Today
                            </Typography>;
                            <Typography variant="h4" sx={{ mb: 3, lineHeight: 2 }} style={{ color: '#fff', fontSize: 14 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus repudiandae id quaerat fugit quas ipsam inventore similique itaque neque.
                            </Typography>;
                            <Button variant="contained" color="info">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default AppoinmentBanner;