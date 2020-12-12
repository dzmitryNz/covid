// import "./style.css";
import getApi from './js/api.js'
const summary = 'summaryRoute';
const countries = 'countriesRoute';
const countryDay = 'countryDayOneRoute';
const countryTotalDay = 'countryDayOneTotalRoute';
const country = 'france';
const category = countryTotalDay;
let countruisList = document.querySelector('.countries-list');

getApi(summary).then(globalChange()); 

new Promise( function (resolve) { 
    getApi(category, country);
    resolve (2); 
}).then(function () {console.log(JSON.parse(localStorage.getItem(`${category}-${country}`)))})

function globalChange() {
    console.log('globalChange')
    let summaryData = JSON.parse(localStorage.getItem(summary));
    let lastUpdate = new Date(summaryData.Date);
    countruisList.innerText = `${summaryData.Global.TotalConfirmed} ${lastUpdate.toLocaleString()}`;
}
