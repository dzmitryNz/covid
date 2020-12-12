// import "./style.css";
import Page from '../../../index.js'
import create from '../../create.js'

const summary = 'summaryRoute';
let blockCountriesList = document.querySelector('.countries-list');

export default function listOfCountries(summaryData) {
  if (!summaryData) summaryData = JSON.parse(localStorage.getItem(summary));
  let lastUpdate = new Date(summaryData.Date);
  let tr = {};
  let td = {};
  summaryData = JSON.parse(localStorage.getItem(summary));
  let TatalCases = create('div', 'total-cases', `TotalCases: ${summaryData.Global.TotalConfirmed} Last Update: ${lastUpdate.toLocaleString()}`, blockCountriesList);
  let table = create('table', 'countries-table', null, blockCountriesList);
  let thCountry = create('td', null, 'Country');
  let thTotal = create('td', null, 'Total');
  let thDeath = create('td', null, 'Deaths');
  let thRecovered = create('td', null, 'Recovered');
  // let th = create('th', 'table-header', [thTotal, thDeath, thRecovered, thCountry], table);
  summaryData.Countries.forEach((country, i) => {
    console.log(country.Country, country.NewConfirmed)
    tr[i] = create('tr', 'country-row', null, table);
    td = create('td', 'country', country.Country, tr[i]);
    td = create('td', 'total-confirmed', String(country.TotalConfirmed), tr[i]);
    td = create('td', 'total-deths', String(country.TotalDeaths), tr[i]);
    td = create('td', 'total-recovered', String(country.TotalRecovered), tr[i]);
    tr[i].addEventListener('click', () => { });
  })
  thCountry.addEventListener('click', () => { });
  thTotal.addEventListener('click', () => { });
}