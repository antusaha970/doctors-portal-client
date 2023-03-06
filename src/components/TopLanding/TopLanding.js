import { Box, Button, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import chair from '../../images/chair.png';
import './TopLanding.css';
import styled from '@emotion/styled';

const TitleTop = styled(Typography)(({ theme }) => ({
    fontWeight: '400',
    fontSize: '45px'
}))


const TopLanding = () => {
    return (
        <Box className="bg-top">
            <Container maxWidth="lg">
                <NavLinks></NavLinks>
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} sx={{ mt: { lg: '150px', xs: '80px' } }}>
                    <Box flex={1}>
                        <TitleTop variant='h1' component='h1'>
                            Your New Smile
                            Starts Here
                        </TitleTop>
                        <Typography variant='p' component='p'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                        </Typography>
                        <Button variant='contained' >Get Appointment</Button>
                    </Box>
                    <Box flex={1}>
                        <img src={chair} alt="landing chair" className='img-top' />
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default TopLanding;