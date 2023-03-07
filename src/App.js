
import { Box } from "@mui/material";
import BoxTopCard from "./components/BoxTopCard/BoxTopCard";
import Services from "./components/Services/Services";
import TopLanding from "./components/TopLanding/TopLanding";

function App() {
  return (
    <Box>
      <TopLanding />
      <BoxTopCard />
      <Services />
    </Box>
  );
}

export default App;
