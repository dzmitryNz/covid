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
const blockCountriesList = document.querySelector('.countries-list');
const blockTable = document.querySelector('.table');
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
        if (deltaHours > 10) return categoryData;
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
    blockCountriesList.innerText = `${summaryData.Global.TotalConfirmed} ${lastUpdate.toLocaleString()}`;
}

function countryChange(countrData) {
    console.log('countryChange')
    countryData = JSON.parse(localStorage.getItem(summary));
    blockTable.innerText = `${countryData}`;
}

function countriesChange(summaryData) {
    console.log('countries')
    let tr = {};
    let td = {};
    summaryData = JSON.parse(localStorage.getItem(summary));
    let table = create('table', 'countries-table', null, blockTable);
    let tdCountry = create('td', null, 'Country');
    let tdNew = create('td', null, 'New today');
    let tdTotal = create('td', null, 'Tootal');
    let th = create('th', 'table-header', [tdCountry, tdNew, tdTotal], blockTable);
    summaryData.Countries.forEach((country, i) => {
        console.log(country.Country, country.NewConfirmed)
        tr[i] = create('tr', 'country-row', null, table);
        td = create('td', 'country', country.Country, tr[i] );
        td = create('td', 'total-confirmed', String(country.TotalConfirmed), tr[i] );
        td = create('td', 'new-confirmed', String(country.NewConfirmed), tr[i] );
    })
}

window.addEventListener("DOMContentLoaded", function () {
    Page.init();
  });