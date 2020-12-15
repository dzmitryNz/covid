// import "./style.css";
import getData from './components/api.js'
import listOfCountries from './components/list-of-countries/js/list-of-countries.js'
import { chart } from './components/chart/js/chart.js'
// import map from './components/map/js/map.js'
// import country-data from './components/country-data/js/country-data.js'

const summary = 'summaryRoute';
const countries = 'countriesRoute';
const countryDay = 'countryDayOneRoute';
const countryTotalDay = 'countryDayOneTotalRoute';
const country = 'ukraine';
let Page = {};

export default Page = {
  elements: {
    main: '',
  },
  properties: {
    summary: {},
    lastUpdate: '',
  },

  init() {
    //getData(summary);
    //getData(countryTotalDay, country);

    // getApi('countryRoute', '');
    getApi(summary);
    summaryData = JSON.parse(localStorage.getItem(summary));

    listOfCountries(summaryData);
    chart(summaryData);
  }
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
    fetch('https://api.covid19api.com').then(res => res.json()).then(data => console.log(data))
  } else { url = summaryUrl; category = 'summaryRoute' }

  if (country) categoryData = JSON.parse(localStorage.getItem(`${category}-${country}`));
  else { categoryData = JSON.parse(localStorage.getItem(category)); }

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

  if (result.Message !== 'Caching in progress') {
    if (country) localStorage.setItem(`${category}-${country}`, JSON.stringify(result));
    else { localStorage.setItem(category, JSON.stringify(result)); }
  } else { console.log(result.Message) }

  if (category === summary) listOfCountries(result);
  if (category === countries) countriesChange(result);
  return result;
}

window.addEventListener("DOMContentLoaded", function () {
  Page.init();
});