import React, { useState } from "react";
import Firstpage from "./components/firstpage";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import PatientsFolders from "./components/PatientsFolders";
function App() {
  console.log(window.ipcRenderer);
  const pathname = window.location.pathname
  return (
    <div >
    {pathname === "/dashboard" || pathname ==="/patientsfolders" ? <Navbar/> : null}
    <div className=" w-screen h-screen bg-blue-200 flex justify-center items-center flex-col gap-[5em] font-poppins">
      <Router>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patientsfolders" element={<PatientsFolders />} />
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
