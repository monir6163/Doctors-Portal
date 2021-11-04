import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Container, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

const Information = () => {
    return (
        <Container sx={{ mt: -6 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ minWidth: 275, backgroundColor: '#23dbd2' }}>
                            <CardContent sx={{ display: 'flex' }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 400, textAlign: 'justify' }} color="text.secondary" gutterBottom>
                                    <AccessTimeIcon sx={{ fontSize: '3.2rem', color: '#fff' }} />
                                </Typography>
                                <Box sx={{ pl: 2, color: '#fff' }}>
                                    <Typography sx={{ fontSize: 18, fontWeight: 600, textAlign: 'left' }} gutterBottom>
                                        Opening Hours
                                    </Typography>
                                    <Typography sx={{ fontSize: 12, fontWeight: 600 }} gutterBottom>
                                        Lorem ipsum dolor sit amet.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ minWidth: 275, backgroundColor: '#3a4256' }}>
                            <CardContent sx={{ display: 'flex' }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 400, textAlign: 'justify' }} color="text.secondary" gutterBottom>
                                    <RoomIcon sx={{ fontSize: '3.2rem', color: '#fff' }} />
                                </Typography>
                                <Box sx={{ pl: 2, color: '#fff' }}>
                                    <Typography sx={{ fontSize: 18, fontWeight: 600, textAlign: 'left' }} gutterBottom>
                                        Visit Our Location
                                    </Typography>
                                    <Typography sx={{ fontSize: 12, fontWeight: 600 }} gutterBottom>
                                        New York - 101010 Hudson Yards.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ minWidth: 275, backgroundColor: '#23dbd2' }}>
                            <CardContent sx={{ display: 'flex' }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 400, textAlign: 'justify' }} color="text.secondary" gutterBottom>
                                    <PermPhoneMsgIcon sx={{ fontSize: '3.2rem', color: '#fff' }} />
                                </Typography>
                                <Box sx={{ pl: 2, color: '#fff' }}>
                                    <Typography sx={{ fontSize: 18, fontWeight: 600, textAlign: 'left' }} gutterBottom>
                                        Contact Us Now
                                    </Typography>
                                    <Typography sx={{ fontSize: 12, fontWeight: 600 }} gutterBottom>
                                        +2025775787585777
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
};

export default Information;