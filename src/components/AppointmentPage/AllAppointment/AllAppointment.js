import { Container, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { DateContext } from '../../../App';
import { appointmentFakeData } from '../../../fakeData/fakeDatas';
import SingleAppointmentBox from '../SingleAppointmentBox/SingleAppointmentBox';

const AllAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [date, setDate] = useContext(DateContext);


    useEffect(() => {
        setAppointments(appointmentFakeData);
    },[]);

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    return (
        <Container maxWidth='lg'>
            <Typography py={3} variant='h4' component='h2' textAlign="center" color="#1CC7C1">
                Available Appointments on {
                    date.toLocaleDateString("en-US",dateOptions)
                }
            </Typography>
            <Stack direction={{xs:'column',sm:'column',md:'row',lg:'row'}} gap={3} flexWrap={'wrap'} rowGap={5} >
                {
                    appointments?.map((appointment, index) => <SingleAppointmentBox appointmentDetails={appointment} key={index*20}></SingleAppointmentBox>)
                }
            </Stack>
        </Container>
    );
};

export default AllAppointment;