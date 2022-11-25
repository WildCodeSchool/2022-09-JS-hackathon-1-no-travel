import React from "react";
import ButtonsHome from "./ButtonsHomeRandom";
import LogoHome from "./LogoHome";
import "../../App.css";

function HomePage() {
  return (
    <div className="logobuttons">
      <LogoHome />
      <ButtonsHome />
    </div>
  );
}

export default HomePage;
