/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

eval("function _arrayLikeToArray(arr, len) {\r\n  if (len == null || len > arr.length) len = arr.length;\r\n\r\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\r\n    arr2[i] = arr[i];\r\n  }\r\n\r\n  return arr2;\r\n}\r\n\r\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("function _arrayWithHoles(arr) {\r\n  if (Array.isArray(arr)) return arr;\r\n}\r\n\r\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\r\n\r\nfunction _arrayWithoutHoles(arr) {\r\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\r\n}\r\n\r\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\r\n  try {\r\n    var info = gen[key](arg);\r\n    var value = info.value;\r\n  } catch (error) {\r\n    reject(error);\r\n    return;\r\n  }\r\n\r\n  if (info.done) {\r\n    resolve(value);\r\n  } else {\r\n    Promise.resolve(value).then(_next, _throw);\r\n  }\r\n}\r\n\r\nfunction _asyncToGenerator(fn) {\r\n  return function () {\r\n    var self = this,\r\n        args = arguments;\r\n    return new Promise(function (resolve, reject) {\r\n      var gen = fn.apply(self, args);\r\n\r\n      function _next(value) {\r\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\r\n      }\r\n\r\n      function _throw(err) {\r\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\r\n      }\r\n\r\n      _next(undefined);\r\n    });\r\n  };\r\n}\r\n\r\nmodule.exports = _asyncToGenerator;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) {\r\n  if (!(instance instanceof Constructor)) {\r\n    throw new TypeError(\"Cannot call a class as a function\");\r\n  }\r\n}\r\n\r\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module) => {

eval("function _defineProperties(target, props) {\r\n  for (var i = 0; i < props.length; i++) {\r\n    var descriptor = props[i];\r\n    descriptor.enumerable = descriptor.enumerable || false;\r\n    descriptor.configurable = true;\r\n    if (\"value\" in descriptor) descriptor.writable = true;\r\n    Object.defineProperty(target, descriptor.key, descriptor);\r\n  }\r\n}\r\n\r\nfunction _createClass(Constructor, protoProps, staticProps) {\r\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\r\n  if (staticProps) _defineProperties(Constructor, staticProps);\r\n  return Constructor;\r\n}\r\n\r\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("function _iterableToArray(iter) {\r\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\r\n}\r\n\r\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("function _iterableToArrayLimit(arr, i) {\r\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\r\n  var _arr = [];\r\n  var _n = true;\r\n  var _d = false;\r\n  var _e = undefined;\r\n\r\n  try {\r\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\r\n      _arr.push(_s.value);\r\n\r\n      if (i && _arr.length === i) break;\r\n    }\r\n  } catch (err) {\r\n    _d = true;\r\n    _e = err;\r\n  } finally {\r\n    try {\r\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\r\n    } finally {\r\n      if (_d) throw _e;\r\n    }\r\n  }\r\n\r\n  return _arr;\r\n}\r\n\r\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("function _nonIterableRest() {\r\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\r\n}\r\n\r\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("function _nonIterableSpread() {\r\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\r\n}\r\n\r\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\r\n\r\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\r\n\r\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\r\n\r\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\r\n\r\nfunction _slicedToArray(arr, i) {\r\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\r\n}\r\n\r\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\r\n\r\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\r\n\r\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\r\n\r\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\r\n\r\nfunction _toConsumableArray(arr) {\r\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\r\n}\r\n\r\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(obj) {\r\n  \"@babel/helpers - typeof\";\r\n\r\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\r\n    module.exports = _typeof = function _typeof(obj) {\r\n      return typeof obj;\r\n    };\r\n  } else {\r\n    module.exports = _typeof = function _typeof(obj) {\r\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\r\n    };\r\n  }\r\n\r\n  return _typeof(obj);\r\n}\r\n\r\nmodule.exports = _typeof;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\r\n\r\nfunction _unsupportedIterableToArray(o, minLen) {\r\n  if (!o) return;\r\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\r\n  var n = Object.prototype.toString.call(o).slice(8, -1);\r\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\r\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\r\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\r\n}\r\n\r\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\r\n\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./src/components/api.js":
/*!*******************************!*
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ getData\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_default_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/default.json */ \"./src/api/default.json\");\n/* harmony import */ var _api_default_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_api_default_json__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\n/* eslint-disable import/no-cycle */\n\n // import listOfCountries from \"./list-of-countries/js/list-of-countries\";\n// import chart from './chart/js/chart.js'\n// import map from './map/js/map.js'\n// import country-data from './country-data/js/country-data.js'\n\nvar apiPaths = _api_default_json__WEBPACK_IMPORTED_MODULE_2__[0]; // const summary = \"summaryRoute\";\n// const countries = \"countriesRoute\";\n// const countryDay = \"countryDayOneRoute\";\n// const countryTotalDay = \"countryDayOneTotalRoute\";\n// const country = \"ukraine\";\n\nvar summaryUrl = \"https://api.covid19api.com/summary\";\nvar UpdatePeriod = 14;\nvar url = \"\";\nvar categoryData = {};\n\nfunction getApi(_x, _x2) {\n  return _getApi.apply(this, arguments);\n}\n\nfunction _getApi() {\n  _getApi = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(category, country) {\n    var response, result;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url);\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            result = _context.sent;\n\n            if (result.Message !== \"Caching in progress\") {\n              if (country) localStorage.setItem(\"\".concat(category, \"-\").concat(country), JSON.stringify(result));else {\n                localStorage.setItem(category, JSON.stringify(result));\n              }\n              _index__WEBPACK_IMPORTED_MODULE_3__.default.set(result, category);\n            } else {\n              console.log(result.Message);\n            }\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getApi.apply(this, arguments);\n}\n\nfunction getData(_x3, _x4) {\n  return _getData.apply(this, arguments);\n}\n\nfunction _getData() {\n  _getData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(category, country) {\n    var date, categoryApi, baseUrl, catUrl, LastUpdate, deltaHours;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            date = new Date();\n            categoryApi = category;\n\n            if (categoryApi) {\n              baseUrl = apiPaths.baseUrl.Path;\n              catUrl = apiPaths[categoryApi].Path;\n              if (catUrl.match(/:country/) && country) catUrl = catUrl.replace(/:country/, country);\n              url = baseUrl + catUrl;\n            } else {\n              url = summaryUrl;\n              categoryApi = \"summaryRoute\";\n            }\n\n            if (country) categoryData = JSON.parse(localStorage.getItem(\"\".concat(categoryApi, \"-\").concat(country)));else {\n              categoryData = JSON.parse(localStorage.getItem(categoryApi));\n            }\n\n            if (categoryData) {\n              LastUpdate = new Date(categoryData.Date);\n              deltaHours = new Date(date - LastUpdate).getHours();\n              if (deltaHours > UpdatePeriod) getApi(categoryApi, country);else {\n                getApi(categoryApi, country);\n              }\n            } else {\n              getApi(categoryApi, country);\n            }\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _getData.apply(this, arguments);\n}\n\n//# sourceURL=webpack://covid/./src/components/api.js?");

/***/ }),

/***/ "./src/components/chart/js/chart.js":
/*!******************************************!*
  !*** ./src/components/chart/js/chart.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chart\": () => /* binding */ chart\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction chart(_x, _x2) {\n  return _chart.apply(this, arguments);\n}\n\nfunction _chart() {\n  _chart = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(country, signification) {\n    var countrySignifications, container, ctx, chart, getCountrySignifications, _getCountrySignifications, getColor;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            getColor = function _getColor() {\n              var colorDeaths = '#D2374A';\n              var colorRecovered = '#5D9700';\n              var colorConfirmed = '#EDB021';\n              if (signification === 'Confirmed') return colorConfirmed;else if (signification === 'Deaths') return colorDeaths;else if (signification === 'Recovered') return colorRecovered;else console.error('Wrong signification. Should be Deaths || Confirmed || Recovered');\n            };\n\n            _getCountrySignifications = function _getCountrySignificat2() {\n              _getCountrySignifications = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(sign) {\n                var arr, res, data;\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        arr = [];\n\n                        if (!(country === 'world')) {\n                          _context.next = 11;\n                          break;\n                        }\n\n                        _context.next = 4;\n                        return fetch(\"https://api.covid19api.com/world\");\n\n                      case 4:\n                        res = _context.sent;\n                        _context.next = 7;\n                        return res.json();\n\n                      case 7:\n                        data = _context.sent;\n                        data.forEach(function (e) {\n                          return arr.push(e[\"Total\".concat(sign)]);\n                        });\n                        _context.next = 12;\n                        break;\n\n                      case 11:\n                        try {\n                          country.forEach(function (e) {\n                            return arr.push(e[sign]);\n                          });\n                        } catch (error) {\n                          console.error(error);\n                        }\n\n                      case 12:\n                        return _context.abrupt(\"return\", arr);\n\n                      case 13:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n              return _getCountrySignifications.apply(this, arguments);\n            };\n\n            getCountrySignifications = function _getCountrySignificat(_x3) {\n              return _getCountrySignifications.apply(this, arguments);\n            };\n\n            _context2.next = 5;\n            return getCountrySignifications(signification);\n\n          case 5:\n            countrySignifications = _context2.sent;\n            container = document.querySelector('.chart');\n            container.innerHTML = \"\\n      <button type=\\\"button\\\" class=\\\"full-screen-but hide-button\\\"></button>\\n      <canvas id=\\\"chartCanvas\\\"></canvas>\\n  \";\n            ctx = document.querySelector('#chartCanvas').getContext(\"2d\");\n            chart = {\n              type: \"bar\",\n              data: {\n                labels: countrySignifications,\n                datasets: [{\n                  data: countrySignifications,\n                  backgroundColor: getColor()\n                }]\n              },\n              options: {\n                scales: {\n                  xAxes: [{\n                    ticks: {\n                      display: false\n                    },\n                    gridLines: {\n                      display: false\n                    },\n                    stacked: true\n                  }],\n                  yAxes: [{\n                    ticks: {\n                      beginAtZero: true,\n                      callback: function callback(label) {\n                        if (label >= 1000000) {\n                          return label / 1000000 + 'M';\n                        } else if (label >= 1000) {\n                          return label / 1000 + 'k';\n                        } else {\n                          return label;\n                        }\n                      }\n                    },\n                    gridLines: {\n                      color: \"rgba(215, 236, 244,0.10)\"\n                    },\n                    stacked: true\n                  }]\n                },\n                legend: {\n                  display: false\n                },\n                tooltips: {\n                  yPadding: 8,\n                  xPadding: 8,\n                  caretSize: 8,\n                  displayColors: false,\n                  bodyFontColor: getColor(),\n                  callbacks: {\n                    title: function title(tooltipItems, data) {\n                      var dataLength = data.labels.length;\n                      var dateFrom = moment(Date.now() - (dataLength - tooltipItems[0].index - 1) * 24 * 3600 * 1000).format('MMMM Do YYYY');\n                      return \"Date: \".concat(dateFrom);\n                    },\n                    label: function label(tooltipItems) {\n                      return \"\".concat(signification, \": \").concat(Intl.NumberFormat().format(tooltipItems.yLabel));\n                    }\n                  }\n                }\n              }\n            };\n            Chart.defaults.global.defaultFontFamily = 'Arial';\n            Chart.defaults.global.defaultFontSize = 14;\n            new Chart(ctx, chart);\n            container.addEventListener('mouseover', function () {\n              if (document.querySelector('.full-screen-but').classList.contains('hide-button')) {\n                document.querySelector('.full-screen-but').classList.toggle('hide-button');\n              }\n            });\n            container.addEventListener('mouseleave', function () {\n              if (!document.querySelector('.full-screen-but').classList.contains('hide-button')) {\n                document.querySelector('.full-screen-but').classList.toggle('hide-button');\n              }\n            });\n            document.querySelector('.full-screen-but').addEventListener('mouseup', function () {\n              document.querySelector('.full-screen').showModal();\n              document.querySelector('#pop-content').innerHTML = '<canvas id=\"chartCanvasBig\"></canvas>';\n              var ctxBig = document.querySelector('#chartCanvasBig').getContext(\"2d\");\n              new Chart(ctxBig, chart);\n            });\n            document.querySelector('#pop-close').addEventListener('click', function () {\n              document.querySelector('.full-screen').close();\n            });\n            ;\n\n          case 18:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _chart.apply(this, arguments);\n}\n\n//# sourceURL=webpack://covid/./src/components/chart/js/chart.js?");

/***/ }),

/***/ "./src/components/create.js":
/*!**********************************!*
  !*** ./src/components/create.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ create\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n/* eslint no-useless-rename: [\"error\", { ignoreExport: true }] */\n\n/** *\n * @param {String} el\n * @param {String} classNames\n * @param {HTMLElement} child\n * @param {HTMLElement} parent\n * @param {...Array} dataAttr\n */\nfunction create(el, classNames, child, parent) {\n  var element = null;\n\n  try {\n    element = document.createElement(el);\n  } catch (error) {\n    throw new Error(\"Unable to create HTMLelement! Give a proper tag name\");\n  }\n\n  if (classNames) {\n    var _element$classList;\n\n    (_element$classList = element.classList).add.apply(_element$classList, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(classNames.split(\" \")));\n  }\n\n  if (child && Array.isArray(child)) {\n    child.forEach(function (childElement) {\n      return childElement && element.appendChild(childElement);\n    });\n  } else if (child && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(child) === \"object\") {\n    element.appendChild(child);\n  } else if (child && typeof child === \"string\") {\n    element.innerText = child;\n  }\n\n  if (parent) {\n    parent.appendChild(element);\n  } // <span id=\"\" data-code=\"\"></span> el.dataset.code = \"\"  disabled\n\n\n  for (var _len = arguments.length, dataAttr = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {\n    dataAttr[_key - 4] = arguments[_key];\n  }\n\n  if (dataAttr.length) {\n    dataAttr.forEach(function (_ref) {\n      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n          attrName = _ref2[0],\n          attrValue = _ref2[1];\n\n      if (attrValue === \"\") {\n        element.setAttribute(attrName, \"\");\n      }\n\n      if (attrName.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck|contenteditable|src|alt/)) {\n        element.setAttribute(attrName, attrValue);\n      } else {\n        element.dataset[attrName] = attrValue;\n      }\n    });\n  }\n\n  return element;\n}\n\n//# sourceURL=webpack://covid/./src/components/create.js?");

/***/ }),

/***/ "./src/components/list-of-countries/js/list-of-countries.js":
/*!******************************************************************!*
  !*** ./src/components/list-of-countries/js/list-of-countries.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ listOfCountries\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../create */ \"./src/components/create.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ \"./src/components/api.js\");\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable prefer-const */\n\n/* eslint-disable import/no-cycle */\n// import Page from '../../../index.js'\n\n\nvar summary = \"summaryRoute\";\nvar tableBlock = document.querySelector(\".countries-table\");\nvar totalCases = document.querySelector(\".total-cases\");\nvar lastUpdate = document.querySelector(\".last-update\");\nvar search = document.querySelector(\".search\");\nvar countryDay = \"countryDayOneRoute\";\nvar deathsButton = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"deaths-button\", null, totalCases);\nvar recoverButton = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"recovered-button\", null, totalCases);\nvar totalButton = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"total-button-hidden\", null, totalCases);\nvar searchInput = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"input\", null, null, search, [\"type\", \"text\"], [\"id\", \"search-counrty\"], [\"placeholder\", \"Search for a Country\"]);\nvar total = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"total\", null, totalCases);\nvar searchExp = \"\";\nvar cases = 0;\nvar dataSummary = {};\n\nfunction changeCases(e) {\n  var requestTotal = e.path[0].className;\n\n  switch (requestTotal) {\n    case \"recovered-button\":\n      cases = 2;\n      recoverButton.className = \"hidden-button\";\n      deathsButton.className = \"deaths-button\";\n      totalButton.className = \"total-button\";\n      break;\n\n    case \"deaths-button\":\n      cases = 1;\n      recoverButton.className = \"recovered-button\";\n      deathsButton.className = \"hidden-button\";\n      totalButton.className = \"total-button\";\n      break;\n\n    default:\n      cases = 0;\n      totalButton.className = \"hidden-button\";\n      recoverButton.className = \"recovered-button\";\n      deathsButton.className = \"deaths-button\";\n  }\n\n  totalCases.className = \"total-cases \".concat(requestTotal.split(\"-\")[0]);\n  listOfCountries(dataSummary);\n}\n\nfunction listOfCountries(summaryData) {\n  dataSummary = summaryData;\n  tableBlock.innerHTML = \"\";\n  var totalData = [\"\".concat(dataSummary.Global.TotalConfirmed), \"\".concat(dataSummary.Global.TotalDeaths), \"\".concat(dataSummary.Global.TotalRecovered)];\n  var totalClass = [\"total\", \"total-deaths\", \"total-recovered\"];\n  if (!dataSummary) dataSummary = JSON.parse(localStorage.getItem(summary));\n  var lastUpdateDate = new Date(dataSummary.Date);\n  lastUpdate.innerText = \"Last Update: \".concat(lastUpdateDate.toLocaleString().slice(0, 17));\n  var tr = {};\n  var td = {};\n  total.innerText = totalData[cases].toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \" \");\n  dataSummary.Countries.filter(function (a) {\n    return a.Slug.includes(searchExp.toLowerCase());\n  }).sort(function (a, b) {\n    return sortBy(a, b);\n  }).forEach(function (country, i) {\n    var viewCountry = [\"\".concat(country.TotalConfirmed), \"\".concat(country.TotalDeaths), \"\".concat(country.TotalRecovered)];\n    tr[i] = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"tr\", \"country-row \".concat(country.Slug), null, tableBlock);\n    var flagImg = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"img\", \"country-flag \".concat(country.Slug), null, null, [\"src\", \"https://www.countryflags.io/\".concat(country.CountryCode, \"/flat/24.png\")], [\"alt\", \"\".concat(country.Slug, \" flag\")]);\n    td.Flag = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"td\", \"flag \".concat(country.Slug), [flagImg], tr[i]);\n    td.Country = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"td\", \"country \".concat(country.Slug), country.Country, tr[i]);\n    td.Total = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"td\", \"\".concat(totalClass[cases]), viewCountry[cases].toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \" \"), tr[i]);\n    tr[i].addEventListener(\"click\", function (e) {\n      (0,_api__WEBPACK_IMPORTED_MODULE_1__.default)(countryDay, e.path[1].className.slice(12));\n    });\n  });\n}\n\nfunction sortBy(a, b) {\n  if (cases === 0) return b.TotalConfirmed - a.TotalConfirmed;\n  if (cases === 1) return b.TotalDeaths - a.TotalDeaths;\n  if (cases === 2) return b.TotalRecovered - a.TotalRecovered;\n  return b.TotalConfirmed - a.TotalConfirmed;\n}\n\nrecoverButton.addEventListener(\"click\", function (e) {\n  changeCases(e);\n});\ndeathsButton.addEventListener(\"click\", function (e) {\n  changeCases(e);\n});\ntotalButton.addEventListener(\"click\", function (e) {\n  changeCases(e);\n});\nsearchInput.addEventListener(\"input\", function (e) {\n  searchExp = e.target.value;\n  listOfCountries(dataSummary);\n});\n\n//# sourceURL=webpack://covid/./src/components/list-of-countries/js/list-of-countries.js?");

/***/ }),

/***/ "./src/components/map/js/map.js":
/*!**************************************!*
  !*** ./src/components/map/js/map.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Map\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Map = /*#__PURE__*/function () {\n  function Map(summaryData) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Map);\n\n    this.summaryData = summaryData;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Map, [{\n    key: \"getMap\",\n    value: function getMap() {\n      console.log(this.summaryData);\n    }\n  }]);\n\n  return Map;\n}();\n\n\n\n//# sourceURL=webpack://covid/./src/components/map/js/map.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/api */ \"./src/components/api.js\");\n/* harmony import */ var _components_list_of_countries_js_list_of_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/list-of-countries/js/list-of-countries */ \"./src/components/list-of-countries/js/list-of-countries.js\");\n/* harmony import */ var _components_chart_js_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/chart/js/chart */ \"./src/components/chart/js/chart.js\");\n/* harmony import */ var _components_map_js_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/map/js/map */ \"./src/components/map/js/map.js\");\n/* eslint-disable import/no-cycle */\n// import \"./components/index.css\";\n\n\n\n // import map from './components/map/js/map.js'\n//  import country-data from './components/country-data/js/country-data.js'\n\nvar summary = \"summaryRoute\"; // const countries = \"countriesRoute\";\n// const countryDay = \"countryDayOneRoute\";\n// const countryTotalDay = \"countryDayOneTotalRoute\";\n// const country = \"ukraine\";\n\nvar Page = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page = {\n  elements: {\n    main: \"\"\n  },\n  properties: {\n    summary: {},\n    lastUpdate: \"\"\n  },\n  init: function init() {\n    (0,_components_api__WEBPACK_IMPORTED_MODULE_0__.default)(summary);\n  },\n  set: function set(categoryData, category) {\n    var map = new _components_map_js_map__WEBPACK_IMPORTED_MODULE_3__.default(categoryData);\n\n    switch (category) {\n      case \"countryDayOneRoute\":\n        (0,_components_chart_js_chart__WEBPACK_IMPORTED_MODULE_2__.chart)(categoryData, \"Confirmed\");\n        map.getMap();\n        break;\n\n      case \"countryTotalDayOneRoute\":\n        (0,_components_chart_js_chart__WEBPACK_IMPORTED_MODULE_2__.chart)(categoryData, \"Confirmed\");\n        map.getMap();\n        break;\n\n      case \"summaryRoute\":\n        (0,_components_list_of_countries_js_list_of_countries__WEBPACK_IMPORTED_MODULE_1__.default)(categoryData, category);\n        (0,_components_chart_js_chart__WEBPACK_IMPORTED_MODULE_2__.chart)(\"world\", \"Confirmed\");\n        map.getMap();\n        break;\n\n      default:\n        (0,_components_chart_js_chart__WEBPACK_IMPORTED_MODULE_2__.chart)(categoryData, \"Confirmed\");\n        map.getMap();\n    }\n  }\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  Page.init();\n});\n\n//# sourceURL=webpack://covid/./src/index.js?");

/***/ }),

/***/ "./src/api/default.json":
/*!******************************!*
  !*** ./src/api/default.json ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = [{\"baseUrl\":{\"Name\":\"Get List Of Countries\",\"Description\":\"Returns all countries and associated provinces. The country_slug variable is used for country specific data\",\"Path\":\"https://api.covid19api.com\"},\"countriesRoute\":{\"Name\":\"Get List Of Countries\",\"Description\":\"Returns all countries and associated provinces. The country_slug variable is used for country specific data\",\"Path\":\"/countries\"},\"countryDayOneRoute\":{\"Name\":\"Get List Of Cases Per Country Per Province By Case Type From The First Recorded Case\",\"Description\":\"Returns all cases by case type for a country from the first recorded case. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/dayone/country/:country\"},\"countryDayOneTotalRoute\":{\"Name\":\"Get List Of Cases Per Country By Case Type From The First Recorded Case\",\"Description\":\"Returns all cases by case type for a country from the first recorded case. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/total/dayone/country/:country\"},\"countryRoute\":{\"Name\":\"Get List Of Cases Per Country Per Province By Case Type\",\"Description\":\"Returns all cases by case type for a country. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/country/:country\"},\"countryStatusDayOneLiveRoute\":{\"Name\":\"Get List Of Cases Per Country Per Province By Case Type From The First Recorded Case, updated with latest live count\",\"Description\":\"Returns all cases by case type for a country from the first recorded case with the latest record being the live count. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/dayone/country/:country/status/:status/live\"},\"countryStatusDayOneRoute\":{\"Name\":\"Get List Of Cases Per Country Per Province By Case Type From The First Recorded Case\",\"Description\":\"Returns all cases by case type for a country from the first recorded case. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/dayone/country/:country/status/:status\"},\"countryStatusDayOneTotalRoute\":{\"Name\":\"Get List Of Cases Per Country By Case Type From The First Recorded Case\",\"Description\":\"Returns all cases by case type for a country from the first recorded case. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/total/dayone/country/:country/status/:status\"},\"countryStatusLiveRoute\":{\"Name\":\"Daily list of cases per Country per Province by Case Type, updated with latest live count\",\"Description\":\"Returns all cases by case type for a country with the latest record being the live count. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/country/:country/status/:status/live\"},\"countryStatusRoute\":{\"Name\":\"Get List Of Cases Per Country Per Province By Case Type\",\"Description\":\"Returns all cases by case type for a country. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/country/:country/status/:status\"},\"countryStatusTotalRoute\":{\"Name\":\"Get List Of Cases Per Country By Case Type\",\"Description\":\"Returns all cases by case type for a country. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/total/country/:country/status/:status\"},\"countryTotalRoute\":{\"Name\":\"Get List Of Cases Per Country By Case Type\",\"Description\":\"Returns all cases by case type for a country. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/total/country/:country\"},\"exportRoute\":{\"Name\":\"Get All Data as a zip file\",\"Description\":\"Returns all data in the system, compressed as a zip file. Warning: this request returns 8MB+ and takes 5+ seconds\",\"Path\":\"/export\"},\"liveCountryRoute\":{\"Name\":\"Get Live List Of Cases Per Country Per Province By Case Type\",\"Description\":\"Returns all live cases by case type for a country. These records are pulled every 10 minutes and are ungrouped. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/live/country/:country\"},\"liveCountryStatusAfterDateRoute\":{\"Name\":\"Get a Time Series Of Cases Per Country Per Province By Case Type After A Date\",\"Description\":\"Returns all live cases by case type for a country after a given date. These records are pulled every 10 minutes and are ungrouped. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/live/country/:country/status/:status/date/:date\"},\"liveCountryStatusRoute\":{\"Name\":\"Get a time series Of Cases Per Country Per Province By Case Type\",\"Description\":\"Returns all live cases by case type for a country. These records are pulled every 10 minutes and are ungrouped. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/live/country/:country/status/:status\"},\"summaryRoute\":{\"Name\":\"Summary of new and total cases per country\",\"Description\":\"A summary of new and total cases per country\",\"Path\":\"/summary\"},\"webhookRoute\":{\"Name\":\"Add a webhook to be notified when new data becomes available\",\"Description\":\"POST Request must be in JSON format with key URL and the value of the webhook. Response data is the same as returned from /summary\",\"Path\":\"/webhook\"},\"countryRoutePremium\":{\"Name\":\"Premium Data: Get List Of Cases Per Country By Case Type\",\"Description\":\"Returns all cases by case type for a country. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/premium/country/:country\"},\"countryRoutePremiumData\":{\"Name\":\"Premium Data: Get Data Per Country\",\"Description\":\"Returns all cases by case type for a country. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/premium/country/data/:country\"},\"countrySummaryRoutePremium\":{\"Name\":\"Premium Data: Get Summary Of World Case Data\",\"Description\":\"Returns summary of all country data\",\"Path\":\"/premium/summary\"},\"countryTestingPremium\":{\"Name\":\"Premium Data: Get Testing Data Per Country\",\"Description\":\"Get data around testing\",\"Path\":\"/premium/country/testing/:country\"},\"travelAdvicePremium\":{\"Name\":\"Premium Data: Travel information for a given country\",\"Description\":\"Returns all cases by case type for a country. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths\",\"Path\":\"/premium/travel/country/:country\"}}]\n\n//# sourceURL=webpack://covid/./src/api/default.json?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("/**\r\n * Copyright (c) 2014-present, Facebook, Inc.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE file in the root directory of this source tree.\r\n */\r\n\r\nvar runtime = (function (exports) {\r\n  \"use strict\";\r\n\r\n  var Op = Object.prototype;\r\n  var hasOwn = Op.hasOwnProperty;\r\n  var undefined; // More compressible than void 0.\r\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\r\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\r\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\r\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\r\n\r\n  function define(obj, key, value) {\r\n    Object.defineProperty(obj, key, {\r\n      value: value,\r\n      enumerable: true,\r\n      configurable: true,\r\n      writable: true\r\n    });\r\n    return obj[key];\r\n  }\r\n  try {\r\n    // IE 8 has a broken Object.defineProperty that only works on DOM objects.\r\n    define({}, \"\");\r\n  } catch (err) {\r\n    define = function(obj, key, value) {\r\n      return obj[key] = value;\r\n    };\r\n  }\r\n\r\n  function wrap(innerFn, outerFn, self, tryLocsList) {\r\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\r\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\r\n    var generator = Object.create(protoGenerator.prototype);\r\n    var context = new Context(tryLocsList || []);\r\n\r\n    // The ._invoke method unifies the implementations of the .next,\r\n    // .throw, and .return methods.\r\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\r\n\r\n    return generator;\r\n  }\r\n  exports.wrap = wrap;\r\n\r\n  // Try/catch helper to minimize deoptimizations. Returns a completion\r\n  // record like context.tryEntries[i].completion. This interface could\r\n  // have been (and was previously) designed to take a closure to be\r\n  // invoked without arguments, but in all the cases we care about we\r\n  // already have an existing method we want to call, so there's no need\r\n  // to create a new function object. We can even get away with assuming\r\n  // the method takes exactly one argument, since that happens to be true\r\n  // in every case, so we don't have to touch the arguments object. The\r\n  // only additional allocation required is the completion record, which\r\n  // has a stable shape and so hopefully should be cheap to allocate.\r\n  function tryCatch(fn, obj, arg) {\r\n    try {\r\n      return { type: \"normal\", arg: fn.call(obj, arg) };\r\n    } catch (err) {\r\n      return { type: \"throw\", arg: err };\r\n    }\r\n  }\r\n\r\n  var GenStateSuspendedStart = \"suspendedStart\";\r\n  var GenStateSuspendedYield = \"suspendedYield\";\r\n  var GenStateExecuting = \"executing\";\r\n  var GenStateCompleted = \"completed\";\r\n\r\n  // Returning this object from the innerFn has the same effect as\r\n  // breaking out of the dispatch switch statement.\r\n  var ContinueSentinel = {};\r\n\r\n  // Dummy constructor functions that we use as the .constructor and\r\n  // .constructor.prototype properties for functions that return Generator\r\n  // objects. For full spec compliance, you may wish to configure your\r\n  // minifier not to mangle the names of these two functions.\r\n  function Generator() {}\r\n  function GeneratorFunction() {}\r\n  function GeneratorFunctionPrototype() {}\r\n\r\n  // This is a polyfill for %IteratorPrototype% for environments that\r\n  // don't natively support it.\r\n  var IteratorPrototype = {};\r\n  IteratorPrototype[iteratorSymbol] = function () {\r\n    return this;\r\n  };\r\n\r\n  var getProto = Object.getPrototypeOf;\r\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\r\n  if (NativeIteratorPrototype &&\r\n      NativeIteratorPrototype !== Op &&\r\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\r\n    // This environment has a native %IteratorPrototype%; use it instead\r\n    // of the polyfill.\r\n    IteratorPrototype = NativeIteratorPrototype;\r\n  }\r\n\r\n  var Gp = GeneratorFunctionPrototype.prototype =\r\n    Generator.prototype = Object.create(IteratorPrototype);\r\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\r\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\r\n  GeneratorFunction.displayName = define(\r\n    GeneratorFunctionPrototype,\r\n    toStringTagSymbol,\r\n    \"GeneratorFunction\"\r\n  );\r\n\r\n  // Helper for defining the .next, .throw, and .return methods of the\r\n  // Iterator interface in terms of a single ._invoke method.\r\n  function defineIteratorMethods(prototype) {\r\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\r\n      define(prototype, method, function(arg) {\r\n        return this._invoke(method, arg);\r\n      });\r\n    });\r\n  }\r\n\r\n  exports.isGeneratorFunction = function(genFun) {\r\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\r\n    return ctor\r\n      ? ctor === GeneratorFunction ||\r\n        // For the native GeneratorFunction constructor, the best we can\r\n        // do is to check its .name property.\r\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\r\n      : false;\r\n  };\r\n\r\n  exports.mark = function(genFun) {\r\n    if (Object.setPrototypeOf) {\r\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\r\n    } else {\r\n      genFun.__proto__ = GeneratorFunctionPrototype;\r\n      define(genFun, toStringTagSymbol, \"GeneratorFunction\");\r\n    }\r\n    genFun.prototype = Object.create(Gp);\r\n    return genFun;\r\n  };\r\n\r\n  // Within the body of any async function, `await x` is transformed to\r\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\r\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\r\n  // meant to be awaited.\r\n  exports.awrap = function(arg) {\r\n    return { __await: arg };\r\n  };\r\n\r\n  function AsyncIterator(generator, PromiseImpl) {\r\n    function invoke(method, arg, resolve, reject) {\r\n      var record = tryCatch(generator[method], generator, arg);\r\n      if (record.type === \"throw\") {\r\n        reject(record.arg);\r\n      } else {\r\n        var result = record.arg;\r\n        var value = result.value;\r\n        if (value &&\r\n            typeof value === \"object\" &&\r\n            hasOwn.call(value, \"__await\")) {\r\n          return PromiseImpl.resolve(value.__await).then(function(value) {\r\n            invoke(\"next\", value, resolve, reject);\r\n          }, function(err) {\r\n            invoke(\"throw\", err, resolve, reject);\r\n          });\r\n        }\r\n\r\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\r\n          // When a yielded Promise is resolved, its final value becomes\r\n          // the .value of the Promise<{value,done}> result for the\r\n          // current iteration.\r\n          result.value = unwrapped;\r\n          resolve(result);\r\n        }, function(error) {\r\n          // If a rejected Promise was yielded, throw the rejection back\r\n          // into the async generator function so it can be handled there.\r\n          return invoke(\"throw\", error, resolve, reject);\r\n        });\r\n      }\r\n    }\r\n\r\n    var previousPromise;\r\n\r\n    function enqueue(method, arg) {\r\n      function callInvokeWithMethodAndArg() {\r\n        return new PromiseImpl(function(resolve, reject) {\r\n          invoke(method, arg, resolve, reject);\r\n        });\r\n      }\r\n\r\n      return previousPromise =\r\n        // If enqueue has been called before, then we want to wait until\r\n        // all previous Promises have been resolved before calling invoke,\r\n        // so that results are always delivered in the correct order. If\r\n        // enqueue has not been called before, then it is important to\r\n        // call invoke immediately, without waiting on a callback to fire,\r\n        // so that the async generator function has the opportunity to do\r\n        // any necessary setup in a predictable way. This predictability\r\n        // is why the Promise constructor synchronously invokes its\r\n        // executor callback, and why async functions synchronously\r\n        // execute code before the first await. Since we implement simple\r\n        // async functions in terms of async generators, it is especially\r\n        // important to get this right, even though it requires care.\r\n        previousPromise ? previousPromise.then(\r\n          callInvokeWithMethodAndArg,\r\n          // Avoid propagating failures to Promises returned by later\r\n          // invocations of the iterator.\r\n          callInvokeWithMethodAndArg\r\n        ) : callInvokeWithMethodAndArg();\r\n    }\r\n\r\n    // Define the unified helper method that is used to implement .next,\r\n    // .throw, and .return (see defineIteratorMethods).\r\n    this._invoke = enqueue;\r\n  }\r\n\r\n  defineIteratorMethods(AsyncIterator.prototype);\r\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\r\n    return this;\r\n  };\r\n  exports.AsyncIterator = AsyncIterator;\r\n\r\n  // Note that simple async functions are implemented on top of\r\n  // AsyncIterator objects; they just return a Promise for the value of\r\n  // the final result produced by the iterator.\r\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\r\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\r\n\r\n    var iter = new AsyncIterator(\r\n      wrap(innerFn, outerFn, self, tryLocsList),\r\n      PromiseImpl\r\n    );\r\n\r\n    return exports.isGeneratorFunction(outerFn)\r\n      ? iter // If outerFn is a generator, return the full iterator.\r\n      : iter.next().then(function(result) {\r\n          return result.done ? result.value : iter.next();\r\n        });\r\n  };\r\n\r\n  function makeInvokeMethod(innerFn, self, context) {\r\n    var state = GenStateSuspendedStart;\r\n\r\n    return function invoke(method, arg) {\r\n      if (state === GenStateExecuting) {\r\n        throw new Error(\"Generator is already running\");\r\n      }\r\n\r\n      if (state === GenStateCompleted) {\r\n        if (method === \"throw\") {\r\n          throw arg;\r\n        }\r\n\r\n        // Be forgiving, per 25.3.3.3.3 of the spec:\r\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\r\n        return doneResult();\r\n      }\r\n\r\n      context.method = method;\r\n      context.arg = arg;\r\n\r\n      while (true) {\r\n        var delegate = context.delegate;\r\n        if (delegate) {\r\n          var delegateResult = maybeInvokeDelegate(delegate, context);\r\n          if (delegateResult) {\r\n            if (delegateResult === ContinueSentinel) continue;\r\n            return delegateResult;\r\n          }\r\n        }\r\n\r\n        if (context.method === \"next\") {\r\n          // Setting context._sent for legacy support of Babel's\r\n          // function.sent implementation.\r\n          context.sent = context._sent = context.arg;\r\n\r\n        } else if (context.method === \"throw\") {\r\n          if (state === GenStateSuspendedStart) {\r\n            state = GenStateCompleted;\r\n            throw context.arg;\r\n          }\r\n\r\n          context.dispatchException(context.arg);\r\n\r\n        } else if (context.method === \"return\") {\r\n          context.abrupt(\"return\", context.arg);\r\n        }\r\n\r\n        state = GenStateExecuting;\r\n\r\n        var record = tryCatch(innerFn, self, context);\r\n        if (record.type === \"normal\") {\r\n          // If an exception is thrown from innerFn, we leave state ===\r\n          // GenStateExecuting and loop back for another invocation.\r\n          state = context.done\r\n            ? GenStateCompleted\r\n            : GenStateSuspendedYield;\r\n\r\n          if (record.arg === ContinueSentinel) {\r\n            continue;\r\n          }\r\n\r\n          return {\r\n            value: record.arg,\r\n            done: context.done\r\n          };\r\n\r\n        } else if (record.type === \"throw\") {\r\n          state = GenStateCompleted;\r\n          // Dispatch the exception by looping back around to the\r\n          // context.dispatchException(context.arg) call above.\r\n          context.method = \"throw\";\r\n          context.arg = record.arg;\r\n        }\r\n      }\r\n    };\r\n  }\r\n\r\n  // Call delegate.iterator[context.method](context.arg) and handle the\r\n  // result, either by returning a { value, done } result from the\r\n  // delegate iterator, or by modifying context.method and context.arg,\r\n  // setting context.delegate to null, and returning the ContinueSentinel.\r\n  function maybeInvokeDelegate(delegate, context) {\r\n    var method = delegate.iterator[context.method];\r\n    if (method === undefined) {\r\n      // A .throw or .return when the delegate iterator has no .throw\r\n      // method always terminates the yield* loop.\r\n      context.delegate = null;\r\n\r\n      if (context.method === \"throw\") {\r\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\r\n        if (delegate.iterator[\"return\"]) {\r\n          // If the delegate iterator has a return method, give it a\r\n          // chance to clean up.\r\n          context.method = \"return\";\r\n          context.arg = undefined;\r\n          maybeInvokeDelegate(delegate, context);\r\n\r\n          if (context.method === \"throw\") {\r\n            // If maybeInvokeDelegate(context) changed context.method from\r\n            // \"return\" to \"throw\", let that override the TypeError below.\r\n            return ContinueSentinel;\r\n          }\r\n        }\r\n\r\n        context.method = \"throw\";\r\n        context.arg = new TypeError(\r\n          \"The iterator does not provide a 'throw' method\");\r\n      }\r\n\r\n      return ContinueSentinel;\r\n    }\r\n\r\n    var record = tryCatch(method, delegate.iterator, context.arg);\r\n\r\n    if (record.type === \"throw\") {\r\n      context.method = \"throw\";\r\n      context.arg = record.arg;\r\n      context.delegate = null;\r\n      return ContinueSentinel;\r\n    }\r\n\r\n    var info = record.arg;\r\n\r\n    if (! info) {\r\n      context.method = \"throw\";\r\n      context.arg = new TypeError(\"iterator result is not an object\");\r\n      context.delegate = null;\r\n      return ContinueSentinel;\r\n    }\r\n\r\n    if (info.done) {\r\n      // Assign the result of the finished delegate to the temporary\r\n      // variable specified by delegate.resultName (see delegateYield).\r\n      context[delegate.resultName] = info.value;\r\n\r\n      // Resume execution at the desired location (see delegateYield).\r\n      context.next = delegate.nextLoc;\r\n\r\n      // If context.method was \"throw\" but the delegate handled the\r\n      // exception, let the outer generator proceed normally. If\r\n      // context.method was \"next\", forget context.arg since it has been\r\n      // \"consumed\" by the delegate iterator. If context.method was\r\n      // \"return\", allow the original .return call to continue in the\r\n      // outer generator.\r\n      if (context.method !== \"return\") {\r\n        context.method = \"next\";\r\n        context.arg = undefined;\r\n      }\r\n\r\n    } else {\r\n      // Re-yield the result returned by the delegate method.\r\n      return info;\r\n    }\r\n\r\n    // The delegate iterator is finished, so forget it and continue with\r\n    // the outer generator.\r\n    context.delegate = null;\r\n    return ContinueSentinel;\r\n  }\r\n\r\n  // Define Generator.prototype.{next,throw,return} in terms of the\r\n  // unified ._invoke helper method.\r\n  defineIteratorMethods(Gp);\r\n\r\n  define(Gp, toStringTagSymbol, \"Generator\");\r\n\r\n  // A Generator should always return itself as the iterator object when the\r\n  // @@iterator function is called on it. Some browsers' implementations of the\r\n  // iterator prototype chain incorrectly implement this, causing the Generator\r\n  // object to not be returned from this call. This ensures that doesn't happen.\r\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\r\n  Gp[iteratorSymbol] = function() {\r\n    return this;\r\n  };\r\n\r\n  Gp.toString = function() {\r\n    return \"[object Generator]\";\r\n  };\r\n\r\n  function pushTryEntry(locs) {\r\n    var entry = { tryLoc: locs[0] };\r\n\r\n    if (1 in locs) {\r\n      entry.catchLoc = locs[1];\r\n    }\r\n\r\n    if (2 in locs) {\r\n      entry.finallyLoc = locs[2];\r\n      entry.afterLoc = locs[3];\r\n    }\r\n\r\n    this.tryEntries.push(entry);\r\n  }\r\n\r\n  function resetTryEntry(entry) {\r\n    var record = entry.completion || {};\r\n    record.type = \"normal\";\r\n    delete record.arg;\r\n    entry.completion = record;\r\n  }\r\n\r\n  function Context(tryLocsList) {\r\n    // The root entry object (effectively a try statement without a catch\r\n    // or a finally block) gives us a place to store values thrown from\r\n    // locations where there is no enclosing try statement.\r\n    this.tryEntries = [{ tryLoc: \"root\" }];\r\n    tryLocsList.forEach(pushTryEntry, this);\r\n    this.reset(true);\r\n  }\r\n\r\n  exports.keys = function(object) {\r\n    var keys = [];\r\n    for (var key in object) {\r\n      keys.push(key);\r\n    }\r\n    keys.reverse();\r\n\r\n    // Rather than returning an object with a next method, we keep\r\n    // things simple and return the next function itself.\r\n    return function next() {\r\n      while (keys.length) {\r\n        var key = keys.pop();\r\n        if (key in object) {\r\n          next.value = key;\r\n          next.done = false;\r\n          return next;\r\n        }\r\n      }\r\n\r\n      // To avoid creating an additional object, we just hang the .value\r\n      // and .done properties off the next function object itself. This\r\n      // also ensures that the minifier will not anonymize the function.\r\n      next.done = true;\r\n      return next;\r\n    };\r\n  };\r\n\r\n  function values(iterable) {\r\n    if (iterable) {\r\n      var iteratorMethod = iterable[iteratorSymbol];\r\n      if (iteratorMethod) {\r\n        return iteratorMethod.call(iterable);\r\n      }\r\n\r\n      if (typeof iterable.next === \"function\") {\r\n        return iterable;\r\n      }\r\n\r\n      if (!isNaN(iterable.length)) {\r\n        var i = -1, next = function next() {\r\n          while (++i < iterable.length) {\r\n            if (hasOwn.call(iterable, i)) {\r\n              next.value = iterable[i];\r\n              next.done = false;\r\n              return next;\r\n            }\r\n          }\r\n\r\n          next.value = undefined;\r\n          next.done = true;\r\n\r\n          return next;\r\n        };\r\n\r\n        return next.next = next;\r\n      }\r\n    }\r\n\r\n    // Return an iterator with no values.\r\n    return { next: doneResult };\r\n  }\r\n  exports.values = values;\r\n\r\n  function doneResult() {\r\n    return { value: undefined, done: true };\r\n  }\r\n\r\n  Context.prototype = {\r\n    constructor: Context,\r\n\r\n    reset: function(skipTempReset) {\r\n      this.prev = 0;\r\n      this.next = 0;\r\n      // Resetting context._sent for legacy support of Babel's\r\n      // function.sent implementation.\r\n      this.sent = this._sent = undefined;\r\n      this.done = false;\r\n      this.delegate = null;\r\n\r\n      this.method = \"next\";\r\n      this.arg = undefined;\r\n\r\n      this.tryEntries.forEach(resetTryEntry);\r\n\r\n      if (!skipTempReset) {\r\n        for (var name in this) {\r\n          // Not sure about the optimal order of these conditions:\r\n          if (name.charAt(0) === \"t\" &&\r\n              hasOwn.call(this, name) &&\r\n              !isNaN(+name.slice(1))) {\r\n            this[name] = undefined;\r\n          }\r\n        }\r\n      }\r\n    },\r\n\r\n    stop: function() {\r\n      this.done = true;\r\n\r\n      var rootEntry = this.tryEntries[0];\r\n      var rootRecord = rootEntry.completion;\r\n      if (rootRecord.type === \"throw\") {\r\n        throw rootRecord.arg;\r\n      }\r\n\r\n      return this.rval;\r\n    },\r\n\r\n    dispatchException: function(exception) {\r\n      if (this.done) {\r\n        throw exception;\r\n      }\r\n\r\n      var context = this;\r\n      function handle(loc, caught) {\r\n        record.type = \"throw\";\r\n        record.arg = exception;\r\n        context.next = loc;\r\n\r\n        if (caught) {\r\n          // If the dispatched exception was caught by a catch block,\r\n          // then let that catch block handle the exception normally.\r\n          context.method = \"next\";\r\n          context.arg = undefined;\r\n        }\r\n\r\n        return !! caught;\r\n      }\r\n\r\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\r\n        var entry = this.tryEntries[i];\r\n        var record = entry.completion;\r\n\r\n        if (entry.tryLoc === \"root\") {\r\n          // Exception thrown outside of any try block that could handle\r\n          // it, so set the completion value of the entire function to\r\n          // throw the exception.\r\n          return handle(\"end\");\r\n        }\r\n\r\n        if (entry.tryLoc <= this.prev) {\r\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\r\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\r\n\r\n          if (hasCatch && hasFinally) {\r\n            if (this.prev < entry.catchLoc) {\r\n              return handle(entry.catchLoc, true);\r\n            } else if (this.prev < entry.finallyLoc) {\r\n              return handle(entry.finallyLoc);\r\n            }\r\n\r\n          } else if (hasCatch) {\r\n            if (this.prev < entry.catchLoc) {\r\n              return handle(entry.catchLoc, true);\r\n            }\r\n\r\n          } else if (hasFinally) {\r\n            if (this.prev < entry.finallyLoc) {\r\n              return handle(entry.finallyLoc);\r\n            }\r\n\r\n          } else {\r\n            throw new Error(\"try statement without catch or finally\");\r\n          }\r\n        }\r\n      }\r\n    },\r\n\r\n    abrupt: function(type, arg) {\r\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\r\n        var entry = this.tryEntries[i];\r\n        if (entry.tryLoc <= this.prev &&\r\n            hasOwn.call(entry, \"finallyLoc\") &&\r\n            this.prev < entry.finallyLoc) {\r\n          var finallyEntry = entry;\r\n          break;\r\n        }\r\n      }\r\n\r\n      if (finallyEntry &&\r\n          (type === \"break\" ||\r\n           type === \"continue\") &&\r\n          finallyEntry.tryLoc <= arg &&\r\n          arg <= finallyEntry.finallyLoc) {\r\n        // Ignore the finally entry if control is not jumping to a\r\n        // location outside the try/catch block.\r\n        finallyEntry = null;\r\n      }\r\n\r\n      var record = finallyEntry ? finallyEntry.completion : {};\r\n      record.type = type;\r\n      record.arg = arg;\r\n\r\n      if (finallyEntry) {\r\n        this.method = \"next\";\r\n        this.next = finallyEntry.finallyLoc;\r\n        return ContinueSentinel;\r\n      }\r\n\r\n      return this.complete(record);\r\n    },\r\n\r\n    complete: function(record, afterLoc) {\r\n      if (record.type === \"throw\") {\r\n        throw record.arg;\r\n      }\r\n\r\n      if (record.type === \"break\" ||\r\n          record.type === \"continue\") {\r\n        this.next = record.arg;\r\n      } else if (record.type === \"return\") {\r\n        this.rval = this.arg = record.arg;\r\n        this.method = \"return\";\r\n        this.next = \"end\";\r\n      } else if (record.type === \"normal\" && afterLoc) {\r\n        this.next = afterLoc;\r\n      }\r\n\r\n      return ContinueSentinel;\r\n    },\r\n\r\n    finish: function(finallyLoc) {\r\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\r\n        var entry = this.tryEntries[i];\r\n        if (entry.finallyLoc === finallyLoc) {\r\n          this.complete(entry.completion, entry.afterLoc);\r\n          resetTryEntry(entry);\r\n          return ContinueSentinel;\r\n        }\r\n      }\r\n    },\r\n\r\n    \"catch\": function(tryLoc) {\r\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\r\n        var entry = this.tryEntries[i];\r\n        if (entry.tryLoc === tryLoc) {\r\n          var record = entry.completion;\r\n          if (record.type === \"throw\") {\r\n            var thrown = record.arg;\r\n            resetTryEntry(entry);\r\n          }\r\n          return thrown;\r\n        }\r\n      }\r\n\r\n      // The context.catch method must only be called with a location\r\n      // argument that corresponds to a known catch block.\r\n      throw new Error(\"illegal catch attempt\");\r\n    },\r\n\r\n    delegateYield: function(iterable, resultName, nextLoc) {\r\n      this.delegate = {\r\n        iterator: values(iterable),\r\n        resultName: resultName,\r\n        nextLoc: nextLoc\r\n      };\r\n\r\n      if (this.method === \"next\") {\r\n        // Deliberately forget the last sent value so that we don't\r\n        // accidentally pass it on to the delegate.\r\n        this.arg = undefined;\r\n      }\r\n\r\n      return ContinueSentinel;\r\n    }\r\n  };\r\n\r\n  // Regardless of whether this script is executing as a CommonJS module\r\n  // or not, return the runtime object so that we can declare the variable\r\n  // regeneratorRuntime in the outer scope, which allows this module to be\r\n  // injected easily by `bin/regenerator --include-runtime script.js`.\r\n  return exports;\r\n\r\n}(\r\n  // If this script is executing as a CommonJS module, use module.exports\r\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\r\n  // object. Either way, the resulting object will be used to initialize\r\n  // the regeneratorRuntime variable at the top of this file.\r\n   true ? module.exports : 0\r\n));\r\n\r\ntry {\r\n  regeneratorRuntime = runtime;\r\n} catch (accidentalStrictMode) {\r\n  // This module should not be running in strict mode, so the above\r\n  // assignment should always work unless something is misconfigured. Just\r\n  // in case runtime.js accidentally runs in strict mode, we can escape\r\n  // strict mode using a global Function call. This could conceivably fail\r\n  // if a Content Security Policy forbids using Function, but in that case\r\n  // the proper solution is to fix the accidental strict mode problem. If\r\n  // you've misconfigured your bundler to force strict mode and applied a\r\n  // CSP to forbid Function, and you're not willing to fix either of those\r\n  // problems, please detail your unique predicament in a GitHub issue.\r\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\r\n}\r\n\n\n//# sourceURL=webpack://covid/./node_modules/regenerator-runtime/runtime.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => "main." + __webpack_require__.h() + ".hot-update.json";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "b14a78f39c5e71f33d8e"
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "covid:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => fn(event));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatecovid"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;