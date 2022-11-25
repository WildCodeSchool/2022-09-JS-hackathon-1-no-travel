import WebCam from "@components/WebCam";
import { useState } from "react";

const countries = [
  { name: "France", camId: 1357598450 },
  { name: "Allemagne", camId: 1357598450 },
];

function Choice() {
  const [countryName, setCountryName] = useState("");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="choice">Où tu vas ?</label>
        <input
          onChange={(event) => {
            setCountryName(event.target.value);
          }}
          value={countryName}
          list="choice-values"
          id="choice"
        />
        <datalist id="choice-values">
          {countries.map((country) => (
            <option key={country.camId} value={country.name}>
              {country.name}
            </option>
          ))}
        </datalist>
      </form>
      {countryName !== "" && (
        <WebCam
          camId={
            countries.find((element) => element.name === countryName).camId
          }
        />
      )}
    </>
  );
}

export default Choice;
