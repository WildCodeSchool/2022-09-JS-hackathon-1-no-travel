import WebCam from "@components/WebCam";
import { useState } from "react";

const countries = [
  { city: "Croatie", id: "1627241943" },
  { city: "Allemagne", id: "1299745209" },
  { city: "Autriche", id: "1465822435" },
  { city: "Estonie", id: "1660820510" },
  { city: "Gréce", id: "1363670893" },
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
            <option key={country.id} value={country.city}>
              {country.city}
            </option>
          ))}
        </datalist>
        <button type="button" onClick={() => setCountryName("")}>
          x
        </button>
      </form>
      <WebCam cam={countries.find((element) => element.city === countryName)} />
    </>
  );
}

export default Choice;
