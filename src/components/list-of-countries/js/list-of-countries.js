/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable import/no-cycle */

import Properties from "../../properties";
import create from "../../create";
import getData from "../../api";
import en from "./en";
// import Keyboard from "./Keyboard";

const summary = "summaryRoute";
const main = document.querySelector(".grid-wrapper");
const keyboardWrapper = create("div", "keyboard-wrapper keyboard--hidden", null, main);
const tableBlock = document.querySelector(".countries-table");
const totalCases = document.querySelector(".total-cases");
const lastUpdate = document.querySelector(".last-update");
const search = document.querySelector(".search");
// const countryDay = "countryDayOneRoute";
const countryDay = "countryDayOneTotalRoute";
const deathsButton = create("div", "deaths-button", null, totalCases);
const recoverButton = create("div", "recovered-button", null, totalCases);
const totalButton = create("div", "hidden-button", null, totalCases);
const keyboardButton = create("i", "material-icons keyboard", "keyboard", search);
const searchInput = create("input", "search-input", null, search, ["type", "text"], ["id", "search-counrty"], ["placeholder", "Search for a Country"]);
// eslint-disable-next-line no-unused-vars
const fullScreenButton = create("i", "material-icons fullscreen", "fullscreen", search);
const total = create("div", "total", null, totalCases);
const totalCaseSwitch = create("div", "switch-total", "Total");
const switcher = create("div", "switcher", null);
const newCaseSwitch = create("div", "switch-none", "New");
const totalSwitch = create("div", "total-switch", [totalCaseSwitch, switcher, newCaseSwitch], total);
const totalDigits = create("div", "total-digits", null, total);

let searchExp = "";
let dataSummary = {};

function changeCases(e) {
  let tempCases = Properties.cases;
  let requestTotal = e.path[0].className;
  switch (requestTotal) {
    case "recovered-button":
      if (tempCases.match(/Total/)) Properties.cases = "TotalRecovered";
      if (tempCases.match(/New/)) Properties.cases = "NewRecovered";
      recoverButton.className = "hidden-button";
      deathsButton.className = "deaths-button";
      totalButton.className = "total-button";
      break;
    case "deaths-button":
      if (tempCases.match(/Total/)) Properties.cases = "TotalDeaths";
      if (tempCases.match(/New/)) Properties.cases = "NewDeaths";
      recoverButton.className = "recovered-button";
      deathsButton.className = "hidden-button";
      totalButton.className = "total-button";
      break;
    case "switcher":
      Properties.cases = tempCases.replace(/New/, "Total");
      break;
    case "switcher-new":
      Properties.cases = tempCases.replace(/Total/, "New");
      break;
    default:
      if (tempCases.match(/Total/)) Properties.cases = "TotalConfirmed";
      if (tempCases.match(/New/)) Properties.cases = "NewConfirmed";
      totalButton.className = "hidden-button";
      recoverButton.className = "recovered-button";
      deathsButton.className = "deaths-button";
  }
  if (!requestTotal.match(/switcher/)) totalCases.className = `total-cases ${requestTotal.split("-")[0]}`;
  listOfCountries(dataSummary);
}

