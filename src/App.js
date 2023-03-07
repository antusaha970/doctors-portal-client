
import { Box } from "@mui/material";
import BoxTopCard from "./components/BoxTopCard/BoxTopCard";
import DentalCare from "./components/DentalCare/DentalCare";
import Services from "./components/Services/Services";
import TopLanding from "./components/TopLanding/TopLanding";

function App() {
  return (
    <Box>
      <TopLanding />
      <BoxTopCard />
      <Services />
      <DentalCare />
    </Box>
  );
}

export default App;
