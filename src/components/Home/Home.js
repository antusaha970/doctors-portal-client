import React from 'react';
import { Box } from "@mui/material";
import TopLanding from "../TopLanding/TopLanding";
import BoxTopCard from "../BoxTopCard/BoxTopCard";
import Services from "../Services/Services";
import DentalCare from "../DentalCare/DentalCare";
import Appointment from "../Appointment/Appointment";
import Testimonial from "../Testimonial/Testimonial";
import OurDoc from "../OurDoc/OurDoc";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <>
            <Box>
                <TopLanding page={false} />
                <BoxTopCard />
                <Services />
                <DentalCare />
                <Appointment />
                <Testimonial />
                <OurDoc />
                <ContactUs />
                <Footer />
            </Box>
        </>
    );
};

export default Home;