import { Box, Button, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { Image } from '../../Styles/AllStyles';
import treatment from '../../images/treatment.png';

const DentalCare = () => {
    return (
        <Container maxWidth='lg'>
            <Stack direction={{ xs: 'column', sm: 'column', lg: 'row' }} spacing={1}>
                <Image src={treatment} alt="treatment" loading='lazy' flex={1} height="600px"/>
                <Box>
                    <Typography variant='h3' component='h3' fontWeight="normal" py={4}>
                        Exceptional Dental
                        Care, on Your Terms
                    </Typography>
                    <Typography variant='p' component='p' color="#B2B2B2" py={4}>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its
                        layout. The point of using Lorem Ipsumis that it has
                        a more-or-less normal distribution of letters,as opposed
                        to using ‘Content here, content here’, making it look like
                        readable English. Many desktop publishing packages
                        and web page
                    </Typography>
                    <Button variant='contained'>Learn More</Button>
                </Box>
            </Stack>
        </Container>
    );
};

export default DentalCare;