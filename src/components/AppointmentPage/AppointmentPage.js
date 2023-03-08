import React from 'react';
import Footer from '../Footer/Footer';
import TopLanding from '../TopLanding/TopLanding';
import AllAppointment from './AllAppointment/AllAppointment';

const AppointmentPage = () => {
    return (
        <>
            <TopLanding page={true} />
            <AllAppointment />
            <Footer />
        </>
    );
};

export default AppointmentPage;