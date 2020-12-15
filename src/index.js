import "./index.css";

import getData from "./components/api";
import listOfCountries from "./components/list-of-countries/js/list-of-countries";
import { chart } from "./components/chart/js/chart";
import Map from "./components/map/js/map";
// import map from './components/map/js/map.js'
// import country-data from './components/country-data/js/country-data.js'

const summary = "summaryRoute";
const countries = "countriesRoute";
const countryDay = "countryDayOneRoute";
const countryTotalDay = "countryDayOneTotalRoute";
const country = "ukraine";
let Page = {};

export default Page = {
  elements: {
    main: "",
  },
  properties: {
    summary: {},
    lastUpdate: "",
  },

  init() {
    getData(summary);
    const summaryData = JSON.parse(localStorage.getItem(summary));

    listOfCountries(summaryData);
    chart(summaryData);

    const map = new Map(summaryData);
    map.getMap();
  },
};

window.addEventListener("DOMContentLoaded", () => {
  Page.init();
});
