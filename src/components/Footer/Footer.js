import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box>
            <Typography variant='small' component='p' textAlign="center" py={3}>
                All Rights Reserved © {new Date().getFullYear()}
            </Typography>
        </Box>
    );
};

export default Footer;