import { Route, Routes } from "react-router-dom";
import {
  About,
  Appointment,
  Contact,
  Doctors,
  Home,
  Login,
  MyAppointment,
  MyProfile,
} from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <>
      <div className="mx-4 sm:mx-[10%]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/doctors/:speciality" element={<Doctors />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/my-appointments" element={<MyAppointment />}></Route>
          <Route path="/appointment/:docId" element={<Appointment />}></Route>
          <Route path="/my-profile" element={<MyProfile />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
