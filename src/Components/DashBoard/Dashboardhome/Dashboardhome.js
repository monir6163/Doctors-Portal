import React from 'react';
import Calender from '../../Shared/Calender/Calender';
import Appoinments from '../Appoinments/Appoinments';
import { Grid } from '@mui/material';

const Dashboardhome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Calender
                    date={date}
                    setDate={setDate}
                ></Calender>
            </Grid>
            <Grid item xs={12} md={8}>
                <Appoinments
                    date={date}
                ></Appoinments>
            </Grid>
        </Grid>
    );
};

export default Dashboardhome;