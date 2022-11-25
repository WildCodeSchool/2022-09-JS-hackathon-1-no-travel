import axios from "axios";

const CountryCodeKey = [
  "FR",
  "GB",
  "ES",
  "DK",
  "DE",
  "CH",
  "IT",
  "LT",
  "EE",
  "SE",
  "NO",
  "RO",
  "HR",
  "BG",
  "GR",
];
async function getRandomCam() {
  const randomCountry =
    CountryCodeKey[Math.floor(Math.random() * CountryCodeKey.length)];
  const randomId = {
    id: "",
  };
  function saveData(data) {
    randomId.id = data;
  }
  try {
    await axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/property=live/country=${randomCountry}?key=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((result) =>
        saveData(
          result.data.result.webcams[
            Math.floor(Math.random() * result.data.result.webcams.length)
          ].id
        )
      );
  } catch (err) {
    console.error(err);
  }
  return randomId.id;
}
export default getRandomCam;
