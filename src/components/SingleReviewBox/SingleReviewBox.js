import { ImageAspectRatioOutlined } from '@mui/icons-material';
import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Image, TestimonialBox } from '../../Styles/AllStyles';

const SingleReviewBox = ({ review }) => {
    const { patientName, description, patientLocation, imageLink } = review;;
    return (
        <TestimonialBox flex={1}>
            <Typography>
                {
                    description
                }
            </Typography>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Image src={imageLink}  alt="avatar"  />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={patientName} secondary={patientLocation} />
            </ListItem>
        </TestimonialBox>
    );
};

export default SingleReviewBox;