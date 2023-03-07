import { Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { docData } from '../../fakeData/fakeDatas';
import SingleDoc from './SingleDoc';

const OurDoc = () => {
    const [docDetails, setDocDetails] = useState([]);
    useEffect(() => {
        setDocDetails(docData);
    }, [])
    return (
        <Container maxWidth='lg'>
            <Typography variant='h4' color="#5FC7C7" fontWeight="bold" textAlign="center">
                OUR DOCTORS
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'column', lg: 'row' }} spacing={1}>
                {
                    docDetails?.map((doc, index) => <SingleDoc doc={doc} key={index * 10}></SingleDoc>)
                }
            </Stack>

        </Container>
    );
};

export default OurDoc;