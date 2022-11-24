import "./App.css";
import React from "react";

function App() {
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
