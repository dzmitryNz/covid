// import "./style.css";
// import getApi from './js/api.js'
import create from './js/create.js'

const summary = 'summaryRoute';
const countries = 'countriesRoute';
const countryDay = 'countryDayOneRoute';
const countryTotalDay = 'countryDayOneTotalRoute';
const country = 'belarus';
const category = countryTotalDay;
const apis = './api/default.json';
const summaryUrl  = 'https://api.covid19api.com/summary';
const UpdatePeriod = 10;
let blockCountriesList = document.querySelector('.countries-list');
let blockTable = document.querySelector('.table');
let url = '';
let categoryData = {};
let summaryData = {};
let countriesData = {};

export const Page = {
    elements: {
        main: '', 
    },

    properties: {
        summary: {},
        lastUpdate: '',
    },

    init() {
        getApi(summary);
        summaryData = JSON.parse(localStorage.getItem(summary));
        if(summaryData) {
            globalChange(summaryData);
            countriesChange(summaryData);
        }
    },
}

async function getApi(category, country) {
    const date = new Date();
    if (category) {
        let res = await fetch(apis);
        let apiPaths = await res.json();
        const baseUrl = apiPaths.baseUrl.Path;
        let catUrl = apiPaths[category].Path;

        if (catUrl.match(/:country/) && country) catUrl = catUrl.replace(/:country/, country);

        url = baseUrl + catUrl;
    } else {url = summaryUrl; category = 'summaryRoute'}

    if(country) categoryData = JSON.parse(localStorage.getItem(`${category}-${country}`));
        else { categoryData = JSON.parse(localStorage.getItem(category));}

    if (categoryData) { 
        const LastUpdate = new Date(categoryData.Date);
        const deltaHours = new Date(date - LastUpdate).getHours();
        if (deltaHours > UpdatePeriod) return categoryData;
            else { return getData(category, country) }
    } else { return getData(category, country) }
}

async function getData(category, country) {
        const response = await fetch(url);
        const result = await response.json(); 

        if(result.Message !== 'Caching in progress') {
            if(country) localStorage.setItem(`${category}-${country}`,JSON.stringify(result));
            else {localStorage.setItem(category,JSON.stringify(result));}
        } else {console.log(result.Message)}

        if (category === summary) globalChange(result);
        if (category === countries) countriesChange(result);
        return result;
}

function globalChange(summaryData) {
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
        td = create('td', 'country', country.Country, tr[i] );
        td = create('td', 'total-confirmed', String(country.TotalConfirmed), tr[i] );
        td = create('td', 'total-deths', String(country.TotalDeaths), tr[i] );
        td = create('td', 'total-recovered', String(country.TotalRecovered), tr[i] );
        tr[i].addEventListener('click', () => {});
    })
    thCountry.addEventListener('click', () => {});
    thTotal.addEventListener('click', () => {});
}

function countryChange(countryData) {
    console.log('countryChange')
    countryData = JSON.parse(localStorage.getItem(summary));
    blockTable.innerText = `${countryData}`;
}

function countriesChange(summaryData) {
    
}

window.addEventListener("DOMContentLoaded", function () {
    Page.init();
  });