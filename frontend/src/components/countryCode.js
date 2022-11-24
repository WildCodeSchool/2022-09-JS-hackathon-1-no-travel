import countryCodes from "country-codes-list";

const CountryCodesObject = countryCodes.customList(
  "countryCode",
  "{countryCode}"
);

const CountryCodeKey = Object.keys(CountryCodesObject);

export default CountryCodeKey;
