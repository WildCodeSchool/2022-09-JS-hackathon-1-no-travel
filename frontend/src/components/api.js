import axios from "axios";

const CountryCodeKey = [];

function getRandomCam() {
  const randomCountry =
    CountryCodeKey[Math.floor(Math.random() * CountryCodeKey.length)];
  axios
    .get(
      `https://api.windy.com/api/webcams/v2/list/property=live/country=${randomCountry}?key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((result) => {
      return result.data.result.webcams[
        Math.floor(Math.random() * result.data.result.webcams.length)
      ];
    });
}

export default getRandomCam;
