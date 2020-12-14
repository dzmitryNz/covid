// import "./style.css";
import getData from './components/api.js'
import listOfCountries from './components/list-of-countries/js/list-of-countries.js'
// import chart from './chart/js/chart.js'
// import map from './map/js/map.js'
// import country-data from './country-data/js/country-data.js'

const summary = 'summaryRoute';
const countries = 'countriesRoute';
const countryDay = 'countryDayOneRoute';
const countryTotalDay = 'countryDayOneTotalRoute';
const country = 'belarus';
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
  }
}

window.addEventListener("DOMContentLoaded", function () {
  Page.init();
});