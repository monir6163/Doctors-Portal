import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import test1 from '../../../images/people-1.png';
import test2 from '../../../images/people-2.png';
import test3 from '../../../images/people-3.png';
import Testimonials from './Testimonials/Testimonials';

const Testimonial = () => {
    const testimonial = [
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus natus odit fugiat, beatae ab at dolore! Eos laborum natus consectetur ab enim. Nisi nemo deserunt quidem, adipisci perspiciatis praesentium.',
            image: test1,
            name: 'Winson Herry',
            address: 'Califonia',
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus natus odit fugiat, beatae ab at dolore! Eos laborum natus consectetur ab enim. Nisi nemo deserunt quidem, adipisci perspiciatis praesentium.',
            image: test2,
            name: 'Winson Herry',
            address: 'Califonia',
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus natus odit fugiat, beatae ab at dolore! Eos laborum natus consectetur ab enim. Nisi nemo deserunt quidem, adipisci perspiciatis praesentium.',
            image: test3,
            name: 'Winson Herry',
            address: 'Califonia',
        }
    ]
    return (
        <Box sx={{ flexGrow: 1, mb: 5 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h4" component="h4" gutterBottom sx={{ color: 'info.main', display: 'flex', justifyContent: 'flex-start', fontSize: 15, fontWeight: 500, textTransform: 'uppercase' }}>
                            Testimonials
                        </Typography>
                        <Typography variant="h6" component="h6" gutterBottom sx={{ display: 'flex', justifyContent: 'flex-start', fontSize: 30, fontWeight: 600, textTransform: 'uppercase' }}>
                            What's our Patients says
                        </Typography>
                    </Grid>

                    {
                        testimonial.map(testimonials => <Testimonials
                            key={testimonials.image}
                            testimonials={testimonials}
                        ></Testimonials>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonial;