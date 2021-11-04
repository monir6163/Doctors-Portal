import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import footerbg from '../../../images/footer-bg.png';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const footer = {
        background: `url(${footerbg})`
    }
    return (
        <Box style={footer} sx={{ flexGrow: 1 }}>
            <Container sx={{ p: 3 }}>
                <Grid container spacing={{ xs: 2, md: 12 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 3, textAlign: 'left' }}>
                            <Link to="/" sx={{ color: 'text.secondary' }} style={{ textDecoration: 'none' }}>
                                Doctors Portal
                            </Link>
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: 14, textAlign: 'justify' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum reprehenderit adipisci, beatae, aliquam eveniet assumenda tempora sunt dolorum maiores temporibus reiciendis sint expedita hic, ipsa consequatur laborum voluptatibus itaque voluptatem?</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 3, color: '#23dbd2' }}>
                            Services
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: 14, textAlign: 'justify' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum reprehenderit adipisci, beatae, aliquam eveniet assumenda tempora sunt dolorum maiores temporibus reiciendis sint expedita hic, ipsa consequatur laborum voluptatibus itaque voluptatem?</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 3, color: '#23dbd2' }}>
                            Oral Health
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: 14, textAlign: 'justify' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum reprehenderit adipisci, beatae, aliquam eveniet assumenda tempora sunt dolorum maiores temporibus reiciendis sint expedita hic, ipsa consequatur laborum voluptatibus itaque voluptatem?</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 3, color: '#23dbd2' }}>
                            Our Address
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: 14, textAlign: 'justify' }}>
                            New York - 101010 Hudson Yards
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                            <Typography variant="h6" sx={{ p: 3 }}>
                                <FacebookIcon />
                            </Typography>
                            <Typography variant="h6" sx={{ p: 3 }}>
                                <TwitterIcon />
                            </Typography>
                            <Typography variant="h6" sx={{ p: 3 }}>
                                <LinkedInIcon />
                            </Typography>
                        </Box>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 3, color: '#23dbd2' }}>
                            Call Now
                        </Typography>
                        <Button variant="contained">+202558848</Button>
                    </Grid>
                </Grid>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.secondary', mt: 3 }}>
                    CopyRight 2021. All Rights Reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;