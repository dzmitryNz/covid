/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import * as coordinatesApis from "../../../api/coordinats.json";
import Properties from "../../properties";

export default class Map {
  constructor(summaryData) {
    this.summaryData = summaryData;
    this.jsonCountryCoordinates = null;
    this.arrCountryCodes = [];
    this.coordinates = [];
    this.x = 0;
    this.y = 0;
    this.map = null;
    this.tooltip = null;
    this.country = {};
  }

  getMap() {
    this.getMouseCoordinate();
    this.addFullSrceenButton();
    // console.log(this.summaryData.Countries);
    this.tooltip = document.createElement("div");
    this.tooltip.classList.add("map__tooltip", "map__tooltip--hide");
    document.querySelector(".grid-wrapper").appendChild(this.tooltip);

    this.getCountryCoordinates();
    const param = Properties.cases;

    // Creating map options
    const mapOptions = {
      minZoom: 1,
      maxZoom: 10,
    };

    // Creating a map object
    // eslint-disable-next-line new-cap
    this.map = new L.map("map", mapOptions);
    this.map.setView([10, 10], 2);

    // Creating a Layer object
    const layer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      noWrap: true,
      bounds: [
        [-90, -180],
        [90, 180],
      ],
    });

    // Adding layer to the map
    this.map.addLayer(layer);

    this.addCircles(param);

    // Legend specific
    const legend = L.control({ position: "bottomleft" });

    legend.onAdd = (map) => {
      const div = L.DomUtil.create("div", "map__legend");
      div.innerHTML += "<div><i style=\"background: green\"></i><span><1000</span></div>";
      div.innerHTML += "<div><i style=\"background: yellow\"></i><span><100000</span></div>";
      div.innerHTML += "<div><i style=\"background: orange\"></i><span><250000</span></div>";
      div.innerHTML += "<div><i style=\"background: red\"></i><span><500000</span></div>";
      div.innerHTML += "<div><i style=\"background: darkred\"></i><span>>500000</span></div>";
      return div;
    };

    legend.addTo(this.map);
    
    this.addParamChanger(param);
  }

  // add country circles
  addCircles(param) {
    this.coordinates.forEach((item) => {
      // Center of the circle
      const circleCenter = [item.latitude, item.longitude];

      const value = this.getParamByCode(item.country_code, param);
      let circleRadius;
      let circleColor;
      if (value < 1000) {
        circleRadius = 2;
        circleColor = "green";
      } else if (value < 100000) {
        circleRadius = 4;
        circleColor = "yellow";
      } else if (value < 250000) {
        circleRadius = 6;
        circleColor = "orange";
      } else if (value < 500000) {
        circleRadius = 8;
        circleColor = "red";
      } else {
        circleRadius = 10;
        circleColor = "darkred";
      }

      // Creating a circle
      const circle = L.circleMarker(circleCenter, {
        radius: circleRadius,
        id: item.country_code,
        val: value,
      });
      circle.setStyle({ color: circleColor });
      // Adding circle to the map
      circle.addTo(this.map);

      // L.DomUtil.addClass(circle._path, item.country_code);

      circle.addEventListener("mouseover", (e) => {
        this.tooltip.style.top = `${this.y + 20}px`;
        this.tooltip.style.left = `${this.x + 10}px`;
        this.tooltip.classList.remove("map__tooltip--hide");
        this.tooltip.innerHTML = `${item.name}<br>${param}<br>${value}`;
      });

      circle.addEventListener("mouseout", () => {
        this.tooltip.classList.add("map__tooltip--hide");
      });

      circle.addEventListener("click", (e) => {
        document.querySelector(`tr.country-row.${this.country[e.target.options.id]}`).click();
      });
    });
  }

  // add changing parametr buttons
  addParamChanger(param) {
    // Change param buttons
    const paramChanger = L.control({ position: "topleft" });

    paramChanger.onAdd = (map) => {
      const div = L.DomUtil.create("div", "map__param-changer");
      div.innerHTML += "<button data-id = \"confirmed\" class=\"param-changer__button param-changer__button--confirmed param-changer__button--active\"><span class=\"material-icons\">stop_circle</span></button>";
      div.innerHTML += "<button data-id = \"deaths\" class=\"param-changer__button param-changer__button--deaths\"><span class=\"material-icons\">stop_circle</span></button>";
      // div.innerHTML += `<span class="map__param">${param}</span>`;
      div.innerHTML += "<button data-id = \"recovered\" class=\"param-changer__button param-changer__button--recovered\"><span class=\"material-icons\">stop_circle</span></button>";

      return div;
    };

    paramChanger.addTo(this.map);

    const title = document.createElement("div");
    title.classList.add("param-changer__param-title", "param-changer__param-title--hide");
    const titleItem = document.createElement("span");
    titleItem.classList.add("param-title__text");
    title.appendChild(titleItem);
    document.querySelector(".map__param-changer").appendChild(title);

    const paramButtons = document.querySelectorAll(".param-changer__button");
    const mapParam = document.querySelector(".map__param");
    paramButtons.forEach((button) => {
      const type = button.getAttribute("data-id");

      button.addEventListener("mouseover", () => {
        titleItem.textContent = type;
        switch (type) {
          case "confirmed": title.style.top = "6px"; break;
          case "deaths": title.style.top = "36px"; break;
          case "recovered": title.style.top = "66px"; break;
          default: break;
        }
        title.style.left = "26px";
        title.classList.remove("param-changer__param-title--hide");
      });

      button.addEventListener("mouseout", () => {
        title.classList.add("param-changer__param-title--hide");
      });

      button.addEventListener("click", () => {
        // delete all circles
        const circles = document.querySelectorAll("path");
        circles.forEach((g) => {
          g.remove();
        });
        const tempCases = Properties.cases;
        // add new param circles
        switch (type) {
          case "confirmed":
            if (tempCases.match(/Total/)) Properties.cases = "TotalConfirmed";
            if (tempCases.match(/New/)) Properties.cases = "NewConfirmed";
            if (document.querySelector(".total-button") !== null) {
              document.querySelector(".total-button").click();
            }
            break;
          case "deaths":
            if (tempCases.match(/Total/)) Properties.cases = "TotalDeaths";
            if (tempCases.match(/New/)) Properties.cases = "NewDeaths";
            if (document.querySelector(".deaths-button") !== null) {
              document.querySelector(".deaths-button").click();
            }
            break;
          case "recovered":
            if (tempCases.match(/Total/)) Properties.cases = "TotalRecovered";
            if (tempCases.match(/New/)) Properties.cases = "NewRecovered";
            if (document.querySelector(".recovered-button") !== null) {
              document.querySelector(".recovered-button").click();
            }
            break;
          default: break;
        }
        this.addCircles(Properties.cases);
        
        paramButtons.forEach((item) => {
          item.classList.remove("param-changer__button--active");
        });
        button.classList.add("param-changer__button--active");
      });
    });
  }

  static clickMapButton() {
    let param = Properties.cases;
    param = param.replace("Total", "");
    param = param.replace("New", "");
    param = param.toLowerCase();
    const button = document.querySelector(`.param-changer__button[data-id="${param}"]`);
    button.click();
  }

  // getting country coordinates
  async getCountryCoordinates() {
    this.getCountryCodes();
    this.jsonCountryCoordinates = coordinatesApis;

    this.jsonCountryCoordinates.forEach((i) => {
      if (this.arrCountryCodes.includes(i.country_code)) {
        const obj = {};
        obj.name = i.name;
        obj.country_code = i.country_code;
        [obj.latitude, obj.longitude] = i.latlng;
        this.coordinates.push(obj);
      }
    });
  }

  // getting country codes to select coordinates
  getCountryCodes() {
    Object.keys(this.summaryData.Countries).forEach((i) => {
      this.country[this.summaryData.Countries[i].CountryCode] = this.summaryData.Countries[i].Slug;
      Object.keys(this.summaryData.Countries[i]).forEach((item) => {
        if (item === "CountryCode") {
          this.arrCountryCodes.push(this.summaryData.Countries[i][item]);
        }
      });
    });
  }

  getMinMaxCounty(param) {
    function sortByParam(arr, p) {
      arr.sort((a, b) => (a[p] > b[p] ? 1 : -1));
    }
    const mas = this.summaryData.Countries;
    sortByParam(mas, param);
    const len = mas.length;
    return [mas[0][param], mas[len - 1][param]];
  }

  getParamByCode(code, param) {
    let value;
    for (let i = 0; i < this.summaryData.Countries.length; i += 1) {
      if (this.summaryData.Countries[i].CountryCode === code) {
        // console.log(code, this.summaryData.Countries[i][param], this.summaryData.Countries[i]);
        value = this.summaryData.Countries[i][param];
        return value;
      }
    }
    return value;
  }

  getMouseCoordinate() {
    document.querySelector("#map").addEventListener("mousemove", (e) => {
      this.x = e.pageX;
      this.y = e.pageY;
    }, false);
  }

  addFullSrceenButton() {
    const mapp = document.querySelector("#map");
    const fullScreenButton = document.createElement("button");
    fullScreenButton.classList.add("map__full-screen-button");
    fullScreenButton.setAttribute("title", "Full Screen");
    fullScreenButton.innerHTML = "<span class=\"material-icons\">fullscreen</span>";
    mapp.appendChild(fullScreenButton);

    fullScreenButton.addEventListener("click", () => {
      mapp.classList.toggle("map--fullscreen");
      // console.log(this.map);
      this.map.invalidateSize();
    });
  }
}
