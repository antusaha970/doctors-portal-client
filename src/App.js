
import { Box } from "@mui/material";
import Appointment from "./components/Appointment/Appointment";
import BoxTopCard from "./components/BoxTopCard/BoxTopCard";
import DentalCare from "./components/DentalCare/DentalCare";
import OurDoc from "./components/OurDoc/OurDoc";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import TopLanding from "./components/TopLanding/TopLanding";

function App() {
  return (
    <Box>
      <TopLanding />
      <BoxTopCard />
      <Services />
      <DentalCare />
      <Appointment />
      <Testimonial />
      <OurDoc />
    </Box>
  );
}

export default App;
