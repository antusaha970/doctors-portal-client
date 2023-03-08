import { Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotMatched = () => {
    const navigate = useNavigate();
    setTimeout(()=>{
        navigate('/');
    },1000)
    return (
        <div>
            <Typography variant="h1" component="p" textAlign="center">Page Not found 404 !!!</Typography>
        </div>
    );
};

export default NotMatched;