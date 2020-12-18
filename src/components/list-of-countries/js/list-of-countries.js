/* eslint-disable prefer-const */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */

// import Page from '../../../index.js'
import create from "../../create";
import getData from "../../api";
import сhart from "../../chart/js/chart";
import Map from "../../map/js/map";

const summary = "summaryRoute";
const tableBlock = document.querySelector(".countries-table");
const totalCases = document.querySelector(".total-cases");
const last = document.querySelector(".last-update");
const search = document.querySelector(".search");
const countryDay = "countryDayOneRoute";
const deathsButton = create("div", "deaths-button", null, totalCases);
const recoverButton = create("div", "recovered-button", null, totalCases);
const totalButton = create("div", "total-button-hidden", null, totalCases);
const totalHeader = create("div", "total-header", null, totalCases);
last.innerText = "Last Update: ";
const lastUpdate = create("div", "last-update-block", null, last);
const searchInput = create("input", null, null, search, ["type", "text"], ["id", "search"], ["placeholder", "Search for a Country"]);
const tableHtader = create("table", null, null, search);
const trh = create("tr", null, null, tableHtader);
const thCountry = create("th", "th-country", "Country", trh);
const thTotal = create("th", "th-data", "Total", trh);
const table = create("table", null, null, tableBlock);
const total = create("div", "total", null, totalCases);

let searchTerm = "";
let cases = 0;
let dataSummary = {};

function changeCases(e) {
  let requestTotal = e.path[0].className;
  switch (requestTotal) {
    case "recovered-button":
      cases = 2;
      recoverButton.className = "hidden-button";
      deathsButton.className = "deaths-button";
      totalButton.className = "total-button";
      break;
    case "deaths-button":
      cases = 1;
      recoverButton.className = "recovered-button";
      deathsButton.className = "hidden-button";
      totalButton.className = "total-button";
      break;
    default:
      cases = 0;
      totalButton.className = "hidden-button";
      recoverButton.className = "recovered-button";
      deathsButton.className = "deaths-button";
  }
  totalCases.className = `total-cases ${requestTotal}`;
  table.innerHTML = "";

  listOfCountries(dataSummary);
}

export default function listOfCountries(summaryData) {
  dataSummary = summaryData;
  const totalData = [`${dataSummary.Global.TotalConfirmed}`, `${dataSummary.Global.TotalDeaths}`, `${dataSummary.Global.TotalRecovered}`];
  const totalHeaderData = ["Total cases", "Total deaths", "Total recover"];
  if (!dataSummary) dataSummary = JSON.parse(localStorage.getItem(summary));
  const lastUpdateDate = new Date(dataSummary.Date);
  lastUpdate.innerText = `${lastUpdateDate.toLocaleString().slice(0, 17)}`;
  const tr = {};
  let td = {};
  totalHeader.innerText = totalHeaderData[cases];
  total.innerText = totalData[cases].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  dataSummary.Countries.forEach((country, i) => {
    const viewCountry = [`${country.TotalConfirmed}`, `${country.TotalDeaths}`, `${country.TotalRecovered}`];
    tr[i] = create("tr", `country-row ${country.Slug}`, null, table, ["data", country.Slug]);
    const flagImg = create("img", `country-flag ${country.Slug}`, null, null,
      ["src", `https://www.countryflags.io/${country.CountryCode}/flat/24.png`], ["alt", `${country.Slug} flag`]);
    td.Flag = create("td", `flag ${country.Slug}`, [flagImg], tr[i]);
    td.Country = create("td", `country ${country.Slug}`, country.Country, tr[i]);
    td.Total = create("td", "total", viewCountry[cases].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "), tr[i]);
    tr[i].addEventListener("click", (e) => { getData(countryDay, e.path[1].className.slice(12)); });
  });
}


thCountry.addEventListener("click", () => { });

thTotal.addEventListener("click", () => { });

recoverButton.addEventListener("click", (e) => { changeCases(e); });
deathsButton.addEventListener("click", (e) => { changeCases(e); });
totalButton.addEventListener("click", (e) => { changeCases(e); });

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  listOfCountries(dataSummary);
});
