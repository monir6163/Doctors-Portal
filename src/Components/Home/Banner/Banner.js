import React from 'react';
import chir from '../../../images/chair.png';
import bgbanner from '../../../images/bg.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const bannerbg = {
    background: `url(${bgbanner})`,
}
const vertical = {
    display: 'flex',
    height: 450,
    alignItems: 'center'
}
const Banner = () => {
    return (
        <Container style={bannerbg} sx={{ flexGrow: 1, mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...vertical }}>
                    <Box>
                        <Typography variant="h3" sx={{ mb: 3 }}>
                            Your New Smile <br />
                            Start's Here
                        </Typography>
                        <Typography sx={{ mb: 3 }} variant="h6" style={{ color: 'gray', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur porro eligendi laboriosam impedit, repellendus tempora fugit accusantium dolore labore libero!
                        </Typography>
                        <Button variant="contained" color="info">Get Appoinment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={vertical}>
                    <img style={{ width: '500px' }} src={chir} alt="chair" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Banner;