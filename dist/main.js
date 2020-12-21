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

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("function _defineProperty(obj, key, value) {\r\n  if (key in obj) {\r\n    Object.defineProperty(obj, key, {\r\n      value: value,\r\n      enumerable: true,\r\n      configurable: true,\r\n      writable: true\r\n    });\r\n  } else {\r\n    obj[key] = value;\r\n  }\r\n\r\n  return obj;\r\n}\r\n\r\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://covid/./node_modules/@babel/runtime/helpers/defineProperty.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ getData\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_default_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/default.json */ \"./src/api/default.json\");\n/* harmony import */ var _api_default_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_api_default_json__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties */ \"./src/components/properties.js\");\n\n\n\n/* eslint-disable import/no-cycle */\n\n\n // import listOfCountries from \"./list-of-countries/js/list-of-countries\";\n// import chart from './chart/js/chart.js'\n// import map from './map/js/map.js'\n// import country-data from './country-data/js/country-data.js'\n\nvar apiPaths = _api_default_json__WEBPACK_IMPORTED_MODULE_2__[0]; // const summary = \"summaryRoute\";\n// const countries = \"countriesRoute\";\n// const countryDay = \"countryDayOneRoute\";\n// const countryTotalDay = \"countryDayOneTotalRoute\";\n// const country = \"ukraine\";\n\nvar summaryUrl = \"https://api.covid19api.com/summary\";\nvar UpdatePeriod = 14;\nvar url = \"\";\nvar categorySave = \"\";\nvar categoryData = {};\n\nfunction getApi(_x, _x2) {\n  return _getApi.apply(this, arguments);\n}\n\nfunction _getApi() {\n  _getApi = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(category, country) {\n    var response, result;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (country) categorySave = \"\".concat(category, \"-\").concat(country);else {\n              categorySave = category;\n            }\n            _context.next = 3;\n            return fetch(url);\n\n          case 3:\n            response = _context.sent;\n            _context.next = 6;\n            return response.json();\n\n          case 6:\n            result = _context.sent;\n\n            if (result.Message !== \"Caching in progress\") {\n              localStorage.setItem(categorySave, JSON.stringify(result));\n              _index__WEBPACK_IMPORTED_MODULE_3__.default.set(result, category, country);\n              _properties__WEBPACK_IMPORTED_MODULE_4__.default.data[categorySave] = result;\n            } else {\n              console.log(result.Message);\n            }\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getApi.apply(this, arguments);\n}\n\nfunction getData(_x3, _x4) {\n  return _getData.apply(this, arguments);\n}\n\nfunction _getData() {\n  _getData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(category, country) {\n    var date, categoryApi, baseUrl, catUrl, LastUpdate, deltaHours;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            date = new Date();\n            categoryApi = category;\n\n            if (categoryApi) {\n              baseUrl = apiPaths.baseUrl.Path;\n              catUrl = apiPaths[categoryApi].Path;\n              if (catUrl.match(/:country/) && country) catUrl = catUrl.replace(/:country/, country);\n              url = baseUrl + catUrl;\n            } else {\n              url = summaryUrl;\n              categoryApi = \"summaryRoute\";\n            }\n\n            if (country) categoryData = JSON.parse(localStorage.getItem(\"\".concat(categoryApi, \"-\").concat(country)));else {\n              categoryData = JSON.parse(localStorage.getItem(categoryApi));\n            }\n\n            if (categoryData) {\n              LastUpdate = new Date(categoryData.Date);\n              deltaHours = new Date(date - LastUpdate).getHours();\n              if (deltaHours > UpdatePeriod) getApi(categoryApi, country);else {\n                getApi(categoryApi, country);\n              }\n            } else {\n              getApi(categoryApi, country);\n            }\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _getData.apply(this, arguments);\n}\n\n//# sourceURL=webpack://covid/./src/components/api.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ create\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n/* eslint no-useless-rename: [\"error\", { ignoreExport: true }] */\n\n/** *\r\n * @param {String} el\r\n * @param {String} classNames\r\n * @param {HTMLElement} child\r\n * @param {HTMLElement} parent\r\n * @param {...Array} dataAttr\r\n */\nfunction create(el, classNames, child, parent) {\n  var element = null;\n\n  try {\n    element = document.createElement(el);\n  } catch (error) {\n    throw new Error(\"Unable to create HTMLelement! Give a proper tag name\");\n  }\n\n  if (classNames) {\n    var _element$classList;\n\n    (_element$classList = element.classList).add.apply(_element$classList, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(classNames.split(\" \")));\n  }\n\n  if (child && Array.isArray(child)) {\n    child.forEach(function (childElement) {\n      return childElement && element.appendChild(childElement);\n    });\n  } else if (child && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(child) === \"object\") {\n    element.appendChild(child);\n  } else if (child && typeof child === \"string\") {\n    element.innerText = child;\n  }\n\n  if (parent) {\n    parent.appendChild(element);\n  } // <span id=\"\" data-code=\"\"></span> el.dataset.code = \"\"  disabled\n\n\n  for (var _len = arguments.length, dataAttr = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {\n    dataAttr[_key - 4] = arguments[_key];\n  }\n\n  if (dataAttr.length) {\n    dataAttr.forEach(function (_ref) {\n      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n          attrName = _ref2[0],\n          attrValue = _ref2[1];\n\n      if (attrValue === \"\") {\n        element.setAttribute(attrName, \"\");\n      }\n\n      if (attrName.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck|contenteditable|src|alt/)) {\n        element.setAttribute(attrName, attrValue);\n      } else {\n        element.dataset[attrName] = attrValue;\n      }\n    });\n  }\n\n  return element;\n}\n\n//# sourceURL=webpack://covid/./src/components/create.js?");

/***/ }),

/***/ "./src/components/list-of-countries/js/Keyboard.js":
/*!*********************************************************!*
  !*** ./src/components/list-of-countries/js/Keyboard.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _en_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en.js */ \"./src/components/list-of-countries/js/en.js\");\n\n\n\n\n\nvar rowsOrder = [['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'Backspace'], ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'ArrowLeft', 'ArrowRight'], ['Hide', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Space']];\nvar main = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('main', '', [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('h1', 'title', 'Virtual Keyboard'), Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('h3', 'article', 'Article'), Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('p', 'hint', 'Use left Ctrl + Alt to switch language')]);\n\nvar Key = function Key(_ref) {\n  var small = _ref.small,\n      shift = _ref.shift,\n      code = _ref.code;\n\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Key);\n\n  this.code = code;\n  this.small = small;\n  this.shift = shift;\n  this.icon = null;\n  this.isFnKey = Boolean(code.match(/Hide|Speach|Arrow|Backspace|Space/));\n\n  if (shift && shift.match(/[^a-zA-Z]/)) {\n    this.sub = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('div', 'sub', this.shift);\n  } else {\n    this.sub = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('div', 'sub', '');\n  }\n\n  this.letter = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('div', 'letter', this.small);\n  if (code.match(/Hide/)) this.icon = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('i', 'material-icons', 'keyboard_hide');\n  if (code.match(/Speach/)) this.icon = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('i', 'material-icons', 'keyboard_voice');\n  if (code.match(/Backspace/)) this.icon = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('i', 'material-icons', 'backspace');\n  if (code.match(/Space/)) this.icon = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('i', 'material-icons', 'space_bar');\n  if (code.match(/ArrowLeft/)) this.icon = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('i', 'material-icons', 'keyboard_arrow_left');\n  if (code.match(/ArrowRight/)) this.icon = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('i', 'material-icons', 'keyboard_arrow_right');\n  this.div = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('div', \"keyboard__key\", [this.sub, this.letter, this.icon], null, ['code', this.code], this.isFnKey ? ['fn', 'true'] : ['fn', 'false']);\n};\n\nvar Keyboard = /*#__PURE__*/function () {\n  function Keyboard(rowsOrder) {\n    var _this = this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Keyboard);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"hideKeyboardEvent\", function (e) {\n      var hideKeyboard = _this.wrapper.classList.length === 1 ? true : false;\n\n      if (hideKeyboard) {\n        _this.wrapper.classList.add(\"keyboard--hidden\");\n\n        _this.hideButton.innerText = 'Show keyboard';\n      } else {\n        _this.wrapper.classList.remove(\"keyboard--hidden\");\n\n        _this.hideButton.innerText = 'Hide keyboard';\n      }\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"preHandleEvent\", function (e) {\n      e.stopPropagation();\n      var keyDiv = e.target.closest('.keyboard__key');\n      if (!keyDiv) return;\n      var code = keyDiv.dataset.code;\n      keyDiv.addEventListener('mouseleave', _this.resetButtonState);\n\n      _this.handleEvent({\n        code: code,\n        type: e.type\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"resetButtonState\", function (_ref2) {\n      var code = _ref2.target.dataset.code;\n\n      var keyObj = _this.keyButtons.find(function (key) {\n        return key.code === code;\n      });\n\n      keyObj.div.classList.remove('active');\n      keyObj.div.removeEventListener('mouseleave', _this.resetButtonState);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"handleEvent\", function (e) {\n      if (e.stopPropagation) e.stopPropagation();\n      var code = e.code,\n          type = e.type;\n\n      var keyObj = _this.keyButtons.find(function (key) {\n        return key.code === code;\n      });\n\n      if (!keyObj) return;\n\n      _this.output.focus(); // On key pressed\n\n\n      if (type.match(/keydown|mousedown/)) {\n        if (type.match(/key/)) e.preventDefault();\n        if (code.match(/Hide/)) _this.hideKeyboardEvent();\n\n        _this.printToOutput(keyObj, keyObj.small);\n      }\n\n      keyObj.div.classList.add('active'); // remove 'active' classes\n\n      if (!code.match(/Speach/)) {\n        keyObj.div.classList.remove('active');\n      }\n    });\n\n    this.rowsOrder = rowsOrder;\n    this.keysPressed = {};\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(Keyboard, [{\n    key: \"init\",\n    value: function init() {\n      this.output = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('textarea', 'output', null, main, ['placeholder', 'Start type something...\\n Made Speech recognition \\n  Fix style\\n   Fix Shift Digits\\n Информация для проверяющих:\\nкнопка Hide скрывает клавиатуру\\nкнопка Speech включает распознавание голоса\\nкнопка Snd off выключает звук\\n\\nпри нажати клавиши Shift мышкой она блокируется, при нажатии с клавиатуры работает как обычно.'], ['rows', 5], ['cols', 50], ['spellcheck', false], ['autocorrect', 'off']);\n      this.hideButton = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('div', 'hide-button', 'Hide keyboard', main);\n      this.wrapper = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('div', 'keyboard-wrapper', null, main);\n      this.container = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('div', 'keyboard', null, this.wrapper, ['language', \"en\"]);\n      document.body.prepend(main);\n      return this;\n    }\n  }, {\n    key: \"generateLayout\",\n    value: function generateLayout() {\n      var _this2 = this;\n\n      this.keyButtons = [];\n      this.rowsOrder.forEach(function (row, i) {\n        var rowElement = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../create.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('div', 'keyboard__row', null, _this2.container, ['row', i + 1]);\n        rowElement.style.gridTemplateColumns = \"repeat(\".concat(row.length, \", 1fr)\");\n        row.forEach(function (code) {\n          var keyObj = _en_js__WEBPACK_IMPORTED_MODULE_4__.default.find(function (key) {\n            return key.code === code;\n          });\n\n          if (keyObj) {\n            var keyButton = new Key(keyObj);\n\n            _this2.keyButtons.push(keyButton);\n\n            rowElement.appendChild(keyButton.div);\n          }\n        });\n      });\n      document.addEventListener('keydown', this.handleEvent);\n      document.addEventListener('keyup', this.handleEvent);\n      this.container.onmousedown = this.preHandleEvent;\n      this.container.onmouseup = this.preHandleEvent;\n      this.hideButton.onmousedown = this.hideKeyboardEvent;\n    }\n  }, {\n    key: \"printToOutput\",\n    value: function printToOutput(keyObj, symbol) {\n      var _this3 = this;\n\n      var cursorPos = this.output.selectionStart;\n      var left = this.output.value.slice(0, cursorPos);\n      var right = this.output.value.slice(cursorPos);\n      var fnButtonsHandler = {\n        Tab: function Tab() {\n          _this3.output.value = \"\".concat(left, \"\\t\").concat(right);\n          cursorPos += 1;\n        },\n        ArrowLeft: function ArrowLeft() {\n          cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;\n        },\n        ArrowRight: function ArrowRight() {\n          cursorPos += 1;\n        },\n        Backspace: function Backspace() {\n          _this3.output.value = \"\".concat(left.slice(0, -1)).concat(right);\n          cursorPos -= 1;\n        },\n        Hide: function Hide() {\n          _this3.output.value = \"\".concat(left).concat(right);\n        },\n        Speach: function Speach() {\n          _this3.output.value = \"\".concat(left).concat(right);\n        },\n        Space: function Space() {\n          _this3.output.value = \"\".concat(left, \" \").concat(right);\n          cursorPos += 1;\n        }\n      };\n\n      if (fnButtonsHandler[keyObj.code]) {\n        fnButtonsHandler[keyObj.code]();\n      } else if (!keyObj.isFnKey) {\n        cursorPos += 1;\n        this.output.value = \"\".concat(left).concat(symbol || '').concat(right);\n      }\n\n      this.output.setSelectionRange(cursorPos, cursorPos);\n    }\n  }]);\n\n  return Keyboard;\n}();\n\nnew Keyboard(rowsOrder).init().generateLayout();\n\n//# sourceURL=webpack://covid/./src/components/list-of-countries/js/Keyboard.js?");

/***/ }),

/***/ "./src/components/list-of-countries/js/en.js":
/*!***************************************************!*
  !*** ./src/components/list-of-countries/js/en.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  small: '',\n  shift: null,\n  code: 'Backspace'\n}, {\n  small: 'Del',\n  shift: null,\n  code: 'Del'\n}, {\n  small: 'q',\n  shift: 'Q',\n  code: 'KeyQ'\n}, {\n  small: 'w',\n  shift: 'W',\n  code: 'KeyW'\n}, {\n  small: 'e',\n  shift: 'E',\n  code: 'KeyE'\n}, {\n  small: 'r',\n  shift: 'R',\n  code: 'KeyR'\n}, {\n  small: 't',\n  shift: 'T',\n  code: 'KeyT'\n}, {\n  small: 'y',\n  shift: 'Y',\n  code: 'KeyY'\n}, {\n  small: 'u',\n  shift: 'U',\n  code: 'KeyU'\n}, {\n  small: 'i',\n  shift: 'I',\n  code: 'KeyI'\n}, {\n  small: 'o',\n  shift: 'O',\n  code: 'KeyO'\n}, {\n  small: 'p',\n  shift: 'P',\n  code: 'KeyP'\n}, {\n  small: 'a',\n  shift: 'A',\n  code: 'KeyA'\n}, {\n  small: 's',\n  shift: 'S',\n  code: 'KeyS'\n}, {\n  small: 'd',\n  shift: 'D',\n  code: 'KeyD'\n}, {\n  small: 'f',\n  shift: 'F',\n  code: 'KeyF'\n}, {\n  small: 'g',\n  shift: 'G',\n  code: 'KeyG'\n}, {\n  small: 'h',\n  shift: 'H',\n  code: 'KeyH'\n}, {\n  small: 'j',\n  shift: 'J',\n  code: 'KeyJ'\n}, {\n  small: 'k',\n  shift: 'K',\n  code: 'KeyK'\n}, {\n  small: 'l',\n  shift: 'L',\n  code: 'KeyL'\n}, {\n  small: '',\n  shift: null,\n  code: 'Speach'\n}, {\n  small: 'z',\n  shift: 'Z',\n  code: 'KeyZ'\n}, {\n  small: 'x',\n  shift: 'X',\n  code: 'KeyX'\n}, {\n  small: 'c',\n  shift: 'C',\n  code: 'KeyC'\n}, {\n  small: 'v',\n  shift: 'V',\n  code: 'KeyV'\n}, {\n  small: 'b',\n  shift: 'B',\n  code: 'KeyB'\n}, {\n  small: 'n',\n  shift: 'N',\n  code: 'KeyN'\n}, {\n  small: 'm',\n  shift: 'M',\n  code: 'KeyM'\n}, {\n  small: 'Space',\n  shift: null,\n  code: 'Space'\n}, {\n  small: '',\n  shift: null,\n  code: 'Hide'\n}, {\n  small: '',\n  shift: null,\n  code: 'ArrowLeft'\n}, {\n  small: '',\n  shift: null,\n  code: 'ArrowRight'\n}]);\n\n//# sourceURL=webpack://covid/./src/components/list-of-countries/js/en.js?");

/***/ }),

