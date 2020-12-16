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
    getData(summary);
    const summaryData = JSON.parse(localStorage.getItem(summary));

    listOfCountries(summaryData);
    chart('world', 'Confirmed');
  }
}

window.addEventListener("DOMContentLoaded", function () {
  Page.init();
});