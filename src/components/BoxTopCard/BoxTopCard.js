import { AccessTime, Call, LocationOn } from '@mui/icons-material';
import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { BoxTopContainer, BoxTopStack } from '../../Styles/AllStyles';

const BoxTopCard = () => {
    return (
        <Container maxWidth="lg" >
            <BoxTopStack direction={{ xs: 'column', sm: 'column', lg: 'row' }} gap={2}>
                <BoxTopContainer bgcolor="#1CC7C1" flex={1}>
                    <ListItem>
                        <ListItemAvatar>
                                <AccessTime fontSize='large'/>
                        </ListItemAvatar>
                        <ListItemText primary="Opening Hours" secondary="10AM - 6PM"/>
                    </ListItem>
                </BoxTopContainer>
                <BoxTopContainer flex={1} bgcolor="#3A4256">
                    <ListItem>
                        <ListItemAvatar>
                                <LocationOn fontSize='large' />
                        </ListItemAvatar>
                        <ListItemText primary="Visit our location" secondary="Brooklyn, NY 10036, United States" />
                    </ListItem>
                </BoxTopContainer>
                <BoxTopContainer flex={1} bgcolor="#1CC7C1">
                    <ListItem>
                        <ListItemAvatar>
                                <Call fontSize='large'/>
                        </ListItemAvatar>
                        <ListItemText primary="Contact us now" secondary="+000 123 456789" />
                    </ListItem>
                </BoxTopContainer>
            </BoxTopStack>
        </Container>
    );
};

export default BoxTopCard;