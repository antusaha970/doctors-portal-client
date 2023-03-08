import { Box, Button, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import NavLinks from '../NavLinks/NavLinks';
import chair from '../../images/chair.png';
import './TopLanding.css';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DateContext } from '../../App';



const TitleTop = styled(Typography)(({ theme }) => ({
    fontWeight: '400',
    fontSize: '45px',
}))


const TopLanding = ({ page }) => {
    const [isAppointMentPage, setIsAppointMentPage] = useState(false);
    const [date,setDate] = useContext(DateContext);
    useEffect(() => {
        setIsAppointMentPage(page);
    }, [])
    return (
        <Box className="bg-top">
            <Container maxWidth="lg">
                <NavLinks></NavLinks>
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} sx={{ mt: { lg: '150px', xs: '80px' } }}>
                    {
                        // For Home Page
                        !isAppointMentPage && <Box flex={1} sx={{ pb: { xs: 1, sm: 1 } }}>
                            <TitleTop variant='h1' component='h1'>
                                Your New Smile
                                Starts Here
                            </TitleTop>
                            <Typography variant='p' component='p'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                            </Typography>
                            <Link to='/bookAppointment' ><Button variant='contained' >Get Appointment</Button></Link>
                        </Box>
                    }
                    {
                        // For Appointment Page
                        isAppointMentPage &&
                        <Box flex={1} sx={{ pb: { xs: 1, sm: 1 } }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar onChange={(newValue) =>{
                                    setDate(newValue.$d);
                                }}  />
                            </LocalizationProvider>
                        </Box>
                    }
                    <Box flex={1}>
                        <img src={chair} alt="landing chair" className='img-top' />
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default TopLanding;