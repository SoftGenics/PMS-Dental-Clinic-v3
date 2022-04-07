import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ScrollToTop from "./Components/ScrollToTop";
import NavbarMenu from "./Components/Navbar/NavbarMenu";
import AddDocter from "./Components/Doctors/Add Docter/AddDocter";
import ListOfAllDocter from "./Components/Doctors/ListOfAllDocter/ListOfAllDocter";
import AddPatient from "./Components/Patients/AddPatient/AddPatient";

function App() {

  return (
    <>
      <BrowserRouter>
      <Sidebar />
      <NavbarMenu />
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Add_Doctor" element={<AddDocter />} />
      <Route path="/List_Of_Doctors" element={<ListOfAllDocter />} />
      <Route path="/Add_Patient" element={<AddPatient />} />
    </Routes>
  </BrowserRouter>
    </>
  );
};

export default App;
