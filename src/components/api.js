/* eslint-disable import/no-cycle */
import * as importedApis from "../api/default.json";
import Page from "../index";
import Properties from "./properties";
// import listOfCountries from "./list-of-countries/js/list-of-countries";
// import chart from './chart/js/chart.js'
// import map from './map/js/map.js'
// import country-data from './country-data/js/country-data.js'

const apiPaths = importedApis[0];
// const summary = "summaryRoute";
// const countries = "countriesRoute";
// const countryDay = "countryDayOneRoute";
// const countryTotalDay = "countryDayOneTotalRoute";
// const country = "ukraine";
const summaryUrl = "https://api.covid19api.com/summary";
const UpdatePeriod = 14;
let url = "";
let categorySave = "";
let categoryData = {};

async function getApi(category, country) {
  if (country) categorySave = `${category}-${country}`;
  else { categorySave = category; }
  const response = await fetch(url);
  const result = await response.json();
  if (result.Message !== "Caching in progress") {
    localStorage.setItem(categorySave, JSON.stringify(result));
    Page.set(result, category, country);
    Properties.data[categorySave] = result;
  } else { console.log(result.Message); }
}

export default async function getData(category, country) {
  const date = new Date();
  let categoryApi = category;
  if (categoryApi) {
    const baseUrl = apiPaths.baseUrl.Path;
    let catUrl = apiPaths[categoryApi].Path;

    if (catUrl.match(/:country/) && country) catUrl = catUrl.replace(/:country/, country);

    url = baseUrl + catUrl;
  } else { url = summaryUrl; categoryApi = "summaryRoute"; }

  if (country) categoryData = JSON.parse(localStorage.getItem(`${categoryApi}-${country}`));
  else { categoryData = JSON.parse(localStorage.getItem(categoryApi)); }

  if (categoryData) {
    const LastUpdate = new Date(categoryData.Date);
    const deltaHours = new Date(date - LastUpdate).getHours();
    if (deltaHours > UpdatePeriod) getApi(categoryApi, country);
    else { getApi(categoryApi, country); }
  } else { getApi(categoryApi, country); }
}
