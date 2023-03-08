import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppointmentPage from "./components/AppointmentPage/AppointmentPage";
import Home from "./components/Home/Home";
import Login from "./components/LoginPage/Login/Login";
import NotMatched from "./components/NotMatched/NotMatched";

export const DateContext = createContext();
export const UserContext = createContext();

function App() {

  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  return (
    <DateContext.Provider value={[date, setDate]}>
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookAppointment" element={<AppointmentPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotMatched />} />
        </Routes>
      </UserContext.Provider>
    </DateContext.Provider>
  );
}

export default App;
