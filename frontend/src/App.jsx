import Home from "./pages/Home";
import "./App.css";
import CountryCodeKey from "./components/countryCode";

function App() {
  console.warn(CountryCodeKey);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
