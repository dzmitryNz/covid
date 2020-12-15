import * as importedApis from '../api/default.json';
import Page from "../index.js";
import listOfCountries from "./list-of-countries/js/list-of-countries";
// import chart from './chart/js/chart.js'
// import map from './map/js/map.js'
// import country-data from './country-data/js/country-data.js'

const apiPaths = importedApis[0];
const summary = "summaryRoute";
const countries = "countriesRoute";
const countryDay = "countryDayOneRoute";
const countryTotalDay = "countryDayOneTotalRoute";
const country = "ukraine";
const summaryUrl = "https://api.covid19api.com/summary";
const UpdatePeriod = 14;
let url = "";
let categoryData = {};

export default async function getData(category, country) {
  
  const date = new Date();
  if (category) {
    const baseUrl = apiPaths.baseUrl.Path;
    let catUrl = apiPaths[category].Path;
    
    if (catUrl.match(/:country/) && country) catUrl = catUrl.replace(/:country/, country);
    
    url = baseUrl + catUrl;
  } else { url = summaryUrl; category = "summaryRoute"; }
  
  if (country) categoryData = JSON.parse(localStorage.getItem(`${category}-${country}`));
  else { categoryData = JSON.parse(localStorage.getItem(category)) }

  if (categoryData) {
    const LastUpdate = new Date(categoryData.Date);
    const deltaHours = new Date(date - LastUpdate).getHours();
    if (deltaHours > UpdatePeriod)  getApi(category, country);
      else {  getApi(category, country) }      
  } else { getApi(category, country);}
}

async function getApi(category, country) {
  const response = await fetch(url);
  const result = await response.json();
  if (result.Message !== "Caching in progress") {
    if (country) localStorage.setItem(`${category}-${country}`, JSON.stringify(result));
    else { localStorage.setItem(category, JSON.stringify(result)); }
    Page.set(result, category);
  } else { console.log(result.Message); }
}
