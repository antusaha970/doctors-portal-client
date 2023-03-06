import { Box } from '@mui/material';
import React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import './TopLanding.css';



const TopLanding = () => {
    return (
        <Box className="bg-top">
            <NavLinks></NavLinks>
        </Box>
    );
};

export default TopLanding;