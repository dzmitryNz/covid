import { isNull } from "lodash";

export async function chart(country, signification) {
  if (!isNull(country)) localStorage.setItem('currentCountryChart', JSON.stringify(country));
  else country = JSON.parse(localStorage.getItem('currentCountryChart'));
  if (!isNull(signification)) localStorage.setItem('currentSignChart', signification);
  else signification = localStorage.getItem('currentSignChart');

  const countrySignifications = await getCountrySignifications(signification);
  const container = document.querySelector('.chart');
  container.innerHTML = `
      <button type="button" class="full-screen-but hide-button"></button>
      <canvas id="chartCanvas"></canvas>
  `;
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
            beginAtZero: true,
            callback: function (label) {
              if (label < 10) {
                return parseInt(label, 10);
              } else if (label >= 1000000) {
                return label / 1000000 + 'M';
              } else if (label >= 1000) {
                return label / 1000 + 'k';
              } else {
                return label;
              }
            }
          },
          gridLines: {
            color: "rgba(215, 236, 244,0.10)",
          },
          stacked: true
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        yPadding: 8,
        xPadding: 8,
        caretSize: 8,
        displayColors: false,
        bodyFontColor: getColor(),
        callbacks: {
          title: function (tooltipItems, data) {
            const dataLength = data.labels.length;
            let dateFrom = moment(Date.now() - (dataLength - tooltipItems[0].index - 1) * 24 * 3600 * 1000).format('MMMM Do YYYY');
            return `Date: ${dateFrom}`;
          },
          label: function (tooltipItems) {
            return `${signification}: ${Intl.NumberFormat().format(tooltipItems.yLabel)}`;
          },
        }
      }
    },
  };
  Chart.defaults.global.defaultFontFamily = 'Arial';
  Chart.defaults.global.defaultFontSize = 14;
  new Chart(ctx, chart);

  const fullButton = document.querySelector('.full-screen-but');
  container.addEventListener('mouseover', () => {
    if (fullButton.classList.contains('hide-button')) {
      fullButton.classList.toggle('hide-button');
    }
  })
  container.addEventListener('mouseleave', () => {
    if (!fullButton.classList.contains('hide-button')) {
      fullButton.classList.toggle('hide-button');
    }
  })

  fullButton.addEventListener('mouseup', () => {
    document.querySelector('.full-screen').showModal();
    document.querySelector('#pop-content').innerHTML = '<canvas id="chartCanvasBig"></canvas>';
    const ctxBig = document.querySelector('#chartCanvasBig').getContext("2d");
    new Chart(ctxBig, chart);
  });
  document.querySelector('#pop-close').addEventListener('click', function () {
    document.querySelector('.full-screen').close();
  });

  async function getCountrySignifications(sign) {
    const arr = [];
    if (country === 'world') {
      const res = await fetch(`https://api.covid19api.com/world`);
      const data = await res.json();
      data.forEach(e => arr.push(e[`Total${sign}`]));
    } else {
      country.forEach(e => arr.push(e[sign]));
    }
    return arr;
  };
  function getColor() {
    const colorDeaths = '#D2374A';
    const colorRecovered = '#5D9700';
    const colorConfirmed = '#EDB021';

    if (signification === 'Confirmed') return colorConfirmed;
    else if (signification === 'Deaths') return colorDeaths;
    else if (signification === 'Recovered') return colorRecovered;
    else console.error('Wrong signification. Should be Deaths || Confirmed || Recovered')
  }
}