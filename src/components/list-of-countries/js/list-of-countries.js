// import "./style.css";
import Page from '../../../index.js'
import create from '../../create.js'

const summary = 'summaryRoute';
let blockCountriesList = document.querySelector('.countries-list');
let table = document.querySelector('.countries-table');
let totalCases = document.querySelector('.total-cases');
let lastUpdate = document.querySelector('.last-update');

export default function listOfCountries(summaryData) {
  if (!summaryData) summaryData = JSON.parse(localStorage.getItem(summary));
  let lastUpdateDate = new Date(summaryData.Date);
  let tr = {};
  let td = {};
  summaryData = JSON.parse(localStorage.getItem(summary));
  totalCases.innerText = `TotalCases: ${summaryData.Global.TotalConfirmed}`;
  lastUpdate.innerText = `Last Update: ${lastUpdateDate.toLocaleString()}}`;
  let thCountry = create('td', null, 'Country', table);
  let thTotal = create('td', null, 'Total', table);
  let thDeath = create('td', null, 'Deaths');
  let thRecovered = create('td', null, 'Recovered');
  // let th = create('th', 'table-header', [thTotal, thDeath, thRecovered, thCountry], table);
  summaryData.Countries.forEach((country, i) => {
    // console.log(country.Country, country.NewConfirmed)
    tr[i] = create('tr', 'country-row', null, table);
    td = create('td', 'country', country.Country, tr[i]);
    td = create('td', 'total-confirmed', String(country.TotalConfirmed), tr[i]);
    // td = create('td', 'total-deths', String(country.TotalDeaths), tr[i]);
    // td = create('td', 'total-recovered', String(country.TotalRecovered), tr[i]);
    tr[i].addEventListener('click', () => { });
  })
  thCountry.addEventListener('click', () => { });
  thTotal.addEventListener('click', () => { });
}