/***/ "./src/components/list-of-countries/js/list-of-countries.js":
/*!******************************************************************!*
  !*** ./src/components/list-of-countries/js/list-of-countries.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ listOfCountries\n/* harmony export */ });\n/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../properties */ \"./src/components/properties.js\");\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../create */ \"./src/components/create.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ \"./src/components/api.js\");\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Keyboard */ \"./src/components/list-of-countries/js/Keyboard.js\");\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable prefer-const */\n\n/* eslint-disable import/no-cycle */\n\n\n\n\nvar summary = \"summaryRoute\";\nvar tableBlock = document.querySelector(\".countries-table\");\nvar totalCases = document.querySelector(\".total-cases\");\nvar lastUpdate = document.querySelector(\".last-update\");\nvar search = document.querySelector(\".search\");\nvar countryDay = \"countryDayOneRoute\";\nvar deathsButton = (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)(\"div\", \"deaths-button\", null, totalCases);\nvar recoverButton = (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)(\"div\", \"recovered-button\", null, totalCases);\nvar totalButton = (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)(\"div\", \"total-button-hidden\", null, totalCases);\nvar keyboardButton = (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)('i', 'material-icons keyboard_hide', 'keyboard_hide', search);\nvar searchInput = (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)(\"input\", null, null, search, [\"type\", \"text\"], [\"id\", \"search-counrty\"], [\"placeholder\", \"Search for a Country\"]);\nvar searchIcon = (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)('i', 'material-icons', 'search', search);\nvar total = (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)(\"div\", \"total\", null, totalCases);\nvar searchExp = \"\";\nvar dataSummary = {};\n\nfunction changeCases(e) {\n  var requestTotal = e.path[0].className;\n\n  switch (requestTotal) {\n    case \"recovered-button\":\n      _properties__WEBPACK_IMPORTED_MODULE_0__.default.cases = \"TotalRecovered\";\n      recoverButton.className = \"hidden-button\";\n      deathsButton.className = \"deaths-button\";\n      totalButton.className = \"total-button\";\n      break;\n\n    case \"deaths-button\":\n      _properties__WEBPACK_IMPORTED_MODULE_0__.default.cases = \"TotalDeaths\";\n      recoverButton.className = \"recovered-button\";\n      deathsButton.className = \"hidden-button\";\n      totalButton.className = \"total-button\";\n      break;\n\n    default:\n      _properties__WEBPACK_IMPORTED_MODULE_0__.default.cases = \"TotalConfirmed\";\n      totalButton.className = \"hidden-button\";\n      recoverButton.className = \"recovered-button\";\n      deathsButton.className = \"deaths-button\";\n  }\n\n  totalCases.className = \"total-cases \".concat(requestTotal.split(\"-\")[0]);\n  listOfCountries(dataSummary);\n}\n\nfunction listOfCountries(summaryData) {\n  dataSummary = summaryData;\n  tableBlock.innerHTML = \"\";\n  var totalData = {\n    TotalConfirmed: \"\".concat(dataSummary.Global.TotalConfirmed),\n    TotalDeaths: \"\".concat(dataSummary.Global.TotalDeaths),\n    TotalRecovered: \"\".concat(dataSummary.Global.TotalRecovered)\n  };\n  var totalClass = {\n    TotalConfirmed: \"total\",\n    TotalDeaths: \"total-deaths\",\n    TotalRecovered: \"total-recovered\"\n  };\n  if (!dataSummary) dataSummary = JSON.parse(localStorage.getItem(summary));\n  var lastUpdateDate = new Date(dataSummary.Date);\n  lastUpdate.innerText = \"Last Update: \".concat(lastUpdateDate.toLocaleString().slice(0, 17));\n  var tr = {};\n  var td = {};\n  total.innerText = totalData[_properties__WEBPACK_IMPORTED_MODULE_0__.default.cases].toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \" \");\n  dataSummary.Countries.filter(function (a) {\n    return a.Slug.includes(searchExp.toLowerCase());\n  }).sort(function (a, b) {\n    return sortBy(a, b);\n  }).forEach(function (country, i) {\n    tr[i] = (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)(\"tr\", \"country-row \".concat(country.Slug), null, tableBlock);\n    var flagImg = (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)(\"img\", \"country-flag \".concat(country.Slug), null, null, [\"src\", \"https://www.countryflags.io/\".concat(country.CountryCode, \"/flat/24.png\")], [\"alt\", \"\".concat(country.Slug, \" flag\")]);\n    td.Flag = (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)(\"td\", \"flag \".concat(country.Slug), [flagImg], tr[i]);\n    td.Country = (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)(\"td\", \"country \".concat(country.Slug), country.Country, tr[i]);\n    td.Total = (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)(\"td\", \"\".concat(totalClass[_properties__WEBPACK_IMPORTED_MODULE_0__.default.cases]), \"\".concat(country[_properties__WEBPACK_IMPORTED_MODULE_0__.default.cases]).toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \" \"), tr[i]);\n    tr[i].addEventListener(\"click\", function (e) {\n      (0,_api__WEBPACK_IMPORTED_MODULE_2__.default)(countryDay, e.path[1].className.slice(12));\n    });\n  });\n}\n\nfunction sortBy(a, b) {\n  return b[_properties__WEBPACK_IMPORTED_MODULE_0__.default.cases] - a[_properties__WEBPACK_IMPORTED_MODULE_0__.default.cases];\n}\n\nrecoverButton.addEventListener(\"click\", function (e) {\n  changeCases(e);\n});\ndeathsButton.addEventListener(\"click\", function (e) {\n  changeCases(e);\n});\ntotalButton.addEventListener(\"click\", function (e) {\n  changeCases(e);\n});\nkeyboardButton.addEventListener(\"click\", function (e) {\n  (0,_Keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard)();\n});\nsearchInput.addEventListener(\"input\", function (e) {\n  searchExp = e.target.value;\n  listOfCountries(dataSummary);\n});\n\n//# sourceURL=webpack://covid/./src/components/list-of-countries/js/list-of-countries.js?");

/***/ }),

/***/ "./src/components/map/js/map.js":
/*!**************************************!*
  !*** ./src/components/map/js/map.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Map\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_coordinats_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/coordinats.json */ \"./src/api/coordinats.json\");\n/* harmony import */ var _api_coordinats_json__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_api_coordinats_json__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n/* eslint-disable no-shadow */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable no-undef */\n\n\nvar Map = /*#__PURE__*/function () {\n  function Map(summaryData) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Map);\n\n    this.summaryData = summaryData;\n    this.jsonCountryCoordinates = null;\n    this.arrCountryCodes = [];\n    this.coordinates = [];\n    this.x = 0;\n    this.y = 0;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Map, [{\n    key: \"getMap\",\n    value: function getMap() {\n      var _this = this;\n\n      this.getMouseCoordinate();\n      Map.addFullSrceenButton(); // console.log(this.summaryData.Countries);\n\n      var tooltip = document.createElement(\"div\");\n      tooltip.classList.add(\"map__tooltip\", \"map__tooltip--hide\");\n      document.querySelector(\".grid-wrapper\").appendChild(tooltip);\n      this.getCountryCoordinates();\n      var param = \"TotalConfirmed\"; // Creating map options\n\n      var mapOptions = {\n        minZoom: 1,\n        maxZoom: 10\n      }; // Creating a map object\n      // eslint-disable-next-line new-cap\n\n      var map = new L.map(\"map\", mapOptions);\n      map.setView([10, 10], 2); // Creating a Layer object\n\n      var layer = new L.TileLayer(\"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\", {\n        noWrap: true,\n        bounds: [[-90, -180], [90, 180]]\n      }); // Adding layer to the map\n\n      map.addLayer(layer);\n      this.coordinates.forEach(function (item) {\n        // Center of the circle\n        var circleCenter = [item.latitude, item.longitude];\n\n        var value = _this.getParamByCode(item.country_code, param);\n\n        var circleRadius;\n        var circleColor;\n\n        if (value < 1000) {\n          circleRadius = 2;\n          circleColor = \"green\";\n        } else if (value < 100000) {\n          circleRadius = 4;\n          circleColor = \"yellow\";\n        } else if (value < 250000) {\n          circleRadius = 6;\n          circleColor = \"orange\";\n        } else if (value < 500000) {\n          circleRadius = 8;\n          circleColor = \"red\";\n        } else {\n          circleRadius = 10;\n          circleColor = \"darkred\";\n        } // Creating a circle\n\n\n        var circle = L.circleMarker(circleCenter, {\n          radius: circleRadius,\n          id: item.country_code,\n          val: value\n        });\n        circle.setStyle({\n          color: circleColor\n        }); // Adding circle to the map\n\n        circle.addTo(map); // L.DomUtil.addClass(circle._path, item.country_code);\n\n        circle.addEventListener(\"mouseover\", function (e) {\n          // console.log(e.target.getLatLng(), e.target.options.id, e.target.options.val);\n          tooltip.style.top = \"\".concat(_this.y + 20, \"px\");\n          tooltip.style.left = \"\".concat(_this.x + 10, \"px\");\n          tooltip.classList.remove(\"map__tooltip--hide\");\n          tooltip.innerHTML = \"\".concat(item.name, \"<br>\").concat(value);\n        });\n        circle.addEventListener(\"mouseout\", function () {\n          tooltip.classList.add(\"map__tooltip--hide\");\n        });\n        circle.addEventListener(\"click\", function (e) {\n          console.log(e.target.getLatLng(), e.target.options.id, e.target.options.val);\n        });\n      }); // Change param buttons\n\n      var paramChanger = L.control({\n        position: \"bottomleft\"\n      });\n\n      paramChanger.onAdd = function (map) {\n        var div = L.DomUtil.create(\"div\", \"map__param-changer\");\n        div.innerHTML += \"<button><span class=\\\"material-icons\\\">arrow_left</span></button>\";\n        div.innerHTML += \"<span class=\\\"map__param\\\">\".concat(param, \"</span>\");\n        div.innerHTML += \"<button><span class=\\\"material-icons\\\">arrow_right</span></button>\";\n        return div;\n      };\n\n      paramChanger.addTo(map); // Legend specific\n\n      var legend = L.control({\n        position: \"bottomleft\"\n      });\n\n      legend.onAdd = function (map) {\n        var div = L.DomUtil.create(\"div\", \"map__legend\");\n        div.innerHTML += \"<i style=\\\"background: green\\\"></i><span><1000</span><br>\";\n        div.innerHTML += \"<i style=\\\"background: yellow\\\"></i><span><100000</span><br>\";\n        div.innerHTML += \"<i style=\\\"background: orange\\\"></i><span><250000</span><br>\";\n        div.innerHTML += \"<i style=\\\"background: red\\\"></i><span><500000</span><br>\";\n        div.innerHTML += \"<i style=\\\"background: darkred\\\"></i><span>>500000</span><br>\";\n        return div;\n      };\n\n      legend.addTo(map); // Adding pop-up to the marker\n      // marker.bindPopup(\"Hi Welcome to Tutorialspoint\").openPopup();\n    } // getting country coordinates\n\n  }, {\n    key: \"getCountryCoordinates\",\n    value: function () {\n      var _getCountryCoordinates = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var _this2 = this;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                this.getCountryCodes();\n                this.jsonCountryCoordinates = _api_coordinats_json__WEBPACK_IMPORTED_MODULE_5__;\n                this.jsonCountryCoordinates.forEach(function (i) {\n                  if (_this2.arrCountryCodes.includes(i.country_code)) {\n                    var obj = {};\n                    obj.name = i.name;\n                    obj.country_code = i.country_code;\n\n                    var _i$latlng = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(i.latlng, 2);\n\n                    obj.latitude = _i$latlng[0];\n                    obj.longitude = _i$latlng[1];\n\n                    _this2.coordinates.push(obj);\n                  }\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getCountryCoordinates() {\n        return _getCountryCoordinates.apply(this, arguments);\n      }\n\n      return getCountryCoordinates;\n    }() // getting country codes to select coordinates\n\n  }, {\n    key: \"getCountryCodes\",\n    value: function getCountryCodes() {\n      var _this3 = this;\n\n      console.log(this.summaryData);\n      Object.keys(this.summaryData.Countries).forEach(function (i) {\n        Object.keys(_this3.summaryData.Countries[i]).forEach(function (item) {\n          if (item === \"CountryCode\") {\n            _this3.arrCountryCodes.push(_this3.summaryData.Countries[i][item]);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"getMinMaxCounty\",\n    value: function getMinMaxCounty(param) {\n      function sortByParam(arr, p) {\n        arr.sort(function (a, b) {\n          return a[p] > b[p] ? 1 : -1;\n        });\n      }\n\n      var mas = this.summaryData.Countries;\n      sortByParam(mas, param);\n      var len = mas.length;\n      return [mas[0][param], mas[len - 1][param]];\n    }\n  }, {\n    key: \"getParamByCode\",\n    value: function getParamByCode(code, param) {\n      var value;\n\n      for (var i = 0; i < this.summaryData.Countries.length; i += 1) {\n        if (this.summaryData.Countries[i].CountryCode === code) {\n          // console.log(code, this.summaryData.Countries[i][param], this.summaryData.Countries[i]);\n          value = this.summaryData.Countries[i][param];\n          return value;\n        }\n      }\n\n      return value;\n    }\n  }, {\n    key: \"getMouseCoordinate\",\n    value: function getMouseCoordinate() {\n      var _this4 = this;\n\n      document.querySelector(\"#map\").addEventListener(\"mousemove\", function (e) {\n        _this4.x = e.pageX;\n        _this4.y = e.pageY; // console.log(`Position: (${e.clientX}, ${e.clientY})`);\n      }, false);\n    }\n  }], [{\n    key: \"addFullSrceenButton\",\n    value: function addFullSrceenButton() {\n      var map = document.querySelector(\"#map\");\n      var fullScreenButton = document.createElement(\"button\");\n      fullScreenButton.classList.add(\"map__full-screen-button\");\n      fullScreenButton.setAttribute(\"title\", \"Full Screen\");\n      fullScreenButton.innerHTML = \"<span class=\\\"material-icons\\\">fullscreen</span>\";\n      map.appendChild(fullScreenButton);\n      fullScreenButton.addEventListener(\"click\", function () {\n        map.classList.toggle(\"map--fullscreen\");\n      });\n    }\n  }]);\n\n  return Map;\n}();\n\n\n\n//# sourceURL=webpack://covid/./src/components/map/js/map.js?");

/***/ }),

