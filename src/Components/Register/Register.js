import { Container, Grid, Box, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';
import login from '../../images/login.png';
import useAuth from '../../../src/Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, register, loading, authError } = useAuth();
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const loacation = useLocation();
    const history = useHistory();
    const [pass, setPass] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.confirmPassword) {
            setPass(<Alert severity="error">PassWord Not Matched!</Alert>)
            return;
        }
        setPass("")
        register(loginData.email, loginData.password, loginData.name, loacation, history)
    };
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8, p: 5, alignItems: 'center' }}>
                    <Box>
                        <Typography sx={{ mb: 8 }} variant="h4">Register</Typography>
                        <Typography sx={{ mb: 3 }}>
                            {pass}
                        </Typography>
                        {loading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                        {!loading && <form onSubmit={handleLogin}>
                            <TextField
                                label="Name"
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                required
                                fullWidth
                                variant="standard"
                                sx={{ mb: 5 }} />
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                required
                                fullWidth
                                variant="standard"
                                sx={{ mb: 5 }} />
                            <TextField
                                label="Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                required
                                fullWidth
                                sx={{ mb: 5 }}
                                variant="standard"
                            />
                            <TextField
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                onBlur={handleOnBlur}
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
                            >Register</Button>
                            <Link to='/login'>
                                <Button variant="text">Already Have An Account ? Please Login.</Button>
                            </Link>
                        </form>}
                        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
                            <Button variant="contained">Go Back Home</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="login" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;