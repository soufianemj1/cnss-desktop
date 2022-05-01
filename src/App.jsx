import React, { useState } from "react";
import Firstpage from "./components/firstpage";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Login from "./components/login";
import Dashboard  from "./components/Dashboard";
function App() {
  console.log(window.ipcRenderer);
  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center flex-col gap-[5em] font-poppins">
      <Router>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
