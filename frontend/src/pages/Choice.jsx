import WebCam from "@components/WebCam";
import { useState } from "react";

const countries = [
  { name: "Croatie", camId: 1627241943 },
  { name: "Allemagne", camId: 1299745209 },
  { name: "Autriche", camId: 1465822435 },
  { name: "Estonie", camId: 1660820510 },
  { name: "Gréce", camId: 1363670893 },
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
