import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../../images/chair.png';
import Calender from '../../../Shared/Calender/Calender';

const AppoinmentHeader = ({ date, setDate }) => {
    return (
        <Container sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="appoinment-chaire" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentHeader;