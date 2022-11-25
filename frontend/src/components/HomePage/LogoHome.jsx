import React from "react";
import logo from "../../assets/logohome.png";
import "../../App.css";

function LogoHome() {
  return (
    <div className="logo-container">
      <img src={logo} alt="No Traveler Logo" className="logohomes" />
    </div>
  );
}

export default LogoHome;
