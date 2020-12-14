import Page from '../index.js'
import listOfCountries from './list-of-countries/js/list-of-countries.js'
// import chart from './chart/js/chart.js'
// import map from './map/js/map.js'
// import country-data from './country-data/js/country-data.js'

const summary = 'summaryRoute';
const countries = 'countriesRoute';
const countryDay = 'countryDayOneRoute';
const countryTotalDay = 'countryDayOneTotalRoute';
const country = 'belarus';
const apis = './api/default.json';
const summaryUrl = 'https://api.covid19api.com/summary';
const UpdatePeriod = 10;
let url = '';
let categoryData = {};

export default async function getData(category, country) {
    const date = new Date();
    if (category) {
      let res = await fetch(apis);
      let apiPaths = await res.json();
      const baseUrl = apiPaths.baseUrl.Path;
      let catUrl = apiPaths[category].Path;
  
      if (catUrl.match(/:country/) && country) catUrl = catUrl.replace(/:country/, country);
  
      url = baseUrl + catUrl;
    } else { url = summaryUrl; category = 'summaryRoute' }
  
    if (country) categoryData = JSON.parse(localStorage.getItem(`${category}-${country}`));
    else { categoryData = JSON.parse(localStorage.getItem(category)); }
  
    if (categoryData) {
      const LastUpdate = new Date(categoryData.Date);
      const deltaHours = new Date(date - LastUpdate).getHours();
      if (deltaHours > UpdatePeriod) return categoryData;
      else { return getApi(category, country) }
    } else { return getApi(category, country) }
  }
  
  async function getApi(category, country) {
    const response = await fetch(url);
    const result = await response.json();
  
    if (result.Message !== 'Caching in progress') {
      if (country) localStorage.setItem(`${category}-${country}`, JSON.stringify(result));
      else { localStorage.setItem(category, JSON.stringify(result)); }
    } else { console.log(result.Message) }
  
    if (category === summary) {
        listOfCountries(result);
        Page.properties.lastUpdate = result.Date;
    }
    if (category === countries) countriesChange(result);
  }