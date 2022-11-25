import React from "react";
import ButtonsHome from "./ButtonsHomeRandom";
import LogoHome from "./LogoHome";
import "../../App.css";
import backgroundImage from "../../assets/backgroundHome.jpg";

function HomePage() {
  return (
    <div
      className="logobuttons"
      style={{
        background: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LogoHome />
      <ButtonsHome />
    </div>
  );
}

export default HomePage;
