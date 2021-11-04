import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';

const Doctor = (props) => {
    const { image, name, phone } = props.doctor;
    return (
        <Grid item xs={12} sm={4} md={4}>
            <Card variant="outlined" sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    sx={{ width: '300px', m: 'auto', p: 2 }}
                    image={image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography sx={{ fontSize: 18, fontWeight: 600 }} color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5, alignItems: 'center' }} color="text.secondary">
                        <CallIcon /> {phone}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Doctor;