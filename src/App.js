import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ScrollToTop from "./Components/ScrollToTop";
import AddDocter from "./Components/Doctors/Add Docter/AddDocter";
import ListOfAllDocter from "./Components/Doctors/ListOfAllDocter/ListOfAllDocter";
import AddPatient from "./Components/Patients/AddPatient/AddPatient";
import PatientsList from "./Components/Patients/PatientsList/PatientsList";
import Login from "./Components/Login/Login";
import LogOut from "./Components/Login/LogOut";
import ViewReport from "./Components/GenerateReport/ViewReport"
import GenerateReport from "./Components/GenerateReport/GenerateReport";
import UserForm from "./Components/GenerateReport/UserForm"
import Details from "./Components/GenerateReport/Details";
import ReportList from "./Components/GenerateReport/ReportList";
import TodayPatient from "./Components/Patients/PatientsList/TodayPatient";
import RecentReport from "./Components/GenerateReport/RecentReport";
import DoctorInfo from "./Components/Doctors/DoctorInfo"
import UpdateDoctor from "./Components/Doctors/UpdateDoctor/UpdateDoctor";
import PrintReport from "./Components/GenerateReport/PrintReport";
import PatientDetail from "./Components/Patients/PatientDetail/PatientDetail";
import Appointment from "./Components/Appointment/Appointment";
import AppointmentList from "./Components/Appointment/AppointmentList";
import TodaysAppointment from "./Components/Appointment/TodaysAppointment";
import ViewAppointment from "./Components/Appointment/ViewAppointment";
function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Add_Doctor" element={<AddDocter />} />
      <Route path="/List_Of_Doctors" element={<ListOfAllDocter />} />
      <Route path="/Add_Patient" element={<AddPatient />} />
      <Route path="/Patients_List" element={<PatientsList />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/View_report/:id" element={<ViewReport />} />
      <Route path="/Generate_new_report" element={<GenerateReport/>} />
      <Route path="/userform" element={<UserForm/>} />
      <Route path="/details" element={<Details/>} />
      <Route path="/Report_List" element={<ReportList/>} />
      <Route path="/Today_Patient" element={<TodayPatient/>} />
      <Route path="/recent_report" element={<RecentReport/>} />
      <Route path="/Doctor_profile/:id" element={<DoctorInfo/>} />
      <Route path="/update_doctor/:id" element={<UpdateDoctor/>} />
      <Route path="/print/:id" element={<PrintReport/>} />
      <Route path="/patient_detail/:id" element={<PatientDetail/>} />
      <Route path="/New_appointment" element={<Appointment/>} />
      <Route path="/All_appointment" element={<AppointmentList/>} />
      <Route path="/Todays_appointment" element={<TodaysAppointment/>} />
      <Route path="/viw_appointment/:id" element={<ViewAppointment/>} />
    </Routes>
  </BrowserRouter>
    </>
  );
};

export default App;