/***/ "./src/components/properties.js":
/*!**************************************!*
  !*** ./src/components/properties.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar Properties = {\n  data: {},\n  cases: \"TotalConfirmed\",\n  properties: {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Properties);\n\n//# sourceURL=webpack://covid/./src/components/properties.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index.css */ \"./src/components/index.css\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/api */ \"./src/components/api.js\");\n/* harmony import */ var _components_list_of_countries_js_list_of_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/list-of-countries/js/list-of-countries */ \"./src/components/list-of-countries/js/list-of-countries.js\");\n/* harmony import */ var _components_chart_js_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chart/js/chart */ \"./src/components/chart/js/chart.js\");\n/* harmony import */ var _components_map_js_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/map/js/map */ \"./src/components/map/js/map.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n // import map from './components/map/js/map.js'\n//  import country-data from './components/country-data/js/country-data.js'\n\nvar summary = \"summaryRoute\"; // const countries = \"countriesRoute\";\n// const countryDay = \"countryDayOneRoute\";\n// const countryTotalDay = \"countryDayOneTotalRoute\";\n// const country = \"ukraine\";\n\nvar Page = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page = {\n  elements: {\n    main: \"\"\n  },\n  properties: {\n    summary: {},\n    lastUpdate: \"\"\n  },\n  init: function init() {\n    (0,_components_api__WEBPACK_IMPORTED_MODULE_1__.default)(summary);\n  },\n  set: function set(categoryData, category) {\n    var map = new _components_map_js_map__WEBPACK_IMPORTED_MODULE_4__.default(categoryData);\n\n    switch (category) {\n      case \"countryDayOneRoute\":\n        (0,_components_chart_js_chart__WEBPACK_IMPORTED_MODULE_3__.chart)(categoryData, \"Confirmed\");\n        map.getMap();\n        break;\n\n      case \"countryTotalDayOneRoute\":\n        (0,_components_chart_js_chart__WEBPACK_IMPORTED_MODULE_3__.chart)(categoryData, \"Confirmed\");\n        map.getMap();\n        break;\n\n      case \"summaryRoute\":\n        (0,_components_list_of_countries_js_list_of_countries__WEBPACK_IMPORTED_MODULE_2__.default)(categoryData, category);\n        (0,_components_chart_js_chart__WEBPACK_IMPORTED_MODULE_3__.chart)(\"world\", \"Confirmed\");\n        map.getMap();\n        break;\n\n      default:\n        (0,_components_chart_js_chart__WEBPACK_IMPORTED_MODULE_3__.chart)(categoryData, \"Confirmed\");\n        map.getMap();\n    }\n  }\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  Page.init();\n});\n\n//# sourceURL=webpack://covid/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/index.css":
