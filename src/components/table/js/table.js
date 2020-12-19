export async function table(country, data) {
  const table__recovered = document.querySelectorAll('.table__recovered');
  const table__confirmed = document.querySelectorAll('.table__confirmed');
  const table__deaths = document.querySelectorAll('.table__deaths');
  const currentCountry = document.querySelector('#current-country');

  if (country !== 'world') {
    currentCountry.innerHTML = data[0].Country;
    table__recovered[0].textContent = Intl.NumberFormat().format(data[data.length - 1].Recovered)
    table__confirmed[0].textContent = Intl.NumberFormat().format(data[data.length - 1].Confirmed)
    table__deaths[0].textContent = Intl.NumberFormat().format(data[data.length - 1].Deaths)
    table__recovered[1].textContent = Intl.NumberFormat().format(data[data.length - 1].Recovered - data[data.length - 2].Recovered)
    table__confirmed[1].textContent = Intl.NumberFormat().format(data[data.length - 1].Confirmed - data[data.length - 2].Confirmed)
    table__deaths[1].textContent = Intl.NumberFormat().format(data[data.length - 1].Deaths - data[data.length - 2].Deaths)
  } else {
    currentCountry.innerHTML = 'Global';
    table__recovered[0].textContent = Intl.NumberFormat().format(data.Global.TotalRecovered)
    table__confirmed[0].textContent = Intl.NumberFormat().format(data.Global.TotalConfirmed)
    table__deaths[0].textContent = Intl.NumberFormat().format(data.Global.TotalDeaths)
    table__recovered[1].textContent = Intl.NumberFormat().format(data.Global.NewRecovered)
    table__confirmed[1].textContent = Intl.NumberFormat().format(data.Global.NewConfirmed)
    table__deaths[1].textContent = Intl.NumberFormat().format(data.Global.NewDeaths)
  }
}