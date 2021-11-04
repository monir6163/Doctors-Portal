import React from 'react';
import Box from '@mui/material/Box';
import doctorbg from '../../../images/appointment-bg.png';
import { Button, Container, TextField, Typography } from '@mui/material';

const Contact = () => {
    const appoinmentbg = {
        background: `url(${doctorbg})`,
        backgroundColor: 'rgba(75, 73, 73, 0.6)',
        backgroundBlendMode: 'darken, luminosity'
    }
    const sendMessage = (e) => {
        alert('Message sent Success')
        e.preventDefault()
    }
    return (
        <Box style={appoinmentbg} sx={{ flexGrow: 1, mb: 5 }}>
            <Container sx={{ p: 5 }}>
                <Typography variant="h6" sx={{ color: '#23dbd2' }}>
                    Contact Us
                </Typography>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#fff' }}>
                    Always Contact With Us
                </Typography>
                <Box sx={{ flexGrow: 1, backgroundColor: '#fff', p: 5, borderRadius: '5px' }}>
                    <form onSubmit={sendMessage}>
                        <TextField sx={{ mb: 2, border: 'none', borderRadius: '5px' }} required fullWidth label="Email" id="fullWidth" />
                        <TextField sx={{ mb: 2, border: 'none', borderRadius: '5px' }} required fullWidth label="Subject" id="fullWidth" />
                        <TextField sx={{ mb: 5 }}
                            fullWidth
                            required
                            label="Message"
                            placeholder="Message"
                            multiline
                            rows={2}
                            rowsmax={4}
                        />
                        <Button type="submit" variant="contained">Send</Button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;