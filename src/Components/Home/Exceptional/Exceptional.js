import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import treatment from '../../../images/treatment.png';
import Box from '@mui/material/Box';

const Exceptional = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%', height: 'auto' }} src={treatment} alt="treatment" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                        <Box>
                            <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                                Exceptional Dental Care, On Yours Terms
                            </Typography>
                            <Typography variant="body1" component="p" sx={{ color: 'text.secondary', mt: 5, mb: 5 }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet natus magnam ipsam possimus eligendi, accusamus porro corporis commodi voluptate numquam illum fugit distinctio fugiat eum ut necessitatibus officia aperiam quaerat exercitationem tempore corrupti quasi? Quia sapiente, laudantium amet aspernatur perspiciatis exercitationem culpa eveniet mollitia accusantium consequatur, harum, tempora adipisci ipsa. Suscipit, architecto. Rem assumenda optio esse minima ipsam numquam minus.
                            </Typography>
                            <Button variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Exceptional;