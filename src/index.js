/* eslint-disable import/no-cycle */

import "./components/index.css";
import getData from "./components/api";
import listOfCountries from "./components/list-of-countries/js/list-of-countries";
import { chart } from "./components/chart/js/chart";
import { table } from "./components/table/js/table.js";
import Map from "./components/map/js/map";
// import map from './components/map/js/map.js'
//  import country-data from './components/country-data/js/country-data.js'

const summary = "summaryRoute";
// const countries = "countriesRoute";
// const countryDay = "countryDayOneRoute";
// const countryTotalDay = "countryDayOneTotalRoute";
// const country = "ukraine";
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
  },

  set(categoryData, category) {
    const map = new Map(categoryData);

    switch (category) {
      case "countryDayOneRoute":
        chart(categoryData, 'Confirmed');
        table(categoryData[0].CountryCode, categoryData);
        map.getMap();
        break;
      case "countryTotalDayOneRoute":
        chart(categoryData, "Confirmed");
        map.getMap();
        break;
      case "summaryRoute":
        listOfCountries(categoryData, category);
        chart('world', 'Confirmed');
        table('world', categoryData);
        map.getMap();
        break;
      default:
        chart(categoryData, "Confirmed");
        map.getMap();
    }
  },
};

window.addEventListener("DOMContentLoaded", () => {
  Page.init();
});
