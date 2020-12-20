/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import * as coordinatesApis from "../../../api/coordinats.json";

export default class Map {
  constructor(summaryData) {
    this.summaryData = summaryData;
    this.jsonCountryCoordinates = null;
    this.arrCountryCodes = [];
    this.coordinates = [];
    this.x = 0;
    this.y = 0;
  }

  getMap() {
    this.getMouseCoordinate();
    Map.addFullSrceenButton();
    // console.log(this.summaryData.Countries);
    const tooltip = document.createElement("div");
    tooltip.classList.add("map__tooltip", "map__tooltip--hide");
    document.querySelector(".grid-wrapper").appendChild(tooltip);

    this.getCountryCoordinates();
    const param = "TotalConfirmed";

    // Creating map options
    const mapOptions = {
      minZoom: 1,
      maxZoom: 10,
    };

    // Creating a map object
    // eslint-disable-next-line new-cap
    const map = new L.map("map", mapOptions);
    map.setView([10, 10], 2);

    // Creating a Layer object
    const layer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      noWrap: true,
      bounds: [
        [-90, -180],
        [90, 180],
      ],
    });

    // Adding layer to the map
    map.addLayer(layer);

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
      circle.addTo(map);

      // L.DomUtil.addClass(circle._path, item.country_code);

      circle.addEventListener("mouseover", (e) => {
        // console.log(e.target.getLatLng(), e.target.options.id, e.target.options.val);
        tooltip.style.top = `${this.y + 20}px`;
        tooltip.style.left = `${this.x + 10}px`;
        tooltip.classList.remove("map__tooltip--hide");
        tooltip.innerHTML = `${item.name}<br>${value}`;
      });

      circle.addEventListener("mouseout", () => {
        tooltip.classList.add("map__tooltip--hide");
      });

      circle.addEventListener("click", (e) => {
        console.log(e.target.getLatLng(), e.target.options.id, e.target.options.val);
      });
    });

    /* Change param buttons */
    const paramChanger = L.control({ position: "bottomleft" });

    paramChanger.onAdd = (map) => {
      const div = L.DomUtil.create("div", "map__param-changer");
      div.innerHTML += "<button><span class=\"material-icons\">arrow_left</span></button>";
      div.innerHTML += `<span class="map__param">${param}</span>`;
      div.innerHTML += "<button><span class=\"material-icons\">arrow_right</span></button>";
      return div;
    };

    paramChanger.addTo(map);

    /* Legend specific */
    const legend = L.control({ position: "bottomleft" });

    legend.onAdd = (map) => {
      const div = L.DomUtil.create("div", "map__legend");
      div.innerHTML += "<i style=\"background: green\"></i><span><1000</span><br>";
      div.innerHTML += "<i style=\"background: yellow\"></i><span><100000</span><br>";
      div.innerHTML += "<i style=\"background: orange\"></i><span><250000</span><br>";
      div.innerHTML += "<i style=\"background: red\"></i><span><500000</span><br>";
      div.innerHTML += "<i style=\"background: darkred\"></i><span>>500000</span><br>";
      return div;
    };

    legend.addTo(map);

    // Adding pop-up to the marker
    // marker.bindPopup("Hi Welcome to Tutorialspoint").openPopup();
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
    console.log(this.summaryData);
    Object.keys(this.summaryData.Countries).forEach((i) => {
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
      // console.log(`Position: (${e.clientX}, ${e.clientY})`);
    }, false);
  }

  static addFullSrceenButton() {
    const map = document.querySelector("#map");
    const fullScreenButton = document.createElement("button");
    fullScreenButton.classList.add("map__full-screen-button");
    fullScreenButton.setAttribute("title", "Full Screen");
    fullScreenButton.innerHTML = "<span class=\"material-icons\">fullscreen</span>";
    map.appendChild(fullScreenButton);

    fullScreenButton.addEventListener("click", () => {
      map.classList.toggle("map--fullscreen");
    });
  }
}
