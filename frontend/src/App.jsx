import React, { useState } from "react";
import getRandomCam from "@components/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebCam from "@components/WebCam";
import HomePage from "./components/HomePage/HomePage";
import Choice from "./pages/Choice";
import "./App.css";

function App() {
  const [cam, setCam] = useState({
    id: "",
    city: "",
  });
  React.useEffect(() => {
    async function getId() {
      setCam(await getRandomCam());
    }
    getId();
  }, []);
  return (
    <Router>
      <div className="home">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/random" element={<WebCam cam={cam} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
