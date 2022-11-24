import countryCodes from "country-codes-list";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const CountryCodesObject = countryCodes.customList(
    "countryCode",
    "{countryCode}"
  );
  const CountryCodeKey = Object.keys(CountryCodesObject);
  console.warn(CountryCodeKey);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
