import { Container, Box, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import { Image } from '../../Styles/AllStyles';
import Doctor from '../../images/doctor.png';


const Appointment = () => {
    return (
        <Box bgcolor="#28292A" my={{lg:3,xs:1}} pb={2}>
            <Container maxWidth='lg'>
                <Stack direction={{ xs: 'column', sm: 'column', lg: 'row' }} spacing={1} justifyContent='center' alignItems='center'>
                    <Box flex={1}>
                        <Image src={Doctor} alt="Doctor" height="500px" width="100%" />
                    </Box>
                    <Box>
                        <Typography color="#6ACECE" py={2}>
                            APPOINTMENT
                        </Typography>
                        <Typography color="#fff" variant='h3' component='h2' py={3}>
                            Make an appointment
                            Today
                        </Typography>
                        <Typography color="#fff"  py={{lg:5,xs:2}}>
                            It is a long established fact that a reader will be distractedby the readable
                            content of a page when looking at its
                        </Typography>
                        <Button variant="contained">GET APPOINTMENT</Button>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default Appointment;