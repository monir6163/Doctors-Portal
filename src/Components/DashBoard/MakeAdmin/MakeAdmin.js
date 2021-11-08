import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const { token } = useAuth();
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnblur = e => {
        const value = e.target.value;
        setEmail(value);
    }

    const handleOnsubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setEmail("")
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make A Admin</h2>
            <form onSubmit={handleOnsubmit}>
                {success && <Alert severity="success">Make Admin successfully!</Alert>}
                <TextField sx={{ mb: 5 }} id="standard-basic"
                    label="Admin Email"
                    type="email"
                    onBlur={handleOnblur}
                    style={{ width: "75%" }}
                    required
                    variant="standard" />
                <Button type="submit" variant='contained'>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;