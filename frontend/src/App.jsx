

import React from "react";
import Dashboard from "./PagesRouter/Dashboard.jsx";

import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import VideoCall from "./Components/VideoCall.jsx"; // Ensure correct capitalization
import Billing from "./Components/Billing.jsx";
import Profile from "./Components/Profile.jsx";
import MedicalHist from "./Components/MedicalHist.jsx";
import PHeader from "./Components/PHeader.jsx";
import Digital from "./Components/Digital_pres.jsx";

function App() {
  return (
    <BrowserRouter>

      <div className="d-flex">
        <div className="columnAuto">
          <Dashboard />
        </div>
        <div>
         
       
          <Routes>
          <Route path="/" element={<Profile/>} />
            <Route path="/videoCall" element={<VideoCall />} />{" "}
            {/* Correct capitalization */}
            <Route path="/Billing" element={<Billing />} />
            <Route path="/medicalHist" element={<MedicalHist />} />
            <Route path="/Prescription" element={<Digital />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
