import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import React from "react";
import WebCam from "./components/WebCam";

import backgroundImage from "./assets/backgroundHome.jpg";

function App() {
  return (
    <div
      className="home"
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
      <HomePage />
    <div className="App">
      <WebCam />
    </div>
  );
}

export default App;
