import { Button, Typography } from '@mui/material';

import React from 'react';
import { Link } from 'react-router-dom';
import { SingleAppointmentContainer } from '../../../Styles/AllStyles';

const SingleAppointmentBox = ({appointmentDetails}) => {
    const {name, availableSpace, time} = appointmentDetails;
    return (
        <SingleAppointmentContainer flex="25%" textAlign="center">
            <Typography variant="h5" color="#1CC7C1" >
                {
                    name
                }
            </Typography>
            <Typography>
                {
                    time
                }
            </Typography>
            <Typography variant="small" color="#8B8888" component="p" py={1}>
                {
                    availableSpace
                }
            </Typography>
            <Link to="/login"><Button variant="contained">BOOK APPOINTMENT</Button></Link>
        </SingleAppointmentContainer>
    );
};

export default SingleAppointmentBox;