/*!************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/index.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  border: 0;\\n}\\n\\n*,\\n*:before,\\n*:after {\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\n:focus,\\n:active {\\n  outline: none;\\n}\\n\\na:focus,\\na:active {\\n  outline: none;\\n}\\n\\nnav,\\nfooter,\\nheader,\\naside {\\n  display: block;\\n}\\n\\nhtml,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n  font-size: 100%;\\n  line-height: 1;\\n  font-size: 14px;\\n  -ms-text-size-adjust: 100%;\\n  -moz-text-size-adjust: 100%;\\n  -webkit-text-size-adjust: 100%;\\n}\\n\\ninput,\\nbutton,\\ntextarea {\\n  font-family: inherit;\\n}\\n\\ninput::-ms-clear {\\n  display: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\nbutton::-moz-focus-inner {\\n  padding: 0;\\n  border: 0;\\n}\\n\\na,\\na:visited {\\n  text-decoration: none;\\n}\\n\\na:hover {\\n  text-decoration: none;\\n}\\n\\nul li {\\n  list-style: none;\\n}\\n\\nimg {\\n  vertical-align: top;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: 400;\\n}\\n\\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n/* Document\\r\\n   ========================================================================== */\\n/**\\r\\n * 1. Correct the line height in all browsers.\\r\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\r\\n */\\nhtml {\\n  line-height: 1.15;\\n  /* 1 */\\n  -webkit-text-size-adjust: 100%;\\n  /* 2 */\\n}\\n\\n/* Sections\\r\\n   ========================================================================== */\\n/**\\r\\n * Remove the margin in all browsers.\\r\\n */\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\r\\n * Render the `main` element consistently in IE.\\r\\n */\\nmain {\\n  display: block;\\n}\\n\\n/**\\r\\n * Correct the font size and margin on `h1` elements within `section` and\\r\\n * `article` contexts in Chrome, Firefox, and Safari.\\r\\n */\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\r\\n   ========================================================================== */\\n/**\\r\\n * 1. Add the correct box sizing in Firefox.\\r\\n * 2. Show the overflow in Edge and IE.\\r\\n */\\nhr {\\n  -webkit-box-sizing: content-box;\\n          box-sizing: content-box;\\n  /* 1 */\\n  height: 0;\\n  /* 1 */\\n  overflow: visible;\\n  /* 2 */\\n}\\n\\n/**\\r\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n * 2. Correct the odd `em` font sizing in all browsers.\\r\\n */\\npre {\\n  font-family: monospace, monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */\\n}\\n\\n/* Text-level semantics\\r\\n   ========================================================================== */\\n/**\\r\\n * Remove the gray background on active links in IE 10.\\r\\n */\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\r\\n * 1. Remove the bottom border in Chrome 57-\\r\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\r\\n */\\nabbr[title] {\\n  border-bottom: none;\\n  /* 1 */\\n  text-decoration: underline;\\n  /* 2 */\\n  -webkit-text-decoration: underline dotted;\\n          text-decoration: underline dotted;\\n  /* 2 */\\n}\\n\\n/**\\r\\n * Add the correct font weight in Chrome, Edge, and Safari.\\r\\n */\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\r\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n * 2. Correct the odd `em` font sizing in all browsers.\\r\\n */\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */\\n}\\n\\n/**\\r\\n * Add the correct font size in all browsers.\\r\\n */\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\r\\n * Prevent `sub` and `sup` elements from affecting the line height in\\r\\n * all browsers.\\r\\n */\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\r\\n   ========================================================================== */\\n/**\\r\\n * Remove the border on images inside links in IE 10.\\r\\n */\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\r\\n   ========================================================================== */\\n/**\\r\\n * 1. Change the font styles in all browsers.\\r\\n * 2. Remove the margin in Firefox and Safari.\\r\\n */\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  /* 1 */\\n  font-size: 100%;\\n  /* 1 */\\n  line-height: 1.15;\\n  /* 1 */\\n  margin: 0;\\n  /* 2 */\\n}\\n\\n/**\\r\\n * Show the overflow in IE.\\r\\n * 1. Show the overflow in Edge.\\r\\n */\\nbutton,\\ninput {\\n  /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\r\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\r\\n * 1. Remove the inheritance of text transform in Firefox.\\r\\n */\\nbutton,\\nselect {\\n  /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\r\\n * Correct the inability to style clickable types in iOS and Safari.\\r\\n */\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\r\\n * Remove the inner border and padding in Firefox.\\r\\n */\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\r\\n * Restore the focus styles unset by the previous rule.\\r\\n */\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\r\\n * Correct the padding in Firefox.\\r\\n */\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\r\\n * 1. Correct the text wrapping in Edge and IE.\\r\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\r\\n * 3. Remove the padding so developers are not caught out when they zero out\\r\\n *    `fieldset` elements in all browsers.\\r\\n */\\nlegend {\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  /* 1 */\\n  color: inherit;\\n  /* 2 */\\n  display: table;\\n  /* 1 */\\n  max-width: 100%;\\n  /* 1 */\\n  padding: 0;\\n  /* 3 */\\n  white-space: normal;\\n  /* 1 */\\n}\\n\\n/**\\r\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\r\\n */\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\r\\n * Remove the default vertical scrollbar in IE 10+.\\r\\n */\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\r\\n * 1. Add the correct box sizing in IE 10.\\r\\n * 2. Remove the padding in IE 10.\\r\\n */\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */\\n}\\n\\n/**\\r\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\r\\n */\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\r\\n * 1. Correct the odd appearance in Chrome and Safari.\\r\\n * 2. Correct the outline style in Safari.\\r\\n */\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  outline-offset: -2px;\\n  /* 2 */\\n}\\n\\n/**\\r\\n * Remove the inner padding in Chrome and Safari on macOS.\\r\\n */\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\r\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\r\\n * 2. Change font properties to `inherit` in Safari.\\r\\n */\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */\\n}\\n\\n/* Interactive\\r\\n   ========================================================================== */\\n/*\\r\\n * Add the correct display in Edge, IE 10+, and Firefox.\\r\\n */\\ndetails {\\n  display: block;\\n}\\n\\n/*\\r\\n * Add the correct display in all browsers.\\r\\n */\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\r\\n   ========================================================================== */\\n/**\\r\\n * Add the correct display in IE 10+.\\r\\n */\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\r\\n * Add the correct display in IE 10.\\r\\n */\\n[hidden] {\\n  display: none;\\n}\\n\\n::-webkit-scrollbar {\\n  width: 8px;\\n  height: 8px;\\n  background-color: transparent;\\n}\\n\\n::-webkit-scrollbar-thumb {\\n  background-color: #edb021c5;\\n  border-radius: 9em;\\n}\\n\\n::-webkit-scrollbar-thumb:active {\\n  background-color: #825b00;\\n}\\n\\n.countries-list {\\n  grid-row: 1;\\n  grid-column: 1;\\n  -ms-grid-row: 1;\\n  -ms-grid-row-span: 4;\\n  -ms-grid-column: 1;\\n  grid-area: list;\\n  color: #EDB021;\\n  max-height: 100%;\\n  width: 100%;\\n  height: 100%;\\n  display: -ms-grid;\\n  display: grid;\\n  gap: 0px;\\n  grid-template-columns: 255px;\\n  grid-template-rows: 115px 40px auto 30px;\\n      grid-template-areas: \\\"total\\\" \\\"search\\\" \\\"countrieslist\\\" \\\"last\\\";\\n}\\n\\n.countries-list .total-cases {\\n  -ms-grid-row: 1;\\n  -ms-grid-column: 1;\\n  grid-area: total;\\n  font-size: 2em;\\n  display: -ms-grid;\\n  display: grid;\\n  gap: 4px;\\n  -ms-grid-columns: 35px 175px 35px;\\n      grid-template-columns: 35px 175px 35px;\\n  -ms-grid-rows: 115px;\\n      grid-template-rows: 115px;\\n      grid-template-areas: \\\"recoverBut digits deathsBut\\\";\\n}\\n\\n.countries-list .deaths {\\n      grid-template-areas: \\\"recoverBut digits totalBut\\\";\\n  color: #D2374A;\\n}\\n\\n.countries-list .recovered {\\n      grid-template-areas: \\\"totalBut digits deathsBut\\\";\\n  color: #5D9700;\\n}\\n\\n.countries-list .total-cases .deaths-button {\\n  -ms-grid-row: 1;\\n  -ms-grid-column: 3;\\n  grid-area: deathsBut;\\n  width: 25px;\\n  height: 25px;\\n  margin: auto auto;\\n  background: #D2374A;\\n  border: 2px solid #D2374A;\\n  border-radius: 20px;\\n}\\n\\n.countries-list .total-cases .recovered-button {\\n  -ms-grid-row: 1;\\n  -ms-grid-column: 1;\\n  grid-area: recoverBut;\\n  width: 25px;\\n  height: 25px;\\n  margin: auto auto;\\n  background: #5D9700;\\n  border: 2px solid #5D9700;\\n  border-radius: 20px;\\n}\\n\\n.countries-list .total-cases .total-button {\\n  -ms-grid-row: 1;\\n  -ms-grid-column: 1;\\n  grid-area: totalBut;\\n  width: 25px;\\n  height: 25px;\\n  margin: auto auto;\\n  border: 2px solid #EDB021;\\n  border-radius: 20px;\\n  background-color: #EDB021;\\n}\\n\\n.countries-list .total-cases .total-button:hover,\\n.countries-list .total-cases .deaths-button:hover,\\n.countries-list .total-cases .recovered-button:hover {\\n  cursor: pointer;\\n  -webkit-transition: all 0.2s;\\n  transition: all 0.2s;\\n  border: 2px solid silver;\\n}\\n\\n.countries-list .total-cases .total-button:active,\\n.countries-list .total-cases .deaths-button:active,\\n.countries-list .total-cases .recovered-button:active {\\n  cursor: pointer;\\n  -webkit-transition: all 0.2s;\\n  transition: all 0.2s;\\n  border: 3px solid silver;\\n  -webkit-filter: grayscale(40%);\\n          filter: grayscale(40%);\\n}\\n\\n.countries-list .total-cases .hidden-button {\\n  grid-area: none;\\n  cursor: none;\\n  display: none;\\n}\\n\\n.countries-list .total-cases .total {\\n  -ms-grid-row: 1;\\n  -ms-grid-column: 2;\\n  grid-area: digits;\\n  display: block;\\n  text-align: center;\\n  width: 100%;\\n  height: 40px;\\n  background: rgba(237, 176, 33, 0.1);\\n  border: 1px solid #EDB021;\\n  border-radius: 28px;\\n  margin: auto auto;\\n  font-family: Open Sans;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 28px;\\n  line-height: 38px;\\n}\\n\\n.countries-list .search {\\n  -ms-grid-row: 2;\\n  -ms-grid-column: 1;\\n  grid-area: search;\\n  -ms-grid-column-align: center;\\n      justify-self: center;\\n}\\n\\n.countries-list .search input {\\n  border: 1px solid snow;\\n  border-radius: 3px;\\n  -webkit-border-radius: 3px;\\n  -moz-border-radius: 3px;\\n  -khtml-border-radius: 3px;\\n  background: #0d0f11 !important;\\n  outline: none;\\n  height: 30px;\\n  width: 200px;\\n  color: #cccccc;\\n  font-size: 20px;\\n  text-align: center;\\n}\\n\\n.countries-list .search .material-icons {\\n  vertical-align: middle;\\n  color: white;\\n}\\n\\n.countries-list .search .material-icons .keyboard-hide:hover {\\n  vertical-align: middle;\\n  color: silver;\\n  -webkit-transition: all 0.2s;\\n  transition: all 0.2s;\\n}\\n\\n.countries-list .countries-table {\\n  -ms-grid-row: 3;\\n  -ms-grid-column: 1;\\n  grid-area: countrieslist;\\n  overflow: scroll;\\n  max-height: 100%;\\n  display: block;\\n  overflow: auto;\\n  color: #EDB021;\\n  border: 1px solid #EDB021;\\n  border-collapse: collapse;\\n  font-family: Arima Madurai;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 21px;\\n  line-height: 34px;\\n}\\n\\n.countries-list .countries-table .country-row .country {\\n  color: #D7ECF4;\\n}\\n\\n.countries-list .countries-table .country-row .total-deaths {\\n  color: #D2374A;\\n  white-space: nowrap;\\n  text-align: right;\\n}\\n\\n.countries-list .countries-table .country-row .total-recovered {\\n  color: #5D9700;\\n  white-space: nowrap;\\n  text-align: right;\\n}\\n\\n.countries-list .countries-table .country-row .total {\\n  white-space: nowrap;\\n  text-align: right;\\n}\\n\\n.countries-list .country-row {\\n  width: 100%;\\n}\\n\\n.countries-list .country-row img {\\n  vertical-align: middle;\\n}\\n\\n.countries-list .country-row td {\\n  padding: 0 2px;\\n}\\n\\n.countries-list .country-row:nth-child(2n) {\\n  background: #212121;\\n}\\n\\n.countries-list .country-row:hover {\\n  background: #515151;\\n  cursor: pointer;\\n}\\n\\n.countries-list .country-row:active {\\n  background: #000;\\n  cursor: pointer;\\n}\\n\\n.countries-list .last-update {\\n  -ms-grid-row: 4;\\n  -ms-grid-column: 1;\\n  grid-area: last;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  text-align: center;\\n  color: #EDB021;\\n  border: 1px solid #EDB021;\\n  font-family: Open Sans;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 13pt;\\n  line-height: 33px;\\n}\\n\\n.table {\\n  -ms-grid-row: 1;\\n  -ms-grid-row-span: 2;\\n  -ms-grid-column: 3;\\n  grid-area: table;\\n  border: 1px white dashed;\\n}\\n\\n.chart {\\n  -ms-grid-row: 3;\\n  -ms-grid-row-span: 2;\\n  -ms-grid-column: 3;\\n  grid-area: chart;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  padding: 10px 10px 0px 10px;\\n  position: relative;\\n}\\n\\n.full-screen-but {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  width: 25px;\\n  height: 25px;\\n  background: url(\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD0klEQVR4Xu2bzU7cMBDHx2aBvcHDAD1UvbHLab1RJfourcrH0j5NkWg2e6jYPVXqpdD2VYDbIti4MpVXbsgmnrFDHCm5xp7M/+exPXEmTIhIAv06TZJ4RO/u3lOI6BQATqiWGBUAY+xkPP56Rn2wz34uEKgAjpMk/uRThKstKgQKgKMkiT+7OlxFfwoELIBgxWugWAgIAHIOIN8kSfKritHzZXM4HL6Skn0HgE0bmwgAAGkKt5ynvVAhKPGLhbzknG/ZiFdtUABUh1AhUMSTAGgIjPH+ZHJxbUu6ynZU8WQAIUFwEV8AQC14rFs2amo61BkJOPH5mvLWgCMp+aWU6ZRz2C6HkN4x1um99HTAiYcbKfk+Y6nIps1ZAMt9fjB4uxsqBIr4yeTijxrMbJ5gAniW3oYIwUV8XrL0BKDoxeYfhMeZzd6aptVOBx/isxAUgJOyV1oshE6H9+M4vipbPzD3fYo3ITBbJ+qEUIV4rdsagOpQB4QqxT/lAbYRoNtFUbT3+Ki2yPJ8mzE5HY/HB9hnmO2FiKYA0LOwccM59OI4/m3RdtkEDUD1tIEgJfzsdtcPzs/P7zAOZdseHh5uzefzKWNrewV2SOJJEWATCb7E62cpCPf3DzMA2M2BQBbvBEB1zpufvsUXQVCpeKcD+9iwNyGSpoBpwIRQlXgj6rYXC5gxBjs+xDtHgHZMQQCAs42NjXeuc75svYiiaDtN4Qvn8N5l5EnbYJlzTbzvPAWaKNrrGtACaDiBdgo0fACd3W8jwBlhww20EdDwAXR2v40AZ4QNN9BGQMMH0Nn9NgKcETbcgJcIqONABCD94KNSxRnA/0dii6tut9uv6lRInQaZR2I+ynWcAOQfilYDwRSvZ52Pch0ygJIvNtebm+s9X5GQJ94XBBIAy89V15yD+kh667JOFon3AQENwFK89m2WJHHfBYDtpzHqdEABwIj3dW4vhNhJUz6zK9fB1zFaA6hDvI6cKiGoAglV869q7ldeGPEA4PStbpUTVUBQ2nWN0GgVhBDEVxEJg8FwxBg7NouknkEISbxPCEJE6kePI2UzWya3hBCieB8QhIjUjx4fta28QskRY/Ibour6qQhR1+G5bHmYvpQ1AYAPTfF5EaB9uLest69FPCUSACBXE7pc3hilWsUTITwLMiqAIMT7gEABEJR4VwhYAEGKd4GAACDnUq69funVHrMzqLZqdwDgPywXcfQ/QyszRqyjVbXP7vNlz0FEwNJUsBCw4ovygDJwwUEw09sy5837lAjQ/YOBoF9sMMKLUmGMndohYH+VzYr7CxnPLdCjSWNBAAAAAElFTkSuQmCC\\\") center/cover no-repeat;\\n}\\n\\n.hide-button {\\n  display: none;\\n}\\n\\n.map__tooltip {\\n  background-color: #27231f;\\n  border-radius: 8px;\\n  width: 90px;\\n  height: 35px;\\n  position: absolute;\\n  top: 100px;\\n  left: 100px;\\n  z-index: 5;\\n  text-align: center;\\n  color: #fff;\\n  line-height: 1.2;\\n  font-size: 12px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  font-family: Arial, \\\"Helvetica Neue\\\", Helvetica, sans-serif;\\n}\\n\\n.map__tooltip--hide {\\n  display: none;\\n}\\n\\n.leaflet-tile-pane {\\n  -webkit-filter: invert(1) saturate(9) sepia(1) !important;\\n          filter: invert(1) saturate(9) sepia(1) !important;\\n}\\n\\n.map__legend {\\n  padding: 6px 8px;\\n  font: 12px Arial, Helvetica, sans-serif;\\n  background: rgba(255, 255, 255, 0.8);\\n  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\\n          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\\n  line-height: 24px;\\n  color: #555;\\n  border-radius: 10px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  font-weight: 600;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n\\n.map__legend span {\\n  position: relative;\\n  margin-left: 3px;\\n  margin-right: 10px;\\n}\\n\\n.map__legend i {\\n  width: 18px;\\n  height: 18px;\\n  float: left;\\n  opacity: 0.7;\\n}\\n\\n.leaflet-bottom.leaflet-right {\\n  display: none;\\n}\\n\\n.leaflet-bottom.leaflet-left {\\n  left: 50%;\\n  -webkit-transform: translateX(-50%);\\n          transform: translateX(-50%);\\n}\\n\\n.map__full-screen-button {\\n  position: absolute;\\n  top: 10px;\\n  right: 10px;\\n  color: black;\\n  z-index: 10;\\n  border-radius: 4px;\\n  background: white;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  outline: none;\\n}\\n\\n#map.map--fullscreen {\\n  width: calc(100vw - 20px);\\n  height: calc(100vh - 20px);\\n  position: absolute !important;\\n  z-index: 4;\\n  -webkit-transition: all 0.5s;\\n  transition: all 0.5s;\\n}\\n\\n#map.map--fullscreen .leaflet-map-pane {\\n  /* left: 50%;\\r\\n    top: 50%;\\r\\n    transform: translate(-50%, -50%); */\\n}\\n\\n#map {\\n  background: #645945;\\n  -webkit-transition: all 0.5s;\\n  transition: all 0.5s;\\n}\\n\\n#map .map__param-changer {\\n  padding: 6px 8px;\\n  font: 12px Arial, Helvetica, sans-serif;\\n  background: rgba(255, 255, 255, 0.8);\\n  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\\n          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\\n  line-height: 24px;\\n  color: #555;\\n  border-radius: 10px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  font-weight: 600;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n\\nbody {\\n  background-color: #0d0f11;\\n  padding: 10px;\\n}\\n\\n.grid-wrapper {\\n  width: 100%;\\n  height: 100%;\\n  display: -ms-grid;\\n  display: grid;\\n  gap: 10px;\\n  -ms-grid-columns: 255px 1fr 320px;\\n      grid-template-columns: 255px 1fr 320px;\\n  -ms-grid-rows: 75px 1fr auto 75px;\\n      grid-template-rows: 75px 1fr auto 75px;\\n      grid-template-areas: \\\"list header table\\\"\\r \\\"list map table\\\"\\r \\\"list map chart\\\"\\r \\\"list footer chart\\\";\\n}\\n\\n.grid-wrapper .header {\\n  -ms-grid-row: 1;\\n  -ms-grid-column: 2;\\n  grid-area: header;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  border: 1px #d7ecf4 solid;\\n}\\n\\n.grid-wrapper .header h1 {\\n  font-family: Arial, \\\"Helvetica Neue\\\", Helvetica, sans-serif;\\n  font-size: 31px;\\n  letter-spacing: 0.25rem;\\n  color: #d7ecf4;\\n  text-transform: uppercase;\\n  text-align: center;\\n}\\n\\n.grid-wrapper .footer {\\n  -ms-grid-row: 4;\\n  -ms-grid-column: 2;\\n  grid-area: footer;\\n  position: relative;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  border: 1px #d7ecf4 solid;\\n}\\n\\n.grid-wrapper .footer .footer__school {\\n  position: absolute;\\n  top: 12px;\\n  right: 10px;\\n  padding: 5px;\\n  border-radius: 6px;\\n  background-color: rgba(255, 255, 255, 0.05);\\n}\\n\\n.grid-wrapper .footer .footer__developers {\\n  height: 100%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -ms-flex-pack: distribute;\\n      justify-content: space-around;\\n  font-family: Arial, \\\"Helvetica Neue\\\", Helvetica, sans-serif;\\n  text-align: center;\\n}\\n\\n.grid-wrapper .footer .footer__developers .title {\\n  color: #d7ecf4;\\n  font-size: 18px;\\n  letter-spacing: 0.2rem;\\n  text-transform: uppercase;\\n}\\n\\n.grid-wrapper .footer .footer__developers ul {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n}\\n\\n.grid-wrapper .footer .footer__developers ul li {\\n  padding: 0px 10px;\\n}\\n\\n.grid-wrapper .footer .footer__developers ul li span {\\n  position: relative;\\n  padding: 0px 0px 0px 23px;\\n}\\n\\n.grid-wrapper .footer .footer__developers ul li span::before {\\n  position: absolute;\\n  top: -2px;\\n  left: 0;\\n  content: \\\"\\\";\\n  background: url(\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAKQklEQVR4XuVbe5BT1Rn/fTdhH1RsC7Y8VAR1c8PD8THOMNTHqFVHKR1qrS1aWp1aN8kioh2F3GghIpsbkA7yzM1qHWm1XaVYa61aX+0oMNShrR2Fzc1isaXKIi618tpX7tc5cSNJNsk9N5sszHj+zP19v+87v/P+zgnhc17oc15/DLkA8xa3n9yXSo21GCNcjBGiAVKEgwrhoNvl2rvm/oZPhrJRqirAjxYkRtS6lUvZ4stBfCFAKoAxNhXsANgE03YmvOaq7Xt9fXjKoWqJUnEB5s1rr+0dkZoFppsBXA3APcjge5nxkgLe4D7senbNmobuQfLlmFdMgDvDu790tLvnDgLuADCqkkFmcXUysLq+tmb1Q+GJH1fCx6AFuCG8o2ZU17B7QLwAwMmVCEqC4xMwLe+s631wY3hKjwS+KGRQAviDiSuIKMaAZzBBlG3LMAFuMqLe18rlKEuAcPhP7r09py4lTrd6WRzlBlzAjplo+dia9+8Lhy/vc8rrOPh5WvtXemFtAnCJU2dVxr8xDMr1a/SG/U78OBLAH2ybALheAnGDEydDhmVqB1JXG9FJ78n6lBagUTO9CiDG2lhZ8uOE20suvjy21GvK+JcSwH+veSos3grQeBnS44/hf7tTmL52ufcDu1hsBRC7uRqXshXgqXZkJ9j3t3tSfNGjy70HS8VlK0BAM1sZ+N4JVjnZcFoNXb2xbAH8mnkbgJaS3pjnWKTsIlinE+gGgGcCNFw2Qmc4PgLQcwzeyFD2uMhqYKZf2nA0Grr6cDFM0R7w4wXtpw1zWQkGvlDCwSGr8+DIlpYLezOYpvCOk6we991giD1CvbMKFkUfBWG5UtO3Ivtg1Ni4fZhr1Ij/2sUIBV6jWX2/EHtRAfya+SSA79pU4HlDV79RCNO48N3xLqVvef/wYTCSINoORhsDnaRYB8hSDghbVqyRbCkjSZwhCJPAfCEovbsU8bUqimvB+uaz9xTy4w+az4NwrU03fzKmq7OlBQho5iUMvG7XegReEdO995TC3aa1eepq3B1Oz/kib9DV0zfmYX1SshR/QEs8yKC77WPFpTFdfSMfV7AH+DXzZQBXSpAuienqYjtcNb/7Q8klYP6phI+XDV0Vx/OcMkCARi05TQFvkyAEiB4wIp5FUtgqgRwIACiYZjSrb2aHMkAAv5Z4AqCbJON9ztDVb0piqwILBBPPMpFkDPSEoXvmFBUgPYN3u/Y5WMb2G7r61arUTJLUr5l7JdJs/Wx8RKlNjc5eSXJ6gC9k/pAYGyR9C9irhu65CiB2YFNRqE9L/JFAA8Z2MSdMuDkeUX+R+Z4jgOTSl7HtQK/rXGPF2R9WtEYOyfqP528BGCdjSkDOkpglAJNfS3YAkOrSzBSIRz2GjNNqY6R2rMeC+NDQ1dEDeoBPa59MsHZIBrvH6jx4VvYOUNKuKjCRoeroHrcLwBkyDhjKlLjesFNgP+sB/pA5G4xfyxAAvNrQvfPlsEOD8mnJlQS+U8YbM2bHo6rY6WYJEDQXgxCWI+Br41HvizLYocL4golriOgFGX8MLI7r6pJcAbTk4wB/X4bApaQmrGue/C8Z7FBh0uk6UnbL+GPG4/Go+oMcAQKa+QID18gQdNXW1D8Wntglgx0qzC3h3XV13T1HpfwxXjCi6oy8HmBuBnCRBIFl6B738Vz7C8eYXsVEWlyxqwMRNsciajqrfWwS1Eyxlp5rZyy+99b2jfp5eEr6KHuilLla26gUlI9k4mHgrbiunp8/CW4B4WsyBORir2zWVYavEpj+rHWbJNcWQ1cvzhUgZD4Dxiw5Ar7Y0L1b5LBDg2pcaF6sKBhw3i/knYFn4rp6Xf4k+AgDt0qGWzLPJslRUZij3SDhESOiinxnzhygAwhKRUW8yYh4vyOFHSKQP2Q+DUa6Ve0KEfRYRA3lCOALJeYT00N2xuI7Ax8f2OU5ZeNGSsngq43p3wp3yl/P03xD96zOFUBrn06wtsoGyxZ/K77M+ztZfDVx/qB5HQhPy/ogRZkea25IZ70+WwZFilkZddLHDpIhiTG1H5xTzpW0bKAyuHTrd417BwTx/si2EHA41Xnwy5mDXH4+4BUAX7dlyQAY84youlYaXwWgL2g2EWGdA+pXDF29KoPPzQhp5iIC7ndA1sNEM+MRj8giD3kJBJNXMvEfANRIO2deZES9DxQUoDHUfoHC1l+lyT4dQ4eZrZlGdNKfndgNFusPtl0GUn4P4CRHXKxcYEQb/l5QAPFjQDO3MTDNESlggbGqq64mVO1DUmP4g+FK16EIiOfJ7Ptz6sHYZkTV6dm/DUiLB0KJOUUuHFsJSDLhMnB6y1zo/d9eEFospOItkckiW1uxcvuCxLiUi3wMNMpngfPcM88xot4nSgqQfvbW7Rb3cDm5QSa+Mx7xrhLGvvt2NlBKaQXogiI1FPuDv4msMVu8TRmGxGj33ndlV4y77tpT31V/uMFieBRgGgNXAHSe4xbPDW5fZ23f+PxndQWvxnzFJkPi5jE16qJwmCwR5NG6w5tLiJDtvpcU5dLM2mvXLZpCyfMsZnE3mX5LXJGSN/kVnQPEh3QL1B3ZwcDEAs43GLp6i/h97r07z0hZLtHSI0sGWcR5KRtf0NSIEKlI5YF/1ncNn7py5ekDEiZFr8d9mjmDALHEDCjE5ItFPemHE76FiVmk0DOlAlUU1/hi19vF7MTT267uHnG+dw1WBCLMiEXUgvnCkk9kApq5iYFvFwigo75r+JkZRftvlIQgtQWw/zB0VYxfx6XMFSnXj83BraQA6ddhjLfAOCU/+uxJUXxrunfX6Smrr5FA0whIMaiTCX9Jwf3UI5Ez9zmu/adL8mDfJ+2HgvOLvQ4RMdk+kvJriYsAerVA6/7HstxTW5ad9b9yKidj49fMNQBul8EWwHQrinXF+uZJJQ94tgKkx3kweSMR/yrfCQEvfrTLM7Nax2K/llgFkHh+77QwCDcZEbXVzlBKgLQIxc8JrXW1NYFKvd/PDjigmasZEDs+RyX74sPOUFoAQRTQzBADSwsMHfGmYAMp9Ntedu0+rWbi/n1db3+RUT+BCd2Zezi7YPK/lzEEmID7YroqvXw6EkAE2H+H+FiRGT9TB+vYrq38e0SfZq4lYK6kcN0g3CLT7bP5HAuQFkFMjEQiizxgdRiwWgDr4rpa1kTmD5nrwGiSEOCAZWFWyzJVXO44KmUJIDw0hnaOVdglcog2bwkpZugemUoMCNyvJdcDHChdI/qNO2XNl3kYXYinbAEyZOJWViFaX2TbLFKocUP3+h01Sz84EErEmKmY7XsMzI3r6vPlcGdsBi2AIEofjGqP/gTEYrzm/5/gYUNXxRHWcSnSAzrAvN6qO/lnLeFxRxyT5hlURIAMZzqxesqI68F8B0CfJh6IbzUi3kfLCTSgmTczICZcUd4E82rrwKGnKvkypaICZFeyaUFykuXucxmRye+UU/nPRF3Yds4wuK11yxpkn+84clc1ARxFcRzBn3sB/g+Wo8RuBdGaOQAAAABJRU5ErkJggg==\\\") center/cover no-repeat;\\n  width: 20px;\\n  height: 20px;\\n}\\n\\n.grid-wrapper .footer .footer__developers ul li a {\\n  font-size: 16px;\\n  color: rgba(215, 236, 244, 0.9);\\n}\\n\\n.grid-wrapper .footer .footer__developers ul li a:hover {\\n  text-decoration: underline;\\n}\\n\\n.grid-wrapper .footer .footer__year {\\n  position: absolute;\\n  bottom: 10px;\\n  left: 10px;\\n}\\n\\n.grid-wrapper .footer .footer__year span {\\n  font-family: Arial, \\\"Helvetica Neue\\\", Helvetica, sans-serif;\\n  font-size: 14px;\\n  color: #edb021;\\n}\\n\\n#map {\\n  -ms-grid-row: 2;\\n  -ms-grid-row-span: 2;\\n  -ms-grid-column: 2;\\n  grid-area: map;\\n  border: 1px white dashed;\\n  border-radius: 20px;\\n}\\n\\n.full-screen {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  background-color: rgba(0, 0, 0, 0.9);\\n}\\n\\n.full-screen form {\\n  padding: 10px;\\n  height: 100%;\\n  width: 100%;\\n  position: relative;\\n}\\n\\n.full-screen form section {\\n  border: 1px #d7ecf4 solid;\\n  width: 100%;\\n  height: 100%;\\n  padding: 20px 15px 5px 15px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n\\n.full-screen form section canvas {\\n  max-height: 100%;\\n}\\n\\n.full-screen form button {\\n  position: absolute;\\n  width: 35px;\\n  height: 35px;\\n  background: transparent;\\n  top: 15px;\\n  right: 15px;\\n}\\n\\n.full-screen form button::before,\\n.full-screen form button::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 50%;\\n  left: 0;\\n  -webkit-transform: translate(0, -50%);\\n          transform: translate(0, -50%);\\n  height: 1px;\\n  width: 100%;\\n  background-color: rgba(215, 236, 244, 0.8);\\n}\\n\\n.full-screen form button::before {\\n  -webkit-transform: rotate(45deg);\\n          transform: rotate(45deg);\\n}\\n\\n.full-screen form button::after {\\n  -webkit-transform: rotate(-45deg);\\n          transform: rotate(-45deg);\\n}\\n\\n@media screen and (max-width: 1200px) {\\n  .footer__school,\\n  .footer__year {\\n    display: none;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://covid/./src/components/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = []; // return the list of modules as css string\r\n\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = cssWithMappingToString(item);\r\n\r\n      if (item[2]) {\r\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n      }\r\n\r\n      return content;\r\n    }).join('');\r\n  }; // import a list of modules into the list\r\n  // eslint-disable-next-line func-names\r\n\r\n\r\n  list.i = function (modules, mediaQuery, dedupe) {\r\n    if (typeof modules === 'string') {\r\n      // eslint-disable-next-line no-param-reassign\r\n      modules = [[null, modules, '']];\r\n    }\r\n\r\n    var alreadyImportedModules = {};\r\n\r\n    if (dedupe) {\r\n      for (var i = 0; i < this.length; i++) {\r\n        // eslint-disable-next-line prefer-destructuring\r\n        var id = this[i][0];\r\n\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    for (var _i = 0; _i < modules.length; _i++) {\r\n      var item = [].concat(modules[_i]);\r\n\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        // eslint-disable-next-line no-continue\r\n        continue;\r\n      }\r\n\r\n      if (mediaQuery) {\r\n        if (!item[2]) {\r\n          item[2] = mediaQuery;\r\n        } else {\r\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n        }\r\n      }\r\n\r\n      list.push(item);\r\n    }\r\n  };\r\n\r\n  return list;\r\n};\n\n//# sourceURL=webpack://covid/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/api/coordinats.json":
/*!*********************************!*
  !*** ./src/api/coordinats.json ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = [{\"timezones\":[\"America/Aruba\"],\"latlng\":[12.5,-69.96666666],\"name\":\"Aruba\",\"country_code\":\"AW\",\"capital\":\"Oranjestad\"},{\"timezones\":[\"Asia/Kabul\"],\"latlng\":[33,65],\"name\":\"Afghanistan\",\"country_code\":\"AF\",\"capital\":\"Kabul\"},{\"timezones\":[\"Africa/Luanda\"],\"latlng\":[-12.5,18.5],\"name\":\"Angola\",\"country_code\":\"AO\",\"capital\":\"Luanda\"},{\"timezones\":[\"America/Anguilla\"],\"latlng\":[18.25,-63.16666666],\"name\":\"Anguilla\",\"country_code\":\"AI\",\"capital\":\"The Valley\"},{\"timezones\":[\"Europe/Mariehamn\"],\"latlng\":[60.116667,19.9],\"name\":\"Åland Islands\",\"country_code\":\"AX\",\"capital\":\"Mariehamn\"},{\"timezones\":[\"Europe/Tirane\"],\"latlng\":[41,20],\"name\":\"Albania\",\"country_code\":\"AL\",\"capital\":\"Tirana\"},{\"timezones\":[\"Europe/Andorra\"],\"latlng\":[42.5,1.5],\"name\":\"Andorra\",\"country_code\":\"AD\",\"capital\":\"Andorra la Vella\"},{\"timezones\":[\"Asia/Dubai\"],\"latlng\":[24,54],\"name\":\"United Arab Emirates\",\"country_code\":\"AE\",\"capital\":\"Abu Dhabi\"},{\"timezones\":[\"America/Argentina/Buenos_Aires\",\"America/Argentina/Cordoba\",\"America/Argentina/Salta\",\"America/Argentina/Jujuy\",\"America/Argentina/Tucuman\",\"America/Argentina/Catamarca\",\"America/Argentina/La_Rioja\",\"America/Argentina/San_Juan\",\"America/Argentina/Mendoza\",\"America/Argentina/San_Luis\",\"America/Argentina/Rio_Gallegos\",\"America/Argentina/Ushuaia\"],\"latlng\":[-34,-64],\"name\":\"Argentina\",\"country_code\":\"AR\",\"capital\":\"Buenos Aires\"},{\"timezones\":[\"Asia/Yerevan\"],\"latlng\":[40,45],\"name\":\"Armenia\",\"country_code\":\"AM\",\"capital\":\"Yerevan\"},{\"timezones\":[\"Pacific/Pago_Pago\"],\"latlng\":[-14.33333333,-170],\"name\":\"American Samoa\",\"country_code\":\"AS\",\"capital\":\"Pago Pago\"},{\"timezones\":[\"Antarctica/McMurdo\",\"Antarctica/Casey\",\"Antarctica/Davis\",\"Antarctica/DumontDUrville\",\"Antarctica/Mawson\",\"Antarctica/Palmer\",\"Antarctica/Rothera\",\"Antarctica/Syowa\",\"Antarctica/Troll\",\"Antarctica/Vostok\"],\"latlng\":[-90,0],\"name\":\"Antarctica\",\"country_code\":\"AQ\",\"capital\":null},{\"timezones\":[\"Indian/Kerguelen\"],\"latlng\":[-49.25,69.167],\"name\":\"French Southern and Antarctic Lands\",\"country_code\":\"TF\",\"capital\":\"Port-aux-Français\"},{\"timezones\":[\"America/Antigua\"],\"latlng\":[17.05,-61.8],\"name\":\"Antigua and Barbuda\",\"country_code\":\"AG\",\"capital\":\"Saint John's\"},{\"timezones\":[\"Australia/Lord_Howe\",\"Antarctica/Macquarie\",\"Australia/Hobart\",\"Australia/Currie\",\"Australia/Melbourne\",\"Australia/Sydney\",\"Australia/Broken_Hill\",\"Australia/Brisbane\",\"Australia/Lindeman\",\"Australia/Adelaide\",\"Australia/Darwin\",\"Australia/Perth\",\"Australia/Eucla\"],\"latlng\":[-27,133],\"name\":\"Australia\",\"country_code\":\"AU\",\"capital\":\"Canberra\"},{\"timezones\":[\"Europe/Vienna\"],\"latlng\":[47.33333333,13.33333333],\"name\":\"Austria\",\"country_code\":\"AT\",\"capital\":\"Vienna\"},{\"timezones\":[\"Asia/Baku\"],\"latlng\":[40.5,47.5],\"name\":\"Azerbaijan\",\"country_code\":\"AZ\",\"capital\":\"Baku\"},{\"timezones\":[\"Africa/Bujumbura\"],\"latlng\":[-3.5,30],\"name\":\"Burundi\",\"country_code\":\"BI\",\"capital\":\"Bujumbura\"},{\"timezones\":[\"Europe/Brussels\"],\"latlng\":[50.83333333,4],\"name\":\"Belgium\",\"country_code\":\"BE\",\"capital\":\"Brussels\"},{\"timezones\":[\"Africa/Porto-Novo\"],\"latlng\":[9.5,2.25],\"name\":\"Benin\",\"country_code\":\"BJ\",\"capital\":\"Porto-Novo\"},{\"timezones\":[\"Africa/Ouagadougou\"],\"latlng\":[13,-2],\"name\":\"Burkina Faso\",\"country_code\":\"BF\",\"capital\":\"Ouagadougou\"},{\"timezones\":[\"Asia/Dhaka\"],\"latlng\":[24,90],\"name\":\"Bangladesh\",\"country_code\":\"BD\",\"capital\":\"Dhaka\"},{\"timezones\":[\"Europe/Sofia\"],\"latlng\":[43,25],\"name\":\"Bulgaria\",\"country_code\":\"BG\",\"capital\":\"Sofia\"},{\"timezones\":[\"Asia/Bahrain\"],\"latlng\":[26,50.55],\"name\":\"Bahrain\",\"country_code\":\"BH\",\"capital\":\"Manama\"},{\"timezones\":[\"America/Nassau\"],\"latlng\":[24.25,-76],\"name\":\"Bahamas\",\"country_code\":\"BS\",\"capital\":\"Nassau\"},{\"timezones\":[\"Europe/Sarajevo\"],\"latlng\":[44,18],\"name\":\"Bosnia and Herzegovina\",\"country_code\":\"BA\",\"capital\":\"Sarajevo\"},{\"timezones\":[\"America/St_Barthelemy\"],\"latlng\":[18.5,-63.41666666],\"name\":\"Saint Barthélemy\",\"country_code\":\"BL\",\"capital\":\"Gustavia\"},{\"timezones\":[\"Europe/Minsk\"],\"latlng\":[53,28],\"name\":\"Belarus\",\"country_code\":\"BY\",\"capital\":\"Minsk\"},{\"timezones\":[\"America/Belize\"],\"latlng\":[17.25,-88.75],\"name\":\"Belize\",\"country_code\":\"BZ\",\"capital\":\"Belmopan\"},{\"timezones\":[\"Atlantic/Bermuda\"],\"latlng\":[32.33333333,-64.75],\"name\":\"Bermuda\",\"country_code\":\"BM\",\"capital\":\"Hamilton\"},{\"timezones\":[\"America/La_Paz\"],\"latlng\":[-17,-65],\"name\":\"Bolivia\",\"country_code\":\"BO\",\"capital\":\"Sucre\"},{\"timezones\":[\"America/Noronha\",\"America/Belem\",\"America/Fortaleza\",\"America/Recife\",\"America/Araguaina\",\"America/Maceio\",\"America/Bahia\",\"America/Sao_Paulo\",\"America/Campo_Grande\",\"America/Cuiaba\",\"America/Santarem\",\"America/Porto_Velho\",\"America/Boa_Vista\",\"America/Manaus\",\"America/Eirunepe\",\"America/Rio_Branco\"],\"latlng\":[-10,-55],\"name\":\"Brazil\",\"country_code\":\"BR\",\"capital\":\"Brasília\"},{\"timezones\":[\"America/Barbados\"],\"latlng\":[13.16666666,-59.53333333],\"name\":\"Barbados\",\"country_code\":\"BB\",\"capital\":\"Bridgetown\"},{\"timezones\":[\"Asia/Brunei\"],\"latlng\":[4.5,114.66666666],\"name\":\"Brunei\",\"country_code\":\"BN\",\"capital\":\"Bandar Seri Begawan\"},{\"timezones\":[\"Asia/Thimphu\"],\"latlng\":[27.5,90.5],\"name\":\"Bhutan\",\"country_code\":\"BT\",\"capital\":\"Thimphu\"},{\"timezones\":[\"Europe/Oslo\"],\"latlng\":[-54.43333333,3.4],\"name\":\"Bouvet Island\",\"country_code\":\"BV\",\"capital\":null},{\"timezones\":[\"Africa/Gaborone\"],\"latlng\":[-22,24],\"name\":\"Botswana\",\"country_code\":\"BW\",\"capital\":\"Gaborone\"},{\"timezones\":[\"Africa/Bangui\"],\"latlng\":[7,21],\"name\":\"Central African Republic\",\"country_code\":\"CF\",\"capital\":\"Bangui\"},{\"timezones\":[\"America/St_Johns\",\"America/Halifax\",\"America/Glace_Bay\",\"America/Moncton\",\"America/Goose_Bay\",\"America/Blanc-Sablon\",\"America/Toronto\",\"America/Nipigon\",\"America/Thunder_Bay\",\"America/Iqaluit\",\"America/Pangnirtung\",\"America/Atikokan\",\"America/Winnipeg\",\"America/Rainy_River\",\"America/Resolute\",\"America/Rankin_Inlet\",\"America/Regina\",\"America/Swift_Current\",\"America/Edmonton\",\"America/Cambridge_Bay\",\"America/Yellowknife\",\"America/Inuvik\",\"America/Creston\",\"America/Dawson_Creek\",\"America/Fort_Nelson\",\"America/Vancouver\",\"America/Whitehorse\",\"America/Dawson\"],\"latlng\":[60,-95],\"name\":\"Canada\",\"country_code\":\"CA\",\"capital\":\"Ottawa\"},{\"timezones\":[\"Indian/Cocos\"],\"latlng\":[-12.5,96.83333333],\"name\":\"Cocos (Keeling) Islands\",\"country_code\":\"CC\",\"capital\":\"West Island\"},{\"timezones\":[\"Europe/Zurich\"],\"latlng\":[47,8],\"name\":\"Switzerland\",\"country_code\":\"CH\",\"capital\":\"Bern\"},{\"timezones\":[\"America/Santiago\",\"Pacific/Easter\"],\"latlng\":[-30,-71],\"name\":\"Chile\",\"country_code\":\"CL\",\"capital\":\"Santiago\"},{\"timezones\":[\"Asia/Shanghai\",\"Asia/Urumqi\"],\"latlng\":[35,105],\"name\":\"China\",\"country_code\":\"CN\",\"capital\":\"Beijing\"},{\"timezones\":[\"Africa/Abidjan\"],\"latlng\":[8,-5],\"name\":\"Ivory Coast\",\"country_code\":\"CI\",\"capital\":\"Yamoussoukro\"},{\"timezones\":[\"Africa/Douala\"],\"latlng\":[6,12],\"name\":\"Cameroon\",\"country_code\":\"CM\",\"capital\":\"Yaoundé\"},{\"timezones\":[\"Africa/Kinshasa\",\"Africa/Lubumbashi\"],\"latlng\":[0,25],\"name\":\"DR Congo\",\"country_code\":\"CD\",\"capital\":\"Kinshasa\"},{\"timezones\":[\"Africa/Brazzaville\"],\"latlng\":[-1,15],\"name\":\"Republic of the Congo\",\"country_code\":\"CG\",\"capital\":\"Brazzaville\"},{\"timezones\":[\"Pacific/Rarotonga\"],\"latlng\":[-21.23333333,-159.76666666],\"name\":\"Cook Islands\",\"country_code\":\"CK\",\"capital\":\"Avarua\"},{\"timezones\":[\"America/Bogota\"],\"latlng\":[4,-72],\"name\":\"Colombia\",\"country_code\":\"CO\",\"capital\":\"Bogotá\"},{\"timezones\":[\"Indian/Comoro\"],\"latlng\":[-12.16666666,44.25],\"name\":\"Comoros\",\"country_code\":\"KM\",\"capital\":\"Moroni\"},{\"timezones\":[\"Atlantic/Cape_Verde\"],\"latlng\":[16,-24],\"name\":\"Cape Verde\",\"country_code\":\"CV\",\"capital\":\"Praia\"},{\"timezones\":[\"America/Costa_Rica\"],\"latlng\":[10,-84],\"name\":\"Costa Rica\",\"country_code\":\"CR\",\"capital\":\"San José\"},{\"timezones\":[\"America/Havana\"],\"latlng\":[21.5,-80],\"name\":\"Cuba\",\"country_code\":\"CU\",\"capital\":\"Havana\"},{\"timezones\":[\"America/Curacao\"],\"latlng\":[12.116667,-68.933333],\"name\":\"Curaçao\",\"country_code\":\"CW\",\"capital\":\"Willemstad\"},{\"timezones\":[\"Indian/Christmas\"],\"latlng\":[-10.5,105.66666666],\"name\":\"Christmas Island\",\"country_code\":\"CX\",\"capital\":\"Flying Fish Cove\"},{\"timezones\":[\"America/Cayman\"],\"latlng\":[19.5,-80.5],\"name\":\"Cayman Islands\",\"country_code\":\"KY\",\"capital\":\"George Town\"},{\"timezones\":[\"Asia/Nicosia\"],\"latlng\":[35,33],\"name\":\"Cyprus\",\"country_code\":\"CY\",\"capital\":\"Nicosia\"},{\"timezones\":[\"Europe/Prague\"],\"latlng\":[49.75,15.5],\"name\":\"Czech Republic\",\"country_code\":\"CZ\",\"capital\":\"Prague\"},{\"timezones\":[\"Europe/Berlin\",\"Europe/Busingen\"],\"latlng\":[51,9],\"name\":\"Germany\",\"country_code\":\"DE\",\"capital\":\"Berlin\"},{\"timezones\":[\"Africa/Djibouti\"],\"latlng\":[11.5,43],\"name\":\"Djibouti\",\"country_code\":\"DJ\",\"capital\":\"Djibouti\"},{\"timezones\":[\"America/Dominica\"],\"latlng\":[15.41666666,-61.33333333],\"name\":\"Dominica\",\"country_code\":\"DM\",\"capital\":\"Roseau\"},{\"timezones\":[\"Europe/Copenhagen\"],\"latlng\":[56,10],\"name\":\"Denmark\",\"country_code\":\"DK\",\"capital\":\"Copenhagen\"},{\"timezones\":[\"America/Santo_Domingo\"],\"latlng\":[19,-70.66666666],\"name\":\"Dominican Republic\",\"country_code\":\"DO\",\"capital\":\"Santo Domingo\"},{\"timezones\":[\"Africa/Algiers\"],\"latlng\":[28,3],\"name\":\"Algeria\",\"country_code\":\"DZ\",\"capital\":\"Algiers\"},{\"timezones\":[\"America/Guayaquil\",\"Pacific/Galapagos\"],\"latlng\":[-2,-77.5],\"name\":\"Ecuador\",\"country_code\":\"EC\",\"capital\":\"Quito\"},{\"timezones\":[\"Africa/Cairo\"],\"latlng\":[27,30],\"name\":\"Egypt\",\"country_code\":\"EG\",\"capital\":\"Cairo\"},{\"timezones\":[\"Africa/Asmara\"],\"latlng\":[15,39],\"name\":\"Eritrea\",\"country_code\":\"ER\",\"capital\":\"Asmara\"},{\"timezones\":[\"Africa/El_Aaiun\"],\"latlng\":[24.5,-13],\"name\":\"Western Sahara\",\"country_code\":\"EH\",\"capital\":\"El Aaiún\"},{\"timezones\":[\"Europe/Madrid\",\"Africa/Ceuta\",\"Atlantic/Canary\"],\"latlng\":[40,-4],\"name\":\"Spain\",\"country_code\":\"ES\",\"capital\":\"Madrid\"},{\"timezones\":[\"Europe/Tallinn\"],\"latlng\":[59,26],\"name\":\"Estonia\",\"country_code\":\"EE\",\"capital\":\"Tallinn\"},{\"timezones\":[\"Africa/Addis_Ababa\"],\"latlng\":[8,38],\"name\":\"Ethiopia\",\"country_code\":\"ET\",\"capital\":\"Addis Ababa\"},{\"timezones\":[\"Europe/Helsinki\"],\"latlng\":[64,26],\"name\":\"Finland\",\"country_code\":\"FI\",\"capital\":\"Helsinki\"},{\"timezones\":[\"Pacific/Fiji\"],\"latlng\":[-18,175],\"name\":\"Fiji\",\"country_code\":\"FJ\",\"capital\":\"Suva\"},{\"timezones\":[\"Atlantic/Stanley\"],\"latlng\":[-51.75,-59],\"name\":\"Falkland Islands\",\"country_code\":\"FK\",\"capital\":\"Stanley\"},{\"timezones\":[\"Europe/Paris\"],\"latlng\":[46,2],\"name\":\"France\",\"country_code\":\"FR\",\"capital\":\"Paris\"},{\"timezones\":[\"Atlantic/Faroe\"],\"latlng\":[62,-7],\"name\":\"Faroe Islands\",\"country_code\":\"FO\",\"capital\":\"Tórshavn\"},{\"timezones\":[\"Pacific/Chuuk\",\"Pacific/Pohnpei\",\"Pacific/Kosrae\"],\"latlng\":[6.91666666,158.25],\"name\":\"Micronesia\",\"country_code\":\"FM\",\"capital\":\"Palikir\"},{\"timezones\":[\"Africa/Libreville\"],\"latlng\":[-1,11.75],\"name\":\"Gabon\",\"country_code\":\"GA\",\"capital\":\"Libreville\"},{\"timezones\":[\"Europe/London\"],\"latlng\":[54,-2],\"name\":\"United Kingdom\",\"country_code\":\"GB\",\"capital\":\"London\"},{\"timezones\":[\"Asia/Tbilisi\"],\"latlng\":[42,43.5],\"name\":\"Georgia\",\"country_code\":\"GE\",\"capital\":\"Tbilisi\"},{\"timezones\":[\"Europe/Guernsey\"],\"latlng\":[49.46666666,-2.58333333],\"name\":\"Guernsey\",\"country_code\":\"GG\",\"capital\":\"St. Peter Port\"},{\"timezones\":[\"Africa/Accra\"],\"latlng\":[8,-2],\"name\":\"Ghana\",\"country_code\":\"GH\",\"capital\":\"Accra\"},{\"timezones\":[\"Europe/Gibraltar\"],\"latlng\":[36.13333333,-5.35],\"name\":\"Gibraltar\",\"country_code\":\"GI\",\"capital\":\"Gibraltar\"},{\"timezones\":[\"Africa/Conakry\"],\"latlng\":[11,-10],\"name\":\"Guinea\",\"country_code\":\"GN\",\"capital\":\"Conakry\"},{\"timezones\":[\"America/Guadeloupe\"],\"latlng\":[16.25,-61.583333],\"name\":\"Guadeloupe\",\"country_code\":\"GP\",\"capital\":\"Basse-Terre\"},{\"timezones\":[\"Africa/Banjul\"],\"latlng\":[13.46666666,-16.56666666],\"name\":\"Gambia\",\"country_code\":\"GM\",\"capital\":\"Banjul\"},{\"timezones\":[\"Africa/Bissau\"],\"latlng\":[12,-15],\"name\":\"Guinea-Bissau\",\"country_code\":\"GW\",\"capital\":\"Bissau\"},{\"timezones\":[\"Africa/Malabo\"],\"latlng\":[2,10],\"name\":\"Equatorial Guinea\",\"country_code\":\"GQ\",\"capital\":\"Malabo\"},{\"timezones\":[\"Europe/Athens\"],\"latlng\":[39,22],\"name\":\"Greece\",\"country_code\":\"GR\",\"capital\":\"Athens\"},{\"timezones\":[\"America/Grenada\"],\"latlng\":[12.11666666,-61.66666666],\"name\":\"Grenada\",\"country_code\":\"GD\",\"capital\":\"St. George's\"},{\"timezones\":[\"America/Godthab\",\"America/Danmarkshavn\",\"America/Scoresbysund\",\"America/Thule\"],\"latlng\":[72,-40],\"name\":\"Greenland\",\"country_code\":\"GL\",\"capital\":\"Nuuk\"},{\"timezones\":[\"America/Guatemala\"],\"latlng\":[15.5,-90.25],\"name\":\"Guatemala\",\"country_code\":\"GT\",\"capital\":\"Guatemala City\"},{\"timezones\":[\"America/Cayenne\"],\"latlng\":[4,-53],\"name\":\"French Guiana\",\"country_code\":\"GF\",\"capital\":\"Cayenne\"},{\"timezones\":[\"Pacific/Guam\"],\"latlng\":[13.46666666,144.78333333],\"name\":\"Guam\",\"country_code\":\"GU\",\"capital\":\"Hagåtña\"},{\"timezones\":[\"America/Guyana\"],\"latlng\":[5,-59],\"name\":\"Guyana\",\"country_code\":\"GY\",\"capital\":\"Georgetown\"},{\"timezones\":[\"Asia/Hong_Kong\"],\"latlng\":[22.267,114.188],\"name\":\"Hong Kong\",\"country_code\":\"HK\",\"capital\":\"City of Victoria\"},{\"timezones\":[\"America/Tegucigalpa\"],\"latlng\":[15,-86.5],\"name\":\"Honduras\",\"country_code\":\"HN\",\"capital\":\"Tegucigalpa\"},{\"timezones\":[\"Europe/Zagreb\"],\"latlng\":[45.16666666,15.5],\"name\":\"Croatia\",\"country_code\":\"HR\",\"capital\":\"Zagreb\"},{\"timezones\":[\"America/Port-au-Prince\"],\"latlng\":[19,-72.41666666],\"name\":\"Haiti\",\"country_code\":\"HT\",\"capital\":\"Port-au-Prince\"},{\"timezones\":[\"Europe/Budapest\"],\"latlng\":[47,20],\"name\":\"Hungary\",\"country_code\":\"HU\",\"capital\":\"Budapest\"},{\"timezones\":[\"Asia/Jakarta\",\"Asia/Pontianak\",\"Asia/Makassar\",\"Asia/Jayapura\"],\"latlng\":[-5,120],\"name\":\"Indonesia\",\"country_code\":\"ID\",\"capital\":\"Jakarta\"},{\"timezones\":[\"Europe/Isle_of_Man\"],\"latlng\":[54.25,-4.5],\"name\":\"Isle of Man\",\"country_code\":\"IM\",\"capital\":\"Douglas\"},{\"timezones\":[\"Asia/Kolkata\"],\"latlng\":[20,77],\"name\":\"India\",\"country_code\":\"IN\",\"capital\":\"New Delhi\"},{\"timezones\":[\"Indian/Chagos\"],\"latlng\":[-6,71.5],\"name\":\"British Indian Ocean Territory\",\"country_code\":\"IO\",\"capital\":\"Diego Garcia\"},{\"timezones\":[\"Europe/Dublin\"],\"latlng\":[53,-8],\"name\":\"Ireland\",\"country_code\":\"IE\",\"capital\":\"Dublin\"},{\"timezones\":[\"Asia/Tehran\"],\"latlng\":[32,53],\"name\":\"Iran\",\"country_code\":\"IR\",\"capital\":\"Tehran\"},{\"timezones\":[\"Asia/Baghdad\"],\"latlng\":[33,44],\"name\":\"Iraq\",\"country_code\":\"IQ\",\"capital\":\"Baghdad\"},{\"timezones\":[\"Atlantic/Reykjavik\"],\"latlng\":[65,-18],\"name\":\"Iceland\",\"country_code\":\"IS\",\"capital\":\"Reykjavik\"},{\"timezones\":[\"Asia/Jerusalem\"],\"latlng\":[31.47,35.13],\"name\":\"Israel\",\"country_code\":\"IL\",\"capital\":\"Jerusalem\"},{\"timezones\":[\"Europe/Rome\"],\"latlng\":[42.83333333,12.83333333],\"name\":\"Italy\",\"country_code\":\"IT\",\"capital\":\"Rome\"},{\"timezones\":[\"America/Jamaica\"],\"latlng\":[18.25,-77.5],\"name\":\"Jamaica\",\"country_code\":\"JM\",\"capital\":\"Kingston\"},{\"timezones\":[\"Europe/Jersey\"],\"latlng\":[49.25,-2.16666666],\"name\":\"Jersey\",\"country_code\":\"JE\",\"capital\":\"Saint Helier\"},{\"timezones\":[\"Asia/Amman\"],\"latlng\":[31,36],\"name\":\"Jordan\",\"country_code\":\"JO\",\"capital\":\"Amman\"},{\"timezones\":[\"Asia/Tokyo\"],\"latlng\":[36,138],\"name\":\"Japan\",\"country_code\":\"JP\",\"capital\":\"Tokyo\"},{\"timezones\":[\"Asia/Almaty\",\"Asia/Qyzylorda\",\"Asia/Aqtobe\",\"Asia/Aqtau\",\"Asia/Oral\"],\"latlng\":[48,68],\"name\":\"Kazakhstan\",\"country_code\":\"KZ\",\"capital\":\"Astana\"},{\"timezones\":[\"Africa/Nairobi\"],\"latlng\":[1,38],\"name\":\"Kenya\",\"country_code\":\"KE\",\"capital\":\"Nairobi\"},{\"timezones\":[\"Asia/Bishkek\"],\"latlng\":[41,75],\"name\":\"Kyrgyzstan\",\"country_code\":\"KG\",\"capital\":\"Bishkek\"},{\"timezones\":[\"Asia/Phnom_Penh\"],\"latlng\":[13,105],\"name\":\"Cambodia\",\"country_code\":\"KH\",\"capital\":\"Phnom Penh\"},{\"timezones\":[\"Pacific/Tarawa\",\"Pacific/Enderbury\",\"Pacific/Kiritimati\"],\"latlng\":[1.41666666,173],\"name\":\"Kiribati\",\"country_code\":\"KI\",\"capital\":\"South Tarawa\"},{\"timezones\":[\"America/St_Kitts\"],\"latlng\":[17.33333333,-62.75],\"name\":\"Saint Kitts and Nevis\",\"country_code\":\"KN\",\"capital\":\"Basseterre\"},{\"timezones\":[\"Asia/Seoul\"],\"latlng\":[37,127.5],\"name\":\"South Korea\",\"country_code\":\"KR\",\"capital\":\"Seoul\"},{\"timezones\":[\"Europe/Belgrade\"],\"latlng\":[42.666667,21.166667],\"name\":\"Kosovo\",\"country_code\":\"XK\",\"capital\":\"Pristina\"},{\"timezones\":[\"Asia/Kuwait\"],\"latlng\":[29.5,45.75],\"name\":\"Kuwait\",\"country_code\":\"KW\",\"capital\":\"Kuwait City\"},{\"timezones\":[\"Asia/Vientiane\"],\"latlng\":[18,105],\"name\":\"Laos\",\"country_code\":\"LA\",\"capital\":\"Vientiane\"},{\"timezones\":[\"Asia/Beirut\"],\"latlng\":[33.83333333,35.83333333],\"name\":\"Lebanon\",\"country_code\":\"LB\",\"capital\":\"Beirut\"},{\"timezones\":[\"Africa/Monrovia\"],\"latlng\":[6.5,-9.5],\"name\":\"Liberia\",\"country_code\":\"LR\",\"capital\":\"Monrovia\"},{\"timezones\":[\"Africa/Tripoli\"],\"latlng\":[25,17],\"name\":\"Libya\",\"country_code\":\"LY\",\"capital\":\"Tripoli\"},{\"timezones\":[\"America/St_Lucia\"],\"latlng\":[13.88333333,-60.96666666],\"name\":\"Saint Lucia\",\"country_code\":\"LC\",\"capital\":\"Castries\"},{\"timezones\":[\"Europe/Vaduz\"],\"latlng\":[47.26666666,9.53333333],\"name\":\"Liechtenstein\",\"country_code\":\"LI\",\"capital\":\"Vaduz\"},{\"timezones\":[\"Asia/Colombo\"],\"latlng\":[7,81],\"name\":\"Sri Lanka\",\"country_code\":\"LK\",\"capital\":\"Colombo\"},{\"timezones\":[\"Africa/Maseru\"],\"latlng\":[-29.5,28.5],\"name\":\"Lesotho\",\"country_code\":\"LS\",\"capital\":\"Maseru\"},{\"timezones\":[\"Europe/Vilnius\"],\"latlng\":[56,24],\"name\":\"Lithuania\",\"country_code\":\"LT\",\"capital\":\"Vilnius\"},{\"timezones\":[\"Europe/Luxembourg\"],\"latlng\":[49.75,6.16666666],\"name\":\"Luxembourg\",\"country_code\":\"LU\",\"capital\":\"Luxembourg\"},{\"timezones\":[\"Europe/Riga\"],\"latlng\":[57,25],\"name\":\"Latvia\",\"country_code\":\"LV\",\"capital\":\"Riga\"},{\"timezones\":[\"Asia/Macau\"],\"latlng\":[22.16666666,113.55],\"name\":\"Macau\",\"country_code\":\"MO\",\"capital\":null},{\"timezones\":[\"America/Marigot\"],\"latlng\":[18.08333333,-63.95],\"name\":\"Saint Martin\",\"country_code\":\"MF\",\"capital\":\"Marigot\"},{\"timezones\":[\"Africa/Casablanca\"],\"latlng\":[32,-5],\"name\":\"Morocco\",\"country_code\":\"MA\",\"capital\":\"Rabat\"},{\"timezones\":[\"Europe/Monaco\"],\"latlng\":[43.73333333,7.4],\"name\":\"Monaco\",\"country_code\":\"MC\",\"capital\":\"Monaco\"},{\"timezones\":[\"Europe/Chisinau\"],\"latlng\":[47,29],\"name\":\"Moldova\",\"country_code\":\"MD\",\"capital\":\"Chișinău\"},{\"timezones\":[\"Indian/Antananarivo\"],\"latlng\":[-20,47],\"name\":\"Madagascar\",\"country_code\":\"MG\",\"capital\":\"Antananarivo\"},{\"timezones\":[\"Indian/Maldives\"],\"latlng\":[3.25,73],\"name\":\"Maldives\",\"country_code\":\"MV\",\"capital\":\"Malé\"},{\"timezones\":[\"America/Mexico_City\",\"America/Cancun\",\"America/Merida\",\"America/Monterrey\",\"America/Matamoros\",\"America/Mazatlan\",\"America/Chihuahua\",\"America/Ojinaga\",\"America/Hermosillo\",\"America/Tijuana\",\"America/Bahia_Banderas\"],\"latlng\":[23,-102],\"name\":\"Mexico\",\"country_code\":\"MX\",\"capital\":\"Mexico City\"},{\"timezones\":[\"Pacific/Majuro\",\"Pacific/Kwajalein\"],\"latlng\":[9,168],\"name\":\"Marshall Islands\",\"country_code\":\"MH\",\"capital\":\"Majuro\"},{\"timezones\":[\"Europe/Skopje\"],\"latlng\":[41.83333333,22],\"name\":\"Macedonia\",\"country_code\":\"MK\",\"capital\":\"Skopje\"},{\"timezones\":[\"Africa/Bamako\"],\"latlng\":[17,-4],\"name\":\"Mali\",\"country_code\":\"ML\",\"capital\":\"Bamako\"},{\"timezones\":[\"Europe/Malta\"],\"latlng\":[35.83333333,14.58333333],\"name\":\"Malta\",\"country_code\":\"MT\",\"capital\":\"Valletta\"},{\"timezones\":[\"Asia/Rangoon\"],\"latlng\":[22,98],\"name\":\"Myanmar\",\"country_code\":\"MM\",\"capital\":\"Naypyidaw\"},{\"timezones\":[\"Europe/Podgorica\"],\"latlng\":[42.5,19.3],\"name\":\"Montenegro\",\"country_code\":\"ME\",\"capital\":\"Podgorica\"},{\"timezones\":[\"Asia/Ulaanbaatar\",\"Asia/Hovd\",\"Asia/Choibalsan\"],\"latlng\":[46,105],\"name\":\"Mongolia\",\"country_code\":\"MN\",\"capital\":\"Ulan Bator\"},{\"timezones\":[\"Pacific/Saipan\"],\"latlng\":[15.2,145.75],\"name\":\"Northern Mariana Islands\",\"country_code\":\"MP\",\"capital\":\"Saipan\"},{\"timezones\":[\"Africa/Maputo\"],\"latlng\":[-18.25,35],\"name\":\"Mozambique\",\"country_code\":\"MZ\",\"capital\":\"Maputo\"},{\"timezones\":[\"Africa/Nouakchott\"],\"latlng\":[20,-12],\"name\":\"Mauritania\",\"country_code\":\"MR\",\"capital\":\"Nouakchott\"},{\"timezones\":[\"America/Montserrat\"],\"latlng\":[16.75,-62.2],\"name\":\"Montserrat\",\"country_code\":\"MS\",\"capital\":\"Plymouth\"},{\"timezones\":[\"America/Martinique\"],\"latlng\":[14.666667,-61],\"name\":\"Martinique\",\"country_code\":\"MQ\",\"capital\":\"Fort-de-France\"},{\"timezones\":[\"Indian/Mauritius\"],\"latlng\":[-20.28333333,57.55],\"name\":\"Mauritius\",\"country_code\":\"MU\",\"capital\":\"Port Louis\"},{\"timezones\":[\"Africa/Blantyre\"],\"latlng\":[-13.5,34],\"name\":\"Malawi\",\"country_code\":\"MW\",\"capital\":\"Lilongwe\"},{\"timezones\":[\"Asia/Kuala_Lumpur\",\"Asia/Kuching\"],\"latlng\":[2.5,112.5],\"name\":\"Malaysia\",\"country_code\":\"MY\",\"capital\":\"Kuala Lumpur\"},{\"timezones\":[\"Indian/Mayotte\"],\"latlng\":[-12.83333333,45.16666666],\"name\":\"Mayotte\",\"country_code\":\"YT\",\"capital\":\"Mamoudzou\"},{\"timezones\":[\"Africa/Windhoek\"],\"latlng\":[-22,17],\"name\":\"Namibia\",\"country_code\":\"NA\",\"capital\":\"Windhoek\"},{\"timezones\":[\"Pacific/Noumea\"],\"latlng\":[-21.5,165.5],\"name\":\"New Caledonia\",\"country_code\":\"NC\",\"capital\":\"Nouméa\"},{\"timezones\":[\"Africa/Niamey\"],\"latlng\":[16,8],\"name\":\"Niger\",\"country_code\":\"NE\",\"capital\":\"Niamey\"},{\"timezones\":[\"Pacific/Norfolk\"],\"latlng\":[-29.03333333,167.95],\"name\":\"Norfolk Island\",\"country_code\":\"NF\",\"capital\":\"Kingston\"},{\"timezones\":[\"Africa/Lagos\"],\"latlng\":[10,8],\"name\":\"Nigeria\",\"country_code\":\"NG\",\"capital\":\"Abuja\"},{\"timezones\":[\"America/Managua\"],\"latlng\":[13,-85],\"name\":\"Nicaragua\",\"country_code\":\"NI\",\"capital\":\"Managua\"},{\"timezones\":[\"Pacific/Niue\"],\"latlng\":[-19.03333333,-169.86666666],\"name\":\"Niue\",\"country_code\":\"NU\",\"capital\":\"Alofi\"},{\"timezones\":[\"Europe/Amsterdam\"],\"latlng\":[52.5,5.75],\"name\":\"Netherlands\",\"country_code\":\"NL\",\"capital\":\"Amsterdam\"},{\"timezones\":[\"Europe/Oslo\"],\"latlng\":[62,10],\"name\":\"Norway\",\"country_code\":\"NO\",\"capital\":\"Oslo\"},{\"timezones\":[\"Asia/Kathmandu\"],\"latlng\":[28,84],\"name\":\"Nepal\",\"country_code\":\"NP\",\"capital\":\"Kathmandu\"},{\"timezones\":[\"Pacific/Nauru\"],\"latlng\":[-0.53333333,166.91666666],\"name\":\"Nauru\",\"country_code\":\"NR\",\"capital\":\"Yaren\"},{\"timezones\":[\"Pacific/Auckland\",\"Pacific/Chatham\"],\"latlng\":[-41,174],\"name\":\"New Zealand\",\"country_code\":\"NZ\",\"capital\":\"Wellington\"},{\"timezones\":[\"Asia/Muscat\"],\"latlng\":[21,57],\"name\":\"Oman\",\"country_code\":\"OM\",\"capital\":\"Muscat\"},{\"timezones\":[\"Asia/Karachi\"],\"latlng\":[30,70],\"name\":\"Pakistan\",\"country_code\":\"PK\",\"capital\":\"Islamabad\"},{\"timezones\":[\"America/Panama\"],\"latlng\":[9,-80],\"name\":\"Panama\",\"country_code\":\"PA\",\"capital\":\"Panama City\"},{\"timezones\":[\"Pacific/Pitcairn\"],\"latlng\":[-25.06666666,-130.1],\"name\":\"Pitcairn Islands\",\"country_code\":\"PN\",\"capital\":\"Adamstown\"},{\"timezones\":[\"America/Lima\"],\"latlng\":[-10,-76],\"name\":\"Peru\",\"country_code\":\"PE\",\"capital\":\"Lima\"},{\"timezones\":[\"Asia/Manila\"],\"latlng\":[13,122],\"name\":\"Philippines\",\"country_code\":\"PH\",\"capital\":\"Manila\"},{\"timezones\":[\"Pacific/Palau\"],\"latlng\":[7.5,134.5],\"name\":\"Palau\",\"country_code\":\"PW\",\"capital\":\"Ngerulmud\"},{\"timezones\":[\"Pacific/Port_Moresby\",\"Pacific/Bougainville\"],\"latlng\":[-6,147],\"name\":\"Papua New Guinea\",\"country_code\":\"PG\",\"capital\":\"Port Moresby\"},{\"timezones\":[\"Europe/Warsaw\"],\"latlng\":[52,20],\"name\":\"Poland\",\"country_code\":\"PL\",\"capital\":\"Warsaw\"},{\"timezones\":[\"America/Puerto_Rico\"],\"latlng\":[18.25,-66.5],\"name\":\"Puerto Rico\",\"country_code\":\"PR\",\"capital\":\"San Juan\"},{\"timezones\":[\"Asia/Pyongyang\"],\"latlng\":[40,127],\"name\":\"North Korea\",\"country_code\":\"KP\",\"capital\":\"Pyongyang\"},{\"timezones\":[\"Europe/Lisbon\",\"Atlantic/Madeira\",\"Atlantic/Azores\"],\"latlng\":[39.5,-8],\"name\":\"Portugal\",\"country_code\":\"PT\",\"capital\":\"Lisbon\"},{\"timezones\":[\"America/Asuncion\"],\"latlng\":[-23,-58],\"name\":\"Paraguay\",\"country_code\":\"PY\",\"capital\":\"Asunción\"},{\"timezones\":[\"Asia/Gaza\",\"Asia/Hebron\"],\"latlng\":[31.9,35.2],\"name\":\"Palestine\",\"country_code\":\"PS\",\"capital\":\"Ramallah\"},{\"timezones\":[\"Pacific/Tahiti\",\"Pacific/Marquesas\",\"Pacific/Gambier\"],\"latlng\":[-15,-140],\"name\":\"French Polynesia\",\"country_code\":\"PF\",\"capital\":\"Papeetē\"},{\"timezones\":[\"Asia/Qatar\"],\"latlng\":[25.5,51.25],\"name\":\"Qatar\",\"country_code\":\"QA\",\"capital\":\"Doha\"},{\"timezones\":[\"Indian/Reunion\"],\"latlng\":[-21.15,55.5],\"name\":\"Réunion\",\"country_code\":\"RE\",\"capital\":\"Saint-Denis\"},{\"timezones\":[\"Europe/Bucharest\"],\"latlng\":[46,25],\"name\":\"Romania\",\"country_code\":\"RO\",\"capital\":\"Bucharest\"},{\"timezones\":[\"Europe/Kaliningrad\",\"Europe/Moscow\",\"Europe/Simferopol\",\"Europe/Volgograd\",\"Europe/Kirov\",\"Europe/Astrakhan\",\"Europe/Samara\",\"Europe/Ulyanovsk\",\"Asia/Yekaterinburg\",\"Asia/Omsk\",\"Asia/Novosibirsk\",\"Asia/Barnaul\",\"Asia/Tomsk\",\"Asia/Novokuznetsk\",\"Asia/Krasnoyarsk\",\"Asia/Irkutsk\",\"Asia/Chita\",\"Asia/Yakutsk\",\"Asia/Khandyga\",\"Asia/Vladivostok\",\"Asia/Ust-Nera\",\"Asia/Magadan\",\"Asia/Sakhalin\",\"Asia/Srednekolymsk\",\"Asia/Kamchatka\",\"Asia/Anadyr\"],\"latlng\":[60,100],\"name\":\"Russia\",\"country_code\":\"RU\",\"capital\":\"Moscow\"},{\"timezones\":[\"Africa/Kigali\"],\"latlng\":[-2,30],\"name\":\"Rwanda\",\"country_code\":\"RW\",\"capital\":\"Kigali\"},{\"timezones\":[\"Asia/Riyadh\"],\"latlng\":[25,45],\"name\":\"Saudi Arabia\",\"country_code\":\"SA\",\"capital\":\"Riyadh\"},{\"timezones\":[\"Africa/Khartoum\"],\"latlng\":[15,30],\"name\":\"Sudan\",\"country_code\":\"SD\",\"capital\":\"Khartoum\"},{\"timezones\":[\"Africa/Dakar\"],\"latlng\":[14,-14],\"name\":\"Senegal\",\"country_code\":\"SN\",\"capital\":\"Dakar\"},{\"timezones\":[\"Asia/Singapore\"],\"latlng\":[1.36666666,103.8],\"name\":\"Singapore\",\"country_code\":\"SG\",\"capital\":\"Singapore\"},{\"timezones\":[\"Atlantic/South_Georgia\"],\"latlng\":[-54.5,-37],\"name\":\"South Georgia\",\"country_code\":\"GS\",\"capital\":\"King Edward Point\"},{\"timezones\":[\"Arctic/Longyearbyen\"],\"latlng\":[78,20],\"name\":\"Svalbard and Jan Mayen\",\"country_code\":\"SJ\",\"capital\":\"Longyearbyen\"},{\"timezones\":[\"Pacific/Guadalcanal\"],\"latlng\":[-8,159],\"name\":\"Solomon Islands\",\"country_code\":\"SB\",\"capital\":\"Honiara\"},{\"timezones\":[\"Africa/Freetown\"],\"latlng\":[8.5,-11.5],\"name\":\"Sierra Leone\",\"country_code\":\"SL\",\"capital\":\"Freetown\"},{\"timezones\":[\"America/El_Salvador\"],\"latlng\":[13.83333333,-88.91666666],\"name\":\"El Salvador\",\"country_code\":\"SV\",\"capital\":\"San Salvador\"},{\"timezones\":[\"Europe/San_Marino\"],\"latlng\":[43.76666666,12.41666666],\"name\":\"San Marino\",\"country_code\":\"SM\",\"capital\":\"City of San Marino\"},{\"timezones\":[\"Africa/Mogadishu\"],\"latlng\":[10,49],\"name\":\"Somalia\",\"country_code\":\"SO\",\"capital\":\"Mogadishu\"},{\"timezones\":[\"America/Miquelon\"],\"latlng\":[46.83333333,-56.33333333],\"name\":\"Saint Pierre and Miquelon\",\"country_code\":\"PM\",\"capital\":\"Saint-Pierre\"},{\"timezones\":[\"Europe/Belgrade\"],\"latlng\":[44,21],\"name\":\"Serbia\",\"country_code\":\"RS\",\"capital\":\"Belgrade\"},{\"timezones\":[\"Africa/Juba\"],\"latlng\":[7,30],\"name\":\"South Sudan\",\"country_code\":\"SS\",\"capital\":\"Juba\"},{\"timezones\":[\"Africa/Sao_Tome\"],\"latlng\":[1,7],\"name\":\"São Tomé and Príncipe\",\"country_code\":\"ST\",\"capital\":\"São Tomé\"},{\"timezones\":[\"America/Paramaribo\"],\"latlng\":[4,-56],\"name\":\"Suriname\",\"country_code\":\"SR\",\"capital\":\"Paramaribo\"},{\"timezones\":[\"Europe/Bratislava\"],\"latlng\":[48.66666666,19.5],\"name\":\"Slovakia\",\"country_code\":\"SK\",\"capital\":\"Bratislava\"},{\"timezones\":[\"Europe/Ljubljana\"],\"latlng\":[46.11666666,14.81666666],\"name\":\"Slovenia\",\"country_code\":\"SI\",\"capital\":\"Ljubljana\"},{\"timezones\":[\"Europe/Stockholm\"],\"latlng\":[62,15],\"name\":\"Sweden\",\"country_code\":\"SE\",\"capital\":\"Stockholm\"},{\"timezones\":[\"Africa/Mbabane\"],\"latlng\":[-26.5,31.5],\"name\":\"Swaziland\",\"country_code\":\"SZ\",\"capital\":\"Lobamba\"},{\"timezones\":[\"America/Lower_Princes\"],\"latlng\":[18.033333,-63.05],\"name\":\"Sint Maarten\",\"country_code\":\"SX\",\"capital\":\"Philipsburg\"},{\"timezones\":[\"Indian/Mahe\"],\"latlng\":[-4.58333333,55.66666666],\"name\":\"Seychelles\",\"country_code\":\"SC\",\"capital\":\"Victoria\"},{\"timezones\":[\"Asia/Damascus\"],\"latlng\":[35,38],\"name\":\"Syria\",\"country_code\":\"SY\",\"capital\":\"Damascus\"},{\"timezones\":[\"America/Grand_Turk\"],\"latlng\":[21.75,-71.58333333],\"name\":\"Turks and Caicos Islands\",\"country_code\":\"TC\",\"capital\":\"Cockburn Town\"},{\"timezones\":[\"Africa/Ndjamena\"],\"latlng\":[15,19],\"name\":\"Chad\",\"country_code\":\"TD\",\"capital\":\"N'Djamena\"},{\"timezones\":[\"Africa/Lome\"],\"latlng\":[8,1.16666666],\"name\":\"Togo\",\"country_code\":\"TG\",\"capital\":\"Lomé\"},{\"timezones\":[\"Asia/Bangkok\"],\"latlng\":[15,100],\"name\":\"Thailand\",\"country_code\":\"TH\",\"capital\":\"Bangkok\"},{\"timezones\":[\"Asia/Dushanbe\"],\"latlng\":[39,71],\"name\":\"Tajikistan\",\"country_code\":\"TJ\",\"capital\":\"Dushanbe\"},{\"timezones\":[\"Pacific/Fakaofo\"],\"latlng\":[-9,-172],\"name\":\"Tokelau\",\"country_code\":\"TK\",\"capital\":\"Fakaofo\"},{\"timezones\":[\"Asia/Ashgabat\"],\"latlng\":[40,60],\"name\":\"Turkmenistan\",\"country_code\":\"TM\",\"capital\":\"Ashgabat\"},{\"timezones\":[\"Asia/Dili\"],\"latlng\":[-8.83333333,125.91666666],\"name\":\"Timor-Leste\",\"country_code\":\"TL\",\"capital\":\"Dili\"},{\"timezones\":[\"Pacific/Tongatapu\"],\"latlng\":[-20,-175],\"name\":\"Tonga\",\"country_code\":\"TO\",\"capital\":\"Nuku'alofa\"},{\"timezones\":[\"America/Port_of_Spain\"],\"latlng\":[11,-61],\"name\":\"Trinidad and Tobago\",\"country_code\":\"TT\",\"capital\":\"Port of Spain\"},{\"timezones\":[\"Africa/Tunis\"],\"latlng\":[34,9],\"name\":\"Tunisia\",\"country_code\":\"TN\",\"capital\":\"Tunis\"},{\"timezones\":[\"Europe/Istanbul\"],\"latlng\":[39,35],\"name\":\"Turkey\",\"country_code\":\"TR\",\"capital\":\"Ankara\"},{\"timezones\":[\"Pacific/Funafuti\"],\"latlng\":[-8,178],\"name\":\"Tuvalu\",\"country_code\":\"TV\",\"capital\":\"Funafuti\"},{\"timezones\":[\"Asia/Taipei\"],\"latlng\":[23.5,121],\"name\":\"Taiwan\",\"country_code\":\"TW\",\"capital\":\"Taipei\"},{\"timezones\":[\"Africa/Dar_es_Salaam\"],\"latlng\":[-6,35],\"name\":\"Tanzania\",\"country_code\":\"TZ\",\"capital\":\"Dodoma\"},{\"timezones\":[\"Africa/Kampala\"],\"latlng\":[1,32],\"name\":\"Uganda\",\"country_code\":\"UG\",\"capital\":\"Kampala\"},{\"timezones\":[\"Europe/Kiev\",\"Europe/Uzhgorod\",\"Europe/Zaporozhye\"],\"latlng\":[49,32],\"name\":\"Ukraine\",\"country_code\":\"UA\",\"capital\":\"Kiev\"},{\"timezones\":[\"Pacific/Johnston\",\"Pacific/Midway\",\"Pacific/Wake\"],\"latlng\":[19.2911437,166.618332],\"name\":\"United States Minor Outlying Islands\",\"country_code\":\"UM\",\"capital\":null},{\"timezones\":[\"America/Montevideo\"],\"latlng\":[-33,-56],\"name\":\"Uruguay\",\"country_code\":\"UY\",\"capital\":\"Montevideo\"},{\"timezones\":[\"America/New_York\",\"America/Detroit\",\"America/Kentucky/Louisville\",\"America/Kentucky/Monticello\",\"America/Indiana/Indianapolis\",\"America/Indiana/Vincennes\",\"America/Indiana/Winamac\",\"America/Indiana/Marengo\",\"America/Indiana/Petersburg\",\"America/Indiana/Vevay\",\"America/Chicago\",\"America/Indiana/Tell_City\",\"America/Indiana/Knox\",\"America/Menominee\",\"America/North_Dakota/Center\",\"America/North_Dakota/New_Salem\",\"America/North_Dakota/Beulah\",\"America/Denver\",\"America/Boise\",\"America/Phoenix\",\"America/Los_Angeles\",\"America/Anchorage\",\"America/Juneau\",\"America/Sitka\",\"America/Metlakatla\",\"America/Yakutat\",\"America/Nome\",\"America/Adak\",\"Pacific/Honolulu\"],\"latlng\":[38,-97],\"name\":\"United States\",\"country_code\":\"US\",\"capital\":\"Washington D.C.\"},{\"timezones\":[\"Asia/Samarkand\",\"Asia/Tashkent\"],\"latlng\":[41,64],\"name\":\"Uzbekistan\",\"country_code\":\"UZ\",\"capital\":\"Tashkent\"},{\"timezones\":[\"Europe/Vatican\"],\"latlng\":[41.9,12.45],\"name\":\"Vatican City\",\"country_code\":\"VA\",\"capital\":\"Vatican City\"},{\"timezones\":[\"America/St_Vincent\"],\"latlng\":[13.25,-61.2],\"name\":\"Saint Vincent and the Grenadines\",\"country_code\":\"VC\",\"capital\":\"Kingstown\"},{\"timezones\":[\"America/Caracas\"],\"latlng\":[8,-66],\"name\":\"Venezuela\",\"country_code\":\"VE\",\"capital\":\"Caracas\"},{\"timezones\":[\"America/Tortola\"],\"latlng\":[18.431383,-64.62305],\"name\":\"British Virgin Islands\",\"country_code\":\"VG\",\"capital\":\"Road Town\"},{\"timezones\":[\"America/St_Thomas\"],\"latlng\":[18.35,-64.933333],\"name\":\"United States Virgin Islands\",\"country_code\":\"VI\",\"capital\":\"Charlotte Amalie\"},{\"timezones\":[\"Asia/Ho_Chi_Minh\"],\"latlng\":[16.16666666,107.83333333],\"name\":\"Vietnam\",\"country_code\":\"VN\",\"capital\":\"Hanoi\"},{\"timezones\":[\"Pacific/Efate\"],\"latlng\":[-16,167],\"name\":\"Vanuatu\",\"country_code\":\"VU\",\"capital\":\"Port Vila\"},{\"timezones\":[\"Pacific/Wallis\"],\"latlng\":[-13.3,-176.2],\"name\":\"Wallis and Futuna\",\"country_code\":\"WF\",\"capital\":\"Mata-Utu\"},{\"timezones\":[\"Pacific/Apia\"],\"latlng\":[-13.58333333,-172.33333333],\"name\":\"Samoa\",\"country_code\":\"WS\",\"capital\":\"Apia\"},{\"timezones\":[\"Asia/Aden\"],\"latlng\":[15,48],\"name\":\"Yemen\",\"country_code\":\"YE\",\"capital\":\"Sana'a\"},{\"timezones\":[\"Africa/Johannesburg\"],\"latlng\":[-29,24],\"name\":\"South Africa\",\"country_code\":\"ZA\",\"capital\":\"Pretoria\"},{\"timezones\":[\"Africa/Lusaka\"],\"latlng\":[-15,30],\"name\":\"Zambia\",\"country_code\":\"ZM\",\"capital\":\"Lusaka\"},{\"timezones\":[\"Africa/Harare\"],\"latlng\":[-20,30],\"name\":\"Zimbabwe\",\"country_code\":\"ZW\",\"capital\":\"Harare\"}]\n\n//# sourceURL=webpack://covid/./src/api/coordinats.json?");

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

/***/ }),

