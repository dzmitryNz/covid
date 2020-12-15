/** *
 * @param {String} category 
 * @param {String} country
 * @param {HTMLElement} signification // death cases or recovered
 */

export function chart(category, country, signification = "cases") {
  console.log(category);
  const container = document.querySelector('.chart');
  container.insertAdjacentHTML('beforeend', `<canvas id="chartCanvas"></canvas>`)

  const ctx = document.querySelector('#chartCanvas').getContext("2d");
  const chart = {
    type: "bar",
    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '1', '2', '3', '4', '5', '6', '7', '8'],
      datasets: [{
        data: [5, 5, 4, 1, 0, 2, 1, 3, 5, 5, 4, 1, 0, 2, 1, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      }],
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
          },
          stacked: true
        }],
        yAxes: [{
          gridLines: {
            display: false,
            color: "rgb(215, 236, 244)",
          },
          stacked: true
        }]
      },
      legend: {
        display: false
      },
      tooltips: {

      }
    },
  };
  Chart.defaults.global.defaultFontFamily = 'Arial';
  Chart.defaults.global.defaultFontSize = 14;
  new Chart(ctx, chart);
}