import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Testimonials = (props) => {
    const { description, image, name, address } = props.testimonials;
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14, fontWeight: 400, textAlign: 'justify' }} color="text.secondary" gutterBottom>
                        {description}
                    </Typography>
                </CardContent>
                <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: '50px', p: 3 }}
                        image={image}
                        alt="Paella dish"
                    />
                    <Box>
                        <Typography sx={{ fontSize: 18, fontWeight: 600, color: '#23dbd2' }} gutterBottom>
                            {name}
                        </Typography>
                        <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary" gutterBottom>
                            {address}
                        </Typography>
                    </Box>
                </Grid>
            </Card>
        </Grid>
    );
};

export default Testimonials;