/***/ "./src/components/index.css":
/*!**********************************!*
  !*** ./src/components/index.css ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/index.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\r\n  if (!a && b || a && !b) {\r\n    return false;\r\n  }\r\n\r\n  var p;\r\n\r\n  for (p in a) {\r\n    if (isNamedExport && p === 'default') {\r\n      // eslint-disable-next-line no-continue\r\n      continue;\r\n    }\r\n\r\n    if (a[p] !== b[p]) {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  for (p in b) {\r\n    if (isNamedExport && p === 'default') {\r\n      // eslint-disable-next-line no-continue\r\n      continue;\r\n    }\r\n\r\n    if (!a[p]) {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  return true;\r\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/index.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/index.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://covid/./src/components/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\n\r\nvar isOldIE = function isOldIE() {\r\n  var memo;\r\n  return function memorize() {\r\n    if (typeof memo === 'undefined') {\r\n      // Test for IE <= 9 as proposed by Browserhacks\r\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\r\n      // Tests for existence of standard globals is to allow style-loader\r\n      // to operate correctly into non-standard environments\r\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\r\n      memo = Boolean(window && document && document.all && !window.atob);\r\n    }\r\n\r\n    return memo;\r\n  };\r\n}();\r\n\r\nvar getTarget = function getTarget() {\r\n  var memo = {};\r\n  return function memorize(target) {\r\n    if (typeof memo[target] === 'undefined') {\r\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n        try {\r\n          // This will throw an exception if access to iframe is blocked\r\n          // due to cross-origin restrictions\r\n          styleTarget = styleTarget.contentDocument.head;\r\n        } catch (e) {\r\n          // istanbul ignore next\r\n          styleTarget = null;\r\n        }\r\n      }\r\n\r\n      memo[target] = styleTarget;\r\n    }\r\n\r\n    return memo[target];\r\n  };\r\n}();\r\n\r\nvar stylesInDom = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDom.length; i++) {\r\n    if (stylesInDom[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var index = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3]\r\n    };\r\n\r\n    if (index !== -1) {\r\n      stylesInDom[index].references++;\r\n      stylesInDom[index].updater(obj);\r\n    } else {\r\n      stylesInDom.push({\r\n        identifier: identifier,\r\n        updater: addStyle(obj, options),\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction insertStyleElement(options) {\r\n  var style = document.createElement('style');\r\n  var attributes = options.attributes || {};\r\n\r\n  if (typeof attributes.nonce === 'undefined') {\r\n    var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n    if (nonce) {\r\n      attributes.nonce = nonce;\r\n    }\r\n  }\r\n\r\n  Object.keys(attributes).forEach(function (key) {\r\n    style.setAttribute(key, attributes[key]);\r\n  });\r\n\r\n  if (typeof options.insert === 'function') {\r\n    options.insert(style);\r\n  } else {\r\n    var target = getTarget(options.insert || 'head');\r\n\r\n    if (!target) {\r\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n    }\r\n\r\n    target.appendChild(style);\r\n  }\r\n\r\n  return style;\r\n}\r\n\r\nfunction removeStyleElement(style) {\r\n  // istanbul ignore if\r\n  if (style.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  style.parentNode.removeChild(style);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nvar replaceText = function replaceText() {\r\n  var textStore = [];\r\n  return function replace(index, replacement) {\r\n    textStore[index] = replacement;\r\n    return textStore.filter(Boolean).join('\\n');\r\n  };\r\n}();\r\n\r\nfunction applyToSingletonTag(style, index, remove, obj) {\r\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n  if (style.styleSheet) {\r\n    style.styleSheet.cssText = replaceText(index, css);\r\n  } else {\r\n    var cssNode = document.createTextNode(css);\r\n    var childNodes = style.childNodes;\r\n\r\n    if (childNodes[index]) {\r\n      style.removeChild(childNodes[index]);\r\n    }\r\n\r\n    if (childNodes.length) {\r\n      style.insertBefore(cssNode, childNodes[index]);\r\n    } else {\r\n      style.appendChild(cssNode);\r\n    }\r\n  }\r\n}\r\n\r\nfunction applyToTag(style, options, obj) {\r\n  var css = obj.css;\r\n  var media = obj.media;\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (media) {\r\n    style.setAttribute('media', media);\r\n  } else {\r\n    style.removeAttribute('media');\r\n  }\r\n\r\n  if (sourceMap && typeof btoa !== 'undefined') {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  if (style.styleSheet) {\r\n    style.styleSheet.cssText = css;\r\n  } else {\r\n    while (style.firstChild) {\r\n      style.removeChild(style.firstChild);\r\n    }\r\n\r\n    style.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nvar singleton = null;\r\nvar singletonCounter = 0;\r\n\r\nfunction addStyle(obj, options) {\r\n  var style;\r\n  var update;\r\n  var remove;\r\n\r\n  if (options.singleton) {\r\n    var styleIndex = singletonCounter++;\r\n    style = singleton || (singleton = insertStyleElement(options));\r\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\r\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\r\n  } else {\r\n    style = insertStyleElement(options);\r\n    update = applyToTag.bind(null, style, options);\r\n\r\n    remove = function remove() {\r\n      removeStyleElement(style);\r\n    };\r\n  }\r\n\r\n  update(obj);\r\n  return function updateStyle(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\r\n        return;\r\n      }\r\n\r\n      update(obj = newObj);\r\n    } else {\r\n      remove();\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\r\n  // tags it will allow on a page\r\n\r\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\r\n    options.singleton = isOldIE();\r\n  }\r\n\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\r\n      return;\r\n    }\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDom[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDom[_index].references === 0) {\r\n        stylesInDom[_index].updater();\r\n\r\n        stylesInDom.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://covid/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

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
/******/ 			id: moduleId,
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
/******/ 		__webpack_require__.h = () => "ba34eff4a82254de76a1"
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