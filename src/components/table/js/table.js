export async function table(country, data) {
  document.querySelector('.table').innerHTML = `
  <div class="table__body">
  <div class="table__current-country"><span id="current-country"></span></div>
  <div class="table__common">
    <div class="table__title-all"><span>All time</span></div>
    <div class="table__wrapper">
      <div class="table__all-time">
        <div class="table__significations">
          <ul>
            <li><span>Recovered</span><span class="table__recovered"></span></li>
            <li><span>Confirmed</span><span class="table__confirmed"></span></li>
            <li><span>Deaths</span><span class="table__deaths"></span></li>
          </ul>
        </div>
      </div>
      <div class="table__last-day">
        <div class="table__significations">
          <ul>
            <li><span>Recovered</span><span class="table__recovered"></span></li>
            <li><span>Confirmed</span><span class="table__confirmed"></span></li>
            <li><span>Deaths</span><span class="table__deaths"></span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="table__title-last"><span>Last day</span></div>
  </div>
  <button type="button" class="table__switch-mode"><span>Switch mode</span></button>
  </div>`;

  const table__recovered = document.querySelectorAll('.table__recovered');
  const table__confirmed = document.querySelectorAll('.table__confirmed');
  const table__deaths = document.querySelectorAll('.table__deaths');
  const currentCountry = document.querySelector('#current-country');

  const switchMode = document.querySelector('.table__switch-mode')
  switchMode.addEventListener('mouseup', wrapTable);

  let tableModeIsAbsolute = false;

  setTableContent();
  function setTableContent() {
    if (country !== 'world') {
      currentCountry.innerHTML = data[0].Country;
      if (!tableModeIsAbsolute) {
        table__recovered[0].textContent = Intl.NumberFormat().format(data[data.length - 1].Recovered);
        table__confirmed[0].textContent = Intl.NumberFormat().format(data[data.length - 1].Confirmed);
        table__deaths[0].textContent = Intl.NumberFormat().format(data[data.length - 1].Deaths);
        table__recovered[1].textContent = Intl.NumberFormat().format(data[data.length - 1].Recovered - data[data.length - 2].Recovered);
        table__confirmed[1].textContent = Intl.NumberFormat().format(data[data.length - 1].Confirmed - data[data.length - 2].Confirmed);
        table__deaths[1].textContent = Intl.NumberFormat().format(data[data.length - 1].Deaths - data[data.length - 2].Deaths);
      } else {
        table__recovered[0].textContent = Intl.NumberFormat().format(data[data.length - 1].Recovered);
        table__confirmed[0].textContent = Intl.NumberFormat().format(data[data.length - 1].Confirmed);
        table__deaths[0].textContent = Intl.NumberFormat().format(data[data.length - 1].Deaths);
        table__recovered[1].textContent = Intl.NumberFormat().format(data[data.length - 1].Recovered / 100000);
        table__confirmed[1].textContent = Intl.NumberFormat().format(data[data.length - 1].Confirmed / 100000);
        table__deaths[1].textContent = Intl.NumberFormat().format(data[data.length - 1].Deaths / 100000);
      }
    } else {
      currentCountry.innerHTML = 'Global';
      if (!tableModeIsAbsolute) {
        table__recovered[0].textContent = Intl.NumberFormat().format(data.Global.TotalRecovered);
        table__confirmed[0].textContent = Intl.NumberFormat().format(data.Global.TotalConfirmed);
        table__deaths[0].textContent = Intl.NumberFormat().format(data.Global.TotalDeaths);
        table__recovered[1].textContent = Intl.NumberFormat().format(data.Global.NewRecovered);
        table__confirmed[1].textContent = Intl.NumberFormat().format(data.Global.NewConfirmed);
        table__deaths[1].textContent = Intl.NumberFormat().format(data.Global.NewDeaths);
      } else {
        table__recovered[0].textContent = Intl.NumberFormat().format(data.Global.TotalRecovered);
        table__confirmed[0].textContent = Intl.NumberFormat().format(data.Global.TotalConfirmed);
        table__deaths[0].textContent = Intl.NumberFormat().format(data.Global.TotalDeaths);
        table__recovered[1].textContent = Intl.NumberFormat().format(data.Global.TotalRecovered / 100000);
        table__confirmed[1].textContent = Intl.NumberFormat().format(data.Global.TotalConfirmed / 100000);
        table__deaths[1].textContent = Intl.NumberFormat().format(data.Global.TotalDeaths / 100000);
      }
    }
  }

  function wrapTable() {
    switchMode.removeEventListener('mouseup', wrapTable);
    tableModeIsAbsolute = !tableModeIsAbsolute;
    const tableWrapper = document.querySelector('.table__wrapper');
    const tableCommon = document.querySelector('.table__common');

    tableCommon.style.height = '70px';
    tableWrapper.style.height = '0px';
    delay(400)
      .then(() => {
        return new Promise(resolve => {
          document.querySelector('.table__title-all').style.backgroundColor = '#d2374a'
          document.querySelector('.table__title-last').style.backgroundColor = '#d2374a'
          delay(200)
            .then(() => {
              setTableContent();
              document.querySelector('.table__title-all>span').textContent = getTitle().top;
              document.querySelector('.table__title-last>span').textContent = getTitle().bottom;
              document.querySelector('.table__title-all').style.backgroundColor = 'rgba(97, 0, 13, 0.3)'
              document.querySelector('.table__title-last').style.backgroundColor = 'rgba(97, 0, 13, 0.3)'
              delay(400)
                .then(() => {
                  resolve();
                })
            })
        })
      })
      .then(() => {
        tableCommon.style.height = '100%';
        tableWrapper.style.height = '100%';
        switchMode.addEventListener('mouseup', wrapTable);
      });
  }
  function getTitle() {
    if (!tableModeIsAbsolute) {
      return { top: 'All time', bottom: 'Last day' }
    } else {
      return { top: 'Absolute', bottom: 'calc for 100k' }
    }
  }
  function delay(ms) {
    return new Promise(resolve => {
      setTimeout(() => resolve(), ms);
    })
  }
}
