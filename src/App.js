import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppointmentPage from "./components/AppointmentPage/AppointmentPage";
import Home from "./components/Home/Home";
import NotMatched from "./components/NotMatched/NotMatched";

export const DateContext = createContext();

function App() {

  const [date, setDate] = useState(new Date());

  return (
    <DateContext.Provider value={[date, setDate]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookAppointment" element={<AppointmentPage />} />
        <Route path="*" element={<NotMatched />} />
      </Routes>
    </DateContext.Provider>
  );
}

export default App;
