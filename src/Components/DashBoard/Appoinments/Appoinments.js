import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Appoinments = ({ date }) => {
    const { user, token } = useAuth();
    const [appoinments, setAppoinments] = useState([]);
    useEffect(() => {
        const url = `https://glacial-temple-44454.herokuapp.com/appointments?email=${user?.email}&date=${date.toLocaleDateString()}`;
        fetch(url, {
            headers: {
                'authorized': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAppoinments(data))
    }, [date, user?.email, token])
    return (
        <Box>
            <Typography>Appoinments {appoinments.length}</Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>PatientName</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">ServiceName</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appoinments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientname}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.servicename}</TableCell>
                                <TableCell align="right">{row.payment ? <p style={{ color: 'green' }}>Paid</p> :
                                    <Link to={`/dashboard/payment/${row._id}`} style={{ textDecoration: 'none' }}>
                                        <Button variant="contained">Pay Now</Button>
                                    </Link>
                                }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Appoinments;