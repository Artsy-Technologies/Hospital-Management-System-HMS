import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

import viteLogo from "/vite.svg";
import videoCamera from "../assets/video-camera.png";
import Bill from "../assets/billing-machine.png";
import Checkup from "../assets/medical-checkup.png";
import Profile from "../assets/profile-icon.png.jpg";
import "./Dashboard.css"
import videoCall from "../Components/VideoCall.jsx";
import Billing from "../Components/Billing.jsx";


function Dashboard() {
  return (

    
    <div className="container">

      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <h1>Patient Panel</h1>
        </div>
        <div className="nav-menu">
          <Link to="/">
          <div className="nav-item active">
            <i className="fas fa-chart-pie"></i>
            <span>Profile</span>
          </div>
          </Link>

          <Link to="/videoCall">
            <div className="nav-item">
              <i className="fas fa-users"></i>
              <span>
                {" "}
                <img className="video-icon" src={videoCamera} />
                Video-Call Appointment
              </span>
            </div>
          </Link>

          <Link to="/Billing">
            <div className="nav-item">
              <i className="fas fa-box"></i>
              <span>
                <img className="bill-icon" src={Bill} />
                Billing and Payments
              </span>
            </div>
          </Link>

          <Link to="/MedicalHist">
            <div className="nav-item">
              <i className="fas fa-shopping-cart"></i>
              <span>
                <img className="bill-icon" src={Checkup} />
                Medical History
              </span>
            </div>
          </Link>

          <Link to="/Prescription">
            <div className="nav-item">
              <i className="fas fa-shopping-cart"></i>
              <span>
                <img className="bill-icon" src={Checkup} />
               Digital Prescription
              </span>
            </div>
          </Link>
        </div>{" "}
        {/*nav-menu end*/}
      </div>
      {/*Search-bar end*/}

      
      
    </div>
    
  );
}
export default Dashboard;
