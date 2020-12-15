/** *
 * @param {String} country // if empty, country = Global, else country = country.
 * @param {HTMLElement} signification // Death/Confirmed/Recovered
 */

export async function chart(country, signification) {
  const getColor = () => {
    const colorDeaths = '#D2374A';
    const colorRecovered = '#5D9700';
    const colorConfirmed = '#EDB021';

    if (signification === 'Confirmed') return colorConfirmed;
    else if (signification === 'Deaths') return colorDeaths;
    else if (signification === 'Recovered') return colorRecovered;
    else console.error('Wrong signification. Should be Deaths || Confirmed || Recovered')
  }

  const getCountrySignifications = async (sign) => {
    const arr = [];
    try {
      const res = await fetch(`https://api.covid19api.com/country/${country}`);
      const data = await res.json();
      data.forEach(e => arr.push(e[sign]));
    } catch (error) {
      console.error('Enter correct name of country');
    }
    return arr;
  };
  const countrySignifications = await getCountrySignifications(signification);
  const container = document.querySelector('.chart');
  container.insertAdjacentHTML('beforeend', `<canvas id="chartCanvas"></canvas>`)
  const ctx = document.querySelector('#chartCanvas').getContext("2d");
  const chart = {
    type: "bar",
    data: {
      labels: countrySignifications,
      datasets: [{
        data: countrySignifications,
        backgroundColor: getColor(),
      }],
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            display: false,
          },
          stacked: true
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            color: "rgba(215, 236, 244,0.05)",
          },
          stacked: true
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        displayColors: false,
        bodyFontColor: getColor(),
        callbacks: {
          title: function (tooltipItems, data) {
            const dataLength = data.labels.length;
            let dateFrom = moment(Date.now() - (dataLength - tooltipItems[0].index - 1) * 24 * 3600 * 1000).format('MMMM Do YYYY');
            return `Date: ${dateFrom}`;
          },
          label: function (tooltipItems) {
            return `${signification}: ${tooltipItems.yLabel}`;
          }
        }
      }
    },
  };
  Chart.defaults.global.defaultFontFamily = 'Arial';
  Chart.defaults.global.defaultFontSize = 14;
  new Chart(ctx, chart);
}