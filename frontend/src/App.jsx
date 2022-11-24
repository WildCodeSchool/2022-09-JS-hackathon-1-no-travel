import HomePage from "./components/HomePage/HomePage";
import "./App.css";

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
    </div>
  );
}

export default App;
