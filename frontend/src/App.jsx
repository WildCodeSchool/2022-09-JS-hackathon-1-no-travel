import React, { useState } from "react";
import getRandomCam from "@components/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebCam from "@components/WebCam";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";

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
      <div className="home">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/random" element={<WebCam camId={camId} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
