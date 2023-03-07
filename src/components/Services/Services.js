import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Image, ServiceContainer, ServiceStack } from '../../Styles/AllStyles';
import cavity from '../../images/cavity.png';
import fluoride from '../../images/fluoride.png';
import whitening from '../../images/whitening.png';

const Services = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant='h4' component='h6' color='#5FC7C7' textAlign='center' fontWeight='bold'>
                OUR SERVICES
            </Typography>
            <Typography variant='h4' component='h6' textAlign='center' fontWeight='normal'>
                Services We Provide
            </Typography>
            <ServiceStack direction={{ xs: 'column', sm: 'column', lg: 'row' }} spacing={1}>
                <ServiceContainer flex={1}>
                    <Image src={fluoride} alt='Service' />
                    <Typography component='p' variant="h6">
                        Fluoride Treatment
                    </Typography>
                    <Typography component='p' color="#B4B4B4">
                        Lorem Ipsum is simply dummy
                        printing and typesetting indust
                        Ipsum has been the
                    </Typography>
                </ServiceContainer>
                <ServiceContainer flex={1}>
                    <Image src={cavity} alt='Service' />
                    <Typography component='p' variant="h6">
                        Teeth Whitening
                    </Typography>
                    <Typography component='p' color="#B4B4B4">
                        Lorem Ipsum is simply dummy
                        printing and typesetting indust
                        Ipsum has been the
                    </Typography>
                </ServiceContainer>
                <ServiceContainer flex={1}>
                    <Image src={whitening} alt='Service' />
                    <Typography component='p' variant="h6">
                        Cavity Filling
                    </Typography>
                    <Typography component='p' color="#B4B4B4">
                        Lorem Ipsum is simply dummy
                        printing and typesetting indust
                        Ipsum has been the
                    </Typography>
                </ServiceContainer>
            </ServiceStack>

        </Container>
    );
};

export default Services;