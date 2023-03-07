import { Box, Container, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { testimonialData } from '../../fakeData/fakeDatas';
import SingleReviewBox from '../SingleReviewBox/SingleReviewBox';

const Testimonial = () => {
    const [clientReview, setClientReview] = useState([]);
    useEffect(() => {
        setClientReview(testimonialData);
    },[])
    return (
        <Container maxWidth="lg">
            <Box py={3}>
                <Typography variant='h6' fontWeight='bold' color='primary' component='h2'>
                    TESTIMONIAL
                </Typography>
                <Typography variant='h2'>
                    What’s Our Patients
                    Says
                </Typography>
            </Box>
            <Stack direction={{ xs: 'column', sm: 'column', lg: 'row' }} spacing={2} my={4}>
                {
                    clientReview?.map((item, index) => <SingleReviewBox review={item} key={index}></SingleReviewBox>)
                }
            </Stack>

        </Container>
    );
};

export default Testimonial;