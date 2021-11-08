import { Container, Grid, Box, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import loginimg from '../../images/login.png';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    const { user, login, authError, loading, googleLogin } = useAuth();
    const [loginData, setLoginData] = useState({});
    const handleOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const location = useLocation();
    const history = useHistory();

    const handleLogin = (e) => {
        login(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };
    const handleGoogle = () => {
        googleLogin(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8, p: 5, alignItems: 'center' }}>
                    <Box>
                        <Typography sx={{ mb: 8 }} variant="h4">Login</Typography>
                        <form onSubmit={handleLogin}>
                            {loading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                onChange={handleOnchange}
                                required
                                fullWidth
                                variant="standard"
                                sx={{ mb: 5 }} />
                            <TextField
                                label="Password"
                                type="password"
                                name="password"
                                onChange={handleOnchange}
                                required
                                fullWidth
                                sx={{ mb: 5 }}
                                variant="standard"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mb: 5 }}
                            >Login</Button>
                            <Link to='/register'>
                                <Button variant="text">New User ? Please Register.</Button>
                            </Link>
                        </form>
                        <p>---------------------</p>
                        <Button onClick={handleGoogle} variant="contained"><GoogleIcon /> Login With Google</Button>
                        <Box sx={{ mt: 5 }}>
                            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
                                <Button variant="contained">Go Back Home</Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginimg} alt="login" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;