/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable import/no-cycle */

import Properties from "../../properties";
import create from "../../create";
import getData from "../../api";

const summary = "summaryRoute";
const tableBlock = document.querySelector(".countries-table");
const totalCases = document.querySelector(".total-cases");
const lastUpdate = document.querySelector(".last-update");
const search = document.querySelector(".search");
const countryDay = "countryDayOneRoute";
const deathsButton = create("div", "deaths-button", null, totalCases);
const recoverButton = create("div", "recovered-button", null, totalCases);
const totalButton = create("div", "total-button-hidden", null, totalCases);
const searchInput = create("input", null, null, search, ["type", "text"], ["id", "search-counrty"], ["placeholder", "Search for a Country"]);
const total = create("div", "total", null, totalCases);
let countryTarget = "";

let searchExp = "";
let dataSummary = {};

function changeCases(e) {
  let requestTotal = e.path[0].className;
  switch (requestTotal) {
    case "recovered-button":
      Properties.cases = "TotalRecovered";
      recoverButton.className = "hidden-button";
      deathsButton.className = "deaths-button";
      totalButton.className = "total-button";
      break;
    case "deaths-button":
      Properties.cases = "TotalDeaths";
      recoverButton.className = "recovered-button";
      deathsButton.className = "hidden-button";
      totalButton.className = "total-button";
      break;
    default:
      Properties.cases = "TotalConfirmed";
      totalButton.className = "hidden-button";
      recoverButton.className = "recovered-button";
      deathsButton.className = "deaths-button";
  }
  totalCases.className = `total-cases ${requestTotal.split("-")[0]}`;
  listOfCountries(dataSummary);
}

export default function listOfCountries(summaryData) {
  dataSummary = summaryData;
  tableBlock.innerHTML = "";
  const totalData = { TotalConfirmed: `${dataSummary.Global.TotalConfirmed}`, TotalDeaths: `${dataSummary.Global.TotalDeaths}`, TotalRecovered: `${dataSummary.Global.TotalRecovered}` };
  const totalClass = { TotalConfirmed: "total", TotalDeaths: "total-deaths", TotalRecovered: "total-recovered" };
  if (!dataSummary) dataSummary = JSON.parse(localStorage.getItem(summary));
  const lastUpdateDate = new Date(dataSummary.Date);
  lastUpdate.innerText = `Last Update: ${lastUpdateDate.toLocaleString().slice(0, 17)}`;
  const tr = {};
  let td = {};
  total.innerText = totalData[Properties.cases].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  dataSummary.Countries.filter(a => a.Slug.includes(searchExp.toLowerCase()))
    .sort((a, b) => sortBy(a, b)).forEach((country, i) => {
      tr[i] = create("tr", `country-row ${country.Slug}`, null, tableBlock);
      const flagImg = create("img", `country-flag ${country.Slug}`, null, null,
        ["src", `https://www.countryflags.io/${country.CountryCode}/flat/24.png`], ["alt", `${country.Slug} flag`]);
      td.Flag = create("td", `flag ${country.Slug}`, [flagImg], tr[i]);
      td.Country = create("td", `country ${country.Slug}`, country.Country, tr[i]);
      td.Total = create("td", `${totalClass[Properties.cases]}`, `${country[Properties.cases]}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "), tr[i]);
      tr[i].addEventListener("click", (e) => { countryTarget = e.path[1].className.slice(12); getData(countryDay, countryTarget); Properties.country = countryTarget; });
    });
}

function sortBy(a, b) {
  return b[Properties.cases] - a[Properties.cases];
}

recoverButton.addEventListener("click", (e) => { changeCases(e); });
deathsButton.addEventListener("click", (e) => { changeCases(e); });
totalButton.addEventListener("click", (e) => { changeCases(e); });

searchInput.addEventListener("input", (e) => {
  searchExp = e.target.value;
  listOfCountries(dataSummary);
});
