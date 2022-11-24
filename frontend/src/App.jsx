import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const CountryCodeKey = ["FR", "MG"];
  console.warn(CountryCodeKey);
  const [cam, setCam] = useState({});
  React.useEffect(() => {
    const fetchCamera = async () => {
      const randomCountry =
        CountryCodeKey[Math.floor(Math.random() * CountryCodeKey.length)];
      axios
        .get(
          `https://api.windy.com/api/webcams/v2/list/country=${randomCountry}?key=${
            import.meta.env.VITE_API_KEY
          }`
        )
        .then((result) => {
          setCam(result.data.result.webcams);
        });
    };
    fetchCamera();
  }, []);
  console.warn(cam);

  return (
    <div className="App">
      <embed
        type="video/webm"
        src="https://webcams.windy.com/webcams/stream/1181820895"
        width={700}
        height={800}
      />
    </div>
  );
}

export default App;
