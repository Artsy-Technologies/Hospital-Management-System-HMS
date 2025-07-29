import React from "react";
import Login from "./Login";
// import Welcome from "./Welcome";
import "./Login.css";
import "./index.css";


import DoctorRoutes from "./routes/DoctorRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import PatientRoutes from "./routes/PatientRoutes";

import NotFound from "./pages/PageNotFound";


import { Routes, Route } from "react-router-dom";
import AppoitmentRoutes from "./routes/AppoitmentRoutes";

function App() {
  return (

    <Routes>
      {/* Landing route first with a wildcard to match its children */}

      {/* Authentication route */}
      <Route path="/login" element={<Login />} />

      {/* Welcome route (if applicable)*/}
      {/* <Route path="/welcome/*" element={<Welcome />} /> */}

      {/* Doctor routes*/}
      <Route path="/doctor/*" element={<DoctorRoutes />} />

      {/* Admin routes*/}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* Patient routes*/}
      <Route path="/patient/*" element={<PatientRoutes />} />
      {/* Appoitment */}
      <Route path="/appoitment/*" element={<AppoitmentRoutes />} />

      {/* 404 - fallback*/}
      <Route path="*" element={<NotFound />} />
    </Routes>
 

   
  )
};


export default App;
