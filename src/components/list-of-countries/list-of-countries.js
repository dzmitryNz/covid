/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */

// import Page from '../../../index.js'
import create from "../../create";
import getData from "../../api";
import сhart from "../../chart/js/chart";
import Map from "../../map/js/map";

const summary = "summaryRoute";
const tableBlock = document.querySelector(".countries-table");
const total = document.querySelector(".total-cases");
const last = document.querySelector(".last-update");
const countryDay = "countryDayOneRoute";


function changeCases(e) {
  console.log(e.path[0].className);
}

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function listOfCountries(summaryData) {
  let dataSummary = summaryData;
  if (!dataSummary) dataSummary = JSON.parse(localStorage.getItem(summary));
  const lastUpdateDate = new Date(dataSummary.Date);
  const tr = {};
  let td = {};
  let flagsUrl = {};
  dataSummary = JSON.parse(localStorage.getItem(summary));
  const totalHeader = create("div", "total-header", "TotalCases", total);
  const deathsButton = create("div", "deaths-button", null, total);
  const totalCases = create("div", "total", `${dataSummary.Global.TotalConfirmed}`, total);
  const recoverButton = create("div", "recover-button", null, total);
  last.innerText = "Last Update: ";
  const lastUpdate = create("div", "last-update-block", `${lastUpdateDate.toLocaleString().slice(0, 17)}`, last);
  const table = create("table", null, null, tableBlock);
  const trh = create("tr", null, null, table);
  const thCountry = create("th", "th-country", "Country", trh);
  const thTotal = create("th", "th-data", "Total", trh);
  const thDeath = create("th", null, "Deaths");
  const thRecovered = create("td", null, "Recovered");
  // let th = create('th', 'table-header', [thTotal, thDeath, thRecovered, thCountry], table);
  dataSummary.Countries.forEach((country, i) => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.download = "img.jpg";
    link.href = `https://www.countryflags.io/${country.CountryCode}/flat/24.png`;
    link.click();
    // console.log(country.Country, country.NewConfirmed)
    tr[i] = create("tr", `country-row ${country.Slug}`, null, table, ["data", country.Slug]);
    const flagImg = create("img", `country-flag ${country.Slug}`, null, table, ["src", `https://www.countryflags.io/${country.CountryCode}/flat/24.png`], ["alt", `${country.Slug} flag`]);
    td = create("td", `flag ${country.Slug}`, [flagImg], tr[i]);
    td = create("td", `country ${country.Slug}`, country.Country, tr[i]);
    td = create("td", "total-confirmed", String(country.TotalConfirmed), tr[i]);
    // td = create('td', 'total-deths', String(country.TotalDeaths), tr[i]);
    // td = create('td', 'total-recovered', String(country.TotalRecovered), tr[i]);
    flagsUrl[country.Slug] = `https://www.countryflags.io/${country.CountryCode}/flat/24.png`;
    tr[i].addEventListener("click", (e) => {
      // console.log(e.path[1].className.slice(12));
      getData(countryDay, e.path[1].className.slice(12));
    });
  });
  localStorage.setItem("flags", JSON.stringify(flagsUrl));
  thCountry.addEventListener("click", () => { });
  thTotal.addEventListener("click", () => { });
  recoverButton.addEventListener("click", (e) => { changeCases(e); });
  deathsButton.addEventListener("click", (e) => { changeCases(e); });
}
