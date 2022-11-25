import React, { useState } from "react";
import getRandomCam from "@components/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebCam from "@components/WebCam";
import HomePage from "./components/HomePage/HomePage";
import Choice from "./pages/Choice";
import "./App.css";
import backgroundImage from "./assets/backgroundHome.jpg";

function App() {
  const [camId, setCamId] = useState("");
  React.useEffect(() => {
    async function getId() {
      setCamId(await getRandomCam());
    }
    getId();
  }, []);
  return (
    <Router>
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/random" element={<WebCam camId={camId} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
