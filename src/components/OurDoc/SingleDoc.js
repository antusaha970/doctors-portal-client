import { PhoneInTalk } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { Image } from '../../Styles/AllStyles';


const SingleDoc = ({doc}) => {
    const {name,number,imageLInk} = doc;
    return (
        <Box flex={1} textAlign="center" py={2}>
            <Image src={imageLInk} alt={name} height="250px" />
            <Typography variant="h6">
                {name}
            </Typography>
            <Typography >
                <PhoneInTalk /> {number}
            </Typography>
        </Box>
    );
};

export default SingleDoc;