export default function listOfCountries(summaryData) {
  dataSummary = summaryData;
  tableBlock.innerHTML = "";
  let totalClass = {
    TotalConfirmed: "total",
    TotalDeaths: "total-deaths",
    TotalRecovered: "total-recovered",
    NewConfirmed: "total",
    NewDeaths: "total-deaths",
    NewRecovered: "total-recovered",
  };
  if (!dataSummary) dataSummary = JSON.parse(localStorage.getItem(summary));
  const lastUpdateDate = new Date(dataSummary.Date);
  lastUpdate.innerText = `Last Update: ${lastUpdateDate.toLocaleString().slice(0, 17)}`;
  const tr = {};
  let td = {};
  if (Properties.cases.match(/Total/)) totalDigits.innerText = Properties.cases.replace(/Total/, "");
  else { totalDigits.innerText = Properties.cases.replace(/New/, ""); }
  dataSummary.Countries.filter(a => a.Slug.includes(searchExp.toLowerCase()))
    .sort((a, b) => sortBy(a, b)).forEach((country, i) => {
      tr[i] = create("tr", `country-row ${country.Slug}`, null, tableBlock);
      const flagImg = create("img", `country-flag ${country.Slug}`, null, null, ["src", `https://www.countryflags.io/${country.CountryCode}/flat/24.png`], ["alt", `${country.Slug} flag`]);
      td.Flag = create("td", `flag ${country.Slug}`, [flagImg], tr[i]);
      td.Country = create("td", `country ${country.Slug}`, country.Country, tr[i]);
      td.Total = create("td", `${totalClass[Properties.cases]}`, `${country[Properties.cases]}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "), tr[i]);
      tr[i].addEventListener("click", (e) => { getData(countryDay, e.path[1].className.slice(12)); });
    });
}

function sortBy(a, b) {
  return b[Properties.cases] - a[Properties.cases];
}

recoverButton.addEventListener("click", (e) => { changeCases(e); });
deathsButton.addEventListener("click", (e) => { changeCases(e); });
totalButton.addEventListener("click", (e) => { changeCases(e); });
keyboardButton.addEventListener("click", () => { hideKeyboardEvent(); });
switcher.addEventListener("click", (e) => { switchTotal(e); });

document.addEventListener("click", (e) => {
  let targt = e.target;
  let isKeyboardWrapper = targt === keyboardWrapper || keyboardWrapper.contains(targt) || search.contains(targt);
  let keyboardWrapperIsActive = keyboardWrapper.classList.contains("keyboard-wrapper");
  if (keyboardWrapperIsActive && !isKeyboardWrapper) {
    keyboardWrapper.classList = "keyboard-wrapper keyboard--hidden";
  }
});

function switchTotal(e) {
  if (switcher.className === "switcher") {
    switcher.className = "switcher-new";
    totalCaseSwitch.className = "switch-none";
    newCaseSwitch.className = "switch-new";
    totalSwitch.className = "total-switch-new";
    changeCases(e);
  } else {
    switcher.className = "switcher";
    newCaseSwitch.className = "switch-none";
    totalCaseSwitch.className = "switch-total";
    totalSwitch.className = "total-switch";
    changeCases(e);
  }
}

function hideKeyboardEvent() {
  let hiddenKeyboard = keyboardWrapper.classList.length === 1;
  if (hiddenKeyboard) {
    keyboardWrapper.classList.add("keyboard--hidden");
  } else {
    keyboardWrapper.classList.remove("keyboard--hidden");
  }
}

// Keyboard block

const rowsOrder = [
  ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP"],
  ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Backspace"],
  ["ArrowLeft", "ArrowRight", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Space"],
];

class Key {
  constructor({ small, shift, code }) {
    this.code = code;
    this.small = small;
    this.shift = shift;
    this.icon = null;
    this.isFnKey = Boolean(code.match(/Arrow|Backspace|Space/));

    if (shift && shift.match(/[^a-zA-Z]/)) {
      this.sub = create("div", "sub", this.shift);
    } else {
      this.sub = create("div", "sub", "");
    }
    this.letter = create("div", "letter", this.small);
    if (code.match(/Backspace/)) this.icon = create("i", "material-icons", "backspace");
    if (code.match(/Space/)) this.icon = create("i", "material-icons", "space_bar");
    if (code.match(/ArrowLeft/)) this.icon = create("i", "material-icons", "keyboard_arrow_left");
    if (code.match(/ArrowRight/)) this.icon = create("i", "material-icons", "keyboard_arrow_right");
    this.div = create("div", "keyboard__key", [this.sub, this.letter, this.icon], null, ["code", this.code],
      this.isFnKey ? ["fn", "true"] : ["fn", "false"]);
  }
}

class Keyboard {
  constructor(rowOrder) {
    this.rowsOrder = rowOrder;
    this.keysPressed = {};
  }

  init() {
    this.output = searchInput;
    this.wrapper = keyboardWrapper;
    this.container = create("div", "keyboard", null, this.wrapper);
    document.body.prepend(main);
    return this;
  }

  generateLayout() {
    this.keyButtons = [];
    this.rowsOrder.forEach((row, i) => {
      const rowElement = create("div", "keyboard__row", null, this.container, ["row", i + 1]);
      rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;
      row.forEach((code) => {
        const keyObj = en.find(key => key.code === code);
        if (keyObj) {
          const keyButton = new Key(keyObj);
          this.keyButtons.push(keyButton);
          rowElement.appendChild(keyButton.div);
        }
      });
    });

    document.addEventListener("keydown", this.handleEvent);
    document.addEventListener("keyup", this.handleEvent);
    this.container.onmousedown = this.preHandleEvent;
    this.container.onmouseup = this.preHandleEvent;
  }

    preHandleEvent = (e) => {
      e.stopPropagation();
      const keyDiv = e.target.closest(".keyboard__key");
      if (!keyDiv) return;
      const { dataset: { code } } = keyDiv;
      keyDiv.addEventListener("mouseleave", this.resetButtonState);
      this.handleEvent({ code, type: e.type });
    };

    resetButtonState = ({ target: { dataset: { code } } }) => {
      const keyObj = this.keyButtons.find(key => key.code === code);
      keyObj.div.classList.remove("active");
      keyObj.div.removeEventListener("mouseleave", this.resetButtonState);
    }

    handleEvent = (e) => {
      if (e.stopPropagation) e.stopPropagation();
      const { code, type } = e;
      const keyObj = this.keyButtons.find(key => key.code === code);
      if (!keyObj) return;
      this.output.focus();
      // On key pressed
      if (type.match(/keydown|mousedown/)) {
        if (type.match(/key/)) e.preventDefault();
        if (code.match(/Hide/)) hideKeyboardEvent();
        this.printToOutput(keyObj, keyObj.small);
        searchExp = this.output.value;
        console.log(this.output.value);
        listOfCountries(dataSummary);
      }
      keyObj.div.classList.add("active");
      // remove 'active' classes
      if (!code.match(/Speach/)) {
        keyObj.div.classList.remove("active");
      }
    }

    printToOutput(keyObj, symbol) {
      let cursorPos = this.output.selectionStart;
      const left = this.output.value.slice(0, cursorPos);
      const right = this.output.value.slice(cursorPos);

      const fnButtonsHandler = {
        Tab: () => {
          this.output.value = `${left}\t${right}`;
          cursorPos += 1;
        },
        ArrowLeft: () => {
          cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;
        },
        ArrowRight: () => {
          cursorPos += 1;
        },
        Backspace: () => {
          this.output.value = `${left.slice(0, -1)}${right}`;
          cursorPos -= 1;
        },
        Hide: () => {
          this.output.value = `${left}${right}`;
        },
        Speach: () => {
          this.output.value = `${left}${right}`;
        },
        Space: () => {
          this.output.value = `${left} ${right}`;
          cursorPos += 1;
        },
      };

      if (fnButtonsHandler[keyObj.code]) {
        fnButtonsHandler[keyObj.code]();
      } else if (!keyObj.isFnKey) {
        cursorPos += 1;
        this.output.value = `${left}${symbol || ""}${right}`;
      }
      this.output.setSelectionRange(cursorPos, cursorPos);
    }
}

new Keyboard(rowsOrder).init().generateLayout();
