const apis = './api/default.json';
const countries = './api/countries.json';
const summary  = 'https://api.covid19api.com/summary';
let url = '';
let categoryData = {};

export default async function getApi(category, country) {
    const date = new Date();
    if (category) {
        let res = await fetch(apis);
        let apiPaths = await res.json();
        const baseUrl = apiPaths.baseUrl.Path;
        let catUrl = apiPaths[category].Path;

        if (catUrl.match(/:country/)) catUrl = catUrl.replace(/:country/, country);

        url = baseUrl + catUrl;
    } else {url = summary; category = 'summaryRoute'}

    if(country) categoryData = JSON.parse(localStorage.getItem(`${category}-${country}`));
        else { categoryData = JSON.parse(localStorage.getItem(category));}

    if (categoryData) { 
        const LastUpdate = new Date(categoryData.Date);
        const deltaHours = new Date(date - LastUpdate).getHours();
        if (deltaHours < 24) return categoryData;
            else { return getData(category, country)  }
    } else { return getData(category, country) }
}

async function getData(category, country) {
        console.log('get', category, country, url)
        const response = await fetch(url);
        const result = await response.json(); 
        // if(result.Message !== 'Caching in progress') {
            if(country) localStorage.setItem(`${category}-${country}`,JSON.stringify(result));
                else {localStorage.setItem(category,JSON.stringify(result));}
        // }
}