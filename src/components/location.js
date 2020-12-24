/* eslint-disable no-unused-vars */
import create from "./create";

let flagImgLoc = {};

function setHeaderLocation(country, summaryData) {
  // console.log("Country: ", country, country.toLowerCase());
  const countryData = summaryData.Countries.filter(a => a.Slug.includes(country.toLowerCase()))[0];
  // console.log(countryData);
  const headerYourLocation = document.querySelector(".your-location");
  const locationIcon = create("i", "material-icons location", "my_location", headerYourLocation);
  if (country === "Belarus") flagImgLoc = create("img", `country-flag ${countryData.Slug}`, null, null, ["src", "./images/belarus.png"], ["alt", `${countryData.Slug} flag`]);
  else { flagImgLoc = create("img", `country-flag ${countryData.Slug}`, null, null, ["src", `https://www.countryflags.io/${countryData.CountryCode}/flat/24.png`], ["alt", `${countryData.Slug} flag`]); }
  const flag = create("div", `flag ${countryData.Slug}`, [flagImgLoc], headerYourLocation);
  const locationCountry = create("div", "location-country", `${country}`, headerYourLocation);
  const locationText = create("div", "location", "Total:", headerYourLocation);
  const locationConfirmed = create("div", "location-confirmed", `${countryData.TotalConfirmed}`, headerYourLocation);
  const locationRecovered = create("div", "location-recovered", ` ${countryData.TotalRecovered}`, headerYourLocation);
  const locationDeaths = create("div", "location-deaths", ` ${countryData.TotalDeaths} `, headerYourLocation);
  const locationNewText = create("div", "location", "New:", headerYourLocation);
  const locationNewConfirmed = create("div", "location-confirmed", `${countryData.NewConfirmed}`, headerYourLocation);
  const locationNewRecovered = create("div", "location-recovered", `${countryData.NewRecovered}`, headerYourLocation);
  const locationNewDeaths = create("div", "location-deaths", ` ${countryData.NewDeaths} `, headerYourLocation);
}

async function getLocation(summaryData) {
  fetch("https://extreme-ip-lookup.com/json/")
    .then(res => res.json())
    .then((response) => {
      localStorage.setItem("location", response.country);
      setHeaderLocation(response.country, summaryData);
    })
    .catch((data, status) => {
      console.log("Request failed", status, data);
    });
}

export default getLocation;

// https://ip-api.com/json
