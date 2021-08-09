/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-bg-color: #edba11;\n}\n\n* {\n  box-sizing: content-box;\n  font-family: Molengo;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* margin-top: calc((98vh - 900px) / 2); */\n  height: 95vh;\n}\n\np {\n  font-size: 16px;\n}\n\nh1 {\n  font-size: 32px;\n  font-weight: 700;\n}\n\n.hideshowtitle {\n  visibility: hidden;\n  height: 0px;\n}\n\n#extratempinfo,\n#sun,\n#currenttempdiv {\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  gap: 10px;\n}\n\n#extratempinfo div,\n#sun div {\n  min-width: 120px;\n  margin-top: 10px;\n}\n\n#currenttempdiv div {\n  min-width: 120px;\n}\n\n#extratempinfo,\n#sun {\n  text-align: center;\n  font-size: 18px;\n  justify-content: start;\n  margin-left: 20px;\n}\n\n#extratempinfo p,\n#sun p,\n#currenttempdiv p {\n  font-size: 18px;\n}\n\n#currenttempdiv {\n  align-items: center;\n}\n\n#currenttemp {\n  text-align: center;\n  font-size: 24px;\n}\n\n#locationheader {\n  font-size: 24px;\n  font-weight: bolder;\n}\n\n#content {\n  width: 800px;\n  height: 600px;\n  /* margin: auto auto; */\n  padding: 20px 40px;\n  border: solid 4px white;\n  /* flex-grow: 1; */\n}\n\n#weathergif {\n  min-width: 400px;\n  align-self: center;\n}\n\n#weathergifimg {\n  height: 200px;\n  max-width: 360px;\n  display: block;\n  margin: auto;\n}\n\n#loading {\n  visibility: hidden;\n  text-align: center;\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n#feelslikediv {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 5px;\n}\n\n#note {\n  font-size: 8px;\n  text-align: center;\n}\n\ninput[type=\"text\"] {\n  border: none;\n  border-radius: 0px;\n  height: 30px;\n  width: 250px;\n  font-size: 18px;\n  padding: 10px;\n}\n\ninput[type=\"submit\"] {\n  height: 50px;\n  width: 85px;\n  font-size: 16px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\ninput[type=\"submit\"]:hover {\n  background-color: var(--main-bg-color) !important;\n}\n\ninput:focus-visible {\n  outline: none;\n}\n\nform {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  align-items: center;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 15px;\n}\n\nheader > div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.day {\n  /* background-color: #ffea75; */\n  background-color: #f3cf58;\n}\n\n.night {\n  background-color: #2a2f4c;\n  color: white;\n}\n\n.dayDiv {\n  background-color: #fff6c1;\n}\n\n.nightDiv {\n  background-color: #54586f;\n}\n\n#centerdiv {\n  display: flex;\n  flex-direction: row;\n  gap: 30px;\n}\n\n#searchbar {\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  width: max-content;\n  align-items: center;\n  gap: 10px;\n}\n\n.la-search {\n  padding-left: 10px;\n  font-size: 20px;\n}\n\n#weathericon {\n  width: 860px;\n  text-align: right;\n  font-size: 75px;\n  color: white;\n}\n\nfooter {\n  margin-top: 30px;\n  font-weight: bolder;\n}\n\nfooter a {\n  color: white;\n}\n\nfooter a:hover {\n  color: var(--main-bg-color);\n}\n\nfooter a:visited {\n  color: #665c24;\n}\n\n/* checkbox slider\n/* copied from w3schools */\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 58px;\n  height: 30px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #e7e7e7;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 23px;\n  width: 23px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: var(--main-bg-color);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px var(--main-bg-color);\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 30px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n#switching {\n  margin-top: 10px;\n  height: 30px;\n  display: flex;\n  flex-direction: row;\n  width: 100px;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --main-bg-color: #edba11;\n}\n\n* {\n  box-sizing: content-box;\n  font-family: Molengo;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* margin-top: calc((98vh - 900px) / 2); */\n  height: 95vh;\n}\n\np {\n  font-size: 16px;\n}\n\nh1 {\n  font-size: 32px;\n  font-weight: 700;\n}\n\n.hideshowtitle {\n  visibility: hidden;\n  height: 0px;\n}\n\n#extratempinfo,\n#sun,\n#currenttempdiv {\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  gap: 10px;\n}\n\n#extratempinfo div,\n#sun div {\n  min-width: 120px;\n  margin-top: 10px;\n}\n\n#currenttempdiv div {\n  min-width: 120px;\n}\n\n#extratempinfo,\n#sun {\n  text-align: center;\n  font-size: 18px;\n  justify-content: start;\n  margin-left: 20px;\n}\n\n#extratempinfo p,\n#sun p,\n#currenttempdiv p {\n  font-size: 18px;\n}\n\n#currenttempdiv {\n  align-items: center;\n}\n\n#currenttemp {\n  text-align: center;\n  font-size: 24px;\n}\n\n#locationheader {\n  font-size: 24px;\n  font-weight: bolder;\n}\n\n#content {\n  width: 800px;\n  height: 600px;\n  /* margin: auto auto; */\n  padding: 20px 40px;\n  border: solid 4px white;\n  /* flex-grow: 1; */\n}\n\n#weathergif {\n  min-width: 400px;\n  align-self: center;\n}\n\n#weathergifimg {\n  height: 200px;\n  max-width: 360px;\n  display: block;\n  margin: auto;\n}\n\n#loading {\n  visibility: hidden;\n  text-align: center;\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n#feelslikediv {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 5px;\n}\n\n#note {\n  font-size: 8px;\n  text-align: center;\n}\n\ninput[type=\"text\"] {\n  border: none;\n  border-radius: 0px;\n  height: 30px;\n  width: 250px;\n  font-size: 18px;\n  padding: 10px;\n}\n\ninput[type=\"submit\"] {\n  height: 50px;\n  width: 85px;\n  font-size: 16px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\ninput[type=\"submit\"]:hover {\n  background-color: var(--main-bg-color) !important;\n}\n\ninput:focus-visible {\n  outline: none;\n}\n\nform {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  align-items: center;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 15px;\n}\n\nheader > div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.day {\n  /* background-color: #ffea75; */\n  background-color: #f3cf58;\n}\n\n.night {\n  background-color: #2a2f4c;\n  color: white;\n}\n\n.dayDiv {\n  background-color: #fff6c1;\n}\n\n.nightDiv {\n  background-color: #54586f;\n}\n\n#centerdiv {\n  display: flex;\n  flex-direction: row;\n  gap: 30px;\n}\n\n#searchbar {\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  width: max-content;\n  align-items: center;\n  gap: 10px;\n}\n\n.la-search {\n  padding-left: 10px;\n  font-size: 20px;\n}\n\n#weathericon {\n  width: 860px;\n  text-align: right;\n  font-size: 75px;\n  color: white;\n}\n\nfooter {\n  margin-top: 30px;\n  font-weight: bolder;\n}\n\nfooter a {\n  color: white;\n}\n\nfooter a:hover {\n  color: var(--main-bg-color);\n}\n\nfooter a:visited {\n  color: #665c24;\n}\n\n/* checkbox slider\n/* copied from w3schools */\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 58px;\n  height: 30px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #e7e7e7;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 23px;\n  width: 23px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: var(--main-bg-color);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px var(--main-bg-color);\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 30px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n#switching {\n  margin-top: 10px;\n  height: 30px;\n  display: flex;\n  flex-direction: row;\n  width: 100px;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fromUnixTime)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Number} unixTime - the given Unix timestamp
 * @returns {Date} the date
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * var result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */

function fromUnixTime(dirtyUnixTime) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyUnixTime);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(unixTime * 1000);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherStats)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/fromUnixTime/index.js");


const converttemperature = function (temperature) {
  const temperatureInC = Math.floor((Number(temperature) - 273.15) * 10) / 10;
  const temperatureInF =
    Math.floor(((Number(temperature) - 273.15) * (9 / 5) + 32) * 10) / 10;
  return [temperatureInC, temperatureInF];
};

class weatherStats {
  constructor(
    weatherdescription,
    temperature,
    feelslike,
    mintemp,
    maxtemp,
    humidity,
    sunrise,
    sunset,
    country,
    city,
    timeoffset
  ) {
    this.weatherdescription = weatherdescription;
    this.temperature = converttemperature(temperature);
    this.feelslike = converttemperature(feelslike);
    this.mintemp = converttemperature(mintemp);
    this.maxtemp = converttemperature(maxtemp);
    this.humidity = humidity;
    this.sunrise = sunLocalTime((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(sunrise), timeoffset);
    this.sunset = sunLocalTime((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(sunset), timeoffset);
    this.country = country;
    this.city = city;
    this.timeoffset = currentTime(timeoffset);
  }
}

const currentTime = function (timeoffset) {
  const today = new Date();
  const hoursUTC = today.getUTCHours();
  let minutes = today.getMinutes();
  if (Number(minutes) < 10) {
    minutes = "0" + minutes;
  }
  let timeoffsetHours = Number(timeoffset) / 60 / 60;
  let hours = Number(hoursUTC) + timeoffsetHours;
  if (hours < 10) {
    hours = "0" + hours;
  } else if (hours > 24) {
    hours = hours - 24;
    hours = "0" + hours;
  }
  return `${hours}:${minutes}`;
};

const sunLocalTime = function (date, timeoffset) {
  const hoursUTC = date.getUTCHours();
  let minutes = date.getMinutes();
  if (Number(minutes) < 10) {
    minutes = "0" + minutes;
  }
  let timeoffsetHours = Number(timeoffset) / 60 / 60;
  let hours = Number(hoursUTC) + timeoffsetHours;
  if (hours > 0 && hours < 10) {
    hours = "0" + hours;
  } else if (hours < 0) {
    hours = 24 + hours;
  } else if (hours > 24) {
    hours = hours - 24;
    hours = "0" + hours;
  }
  return `${hours}:${minutes}`;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ "./src/script.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const locationsearch = document.getElementById("locationinput");
const submitsearch = document.getElementById("submitsearch");
const form = document.querySelector("form");

submitsearch.addEventListener("click", function (e) {
  e.preventDefault();

  if (form.checkValidity()) {
    const selectedlocation = encodeURIComponent(locationsearch.value);
    checkweather(selectedlocation);
  } else {
    locationsearch.setCustomValidity(
      "Write a valid location name. Letters and spaces are allowed."
    );
  }
  locationsearch.reportValidity();
});

async function checkweather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da23e2206ca1765152d255ed5882ba1f`;
  try {
    const divloading = document.getElementById("loading");
    const loadingspan = divloading.querySelector("span");
    loadingspan.textContent = "Searching";
    divloading.style.visibility = "visible";
    const firstid = window.requestAnimationFrame(animatespinner.step);
    const response = await fetch(url, { mode: "cors" });
    if (response.status === 404) {
      divloading.style.visibility = "hidden";
      loadingspan.textContent = " Location not found";
      divloading.style.visibility = "visible";
      return;
    }
    const fetcheddata = await response.json();
    divloading.style.visibility = "hidden";
    const weathertoday = new _script_js__WEBPACK_IMPORTED_MODULE_0__.default(
      fetcheddata.weather[0].main,
      fetcheddata.main.temp,
      fetcheddata.main.feels_like,
      fetcheddata.main.temp_min,
      fetcheddata.main.temp_max,
      fetcheddata.main.humidity,
      fetcheddata.sys.sunrise,
      fetcheddata.sys.sunset,
      fetcheddata.sys.country,
      fetcheddata.name,
      fetcheddata.timezone
    );
    updateDom(weathertoday);
    styledayornight(weathertoday);
    const checkbox = document.querySelector("input[type='checkbox']");
    checkbox.addEventListener("click", function (e) {
      const currenttemp = document.getElementById("currenttemp");
      if (currenttemp.innerHTML !== "") {
        if (checkbox.checked) {
          switchCF("fahr", weathertoday);
        } else {
          switchCF("celsius", weathertoday);
        }
      }
    });
    return weathertoday;
  } catch (err) {
    console.error(err);
  }
}

async function getweathergif(description) {
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=WSIARvZTJXnRlA7vbrrNnAcfTIfQfRzp&s=${description}`;
  try {
    const response = await fetch(url, { mode: "cors" });
    const fetcheddata = await response.json();
    const imgurl = await fetcheddata.data.images.original.url;
    return imgurl;
  } catch (err) {
    console.error(err);
  }
}

const updateDom = async function (weatherinfoobject) {
  const info = document.getElementById("info");
  const hfour = info.querySelectorAll(".hideshowtitle");
  const locationheader = document.getElementById("locationheader");
  const currenttemp = document.getElementById("currenttemp");
  const extratempinfo = document.getElementById("extratempinfo");
  const sun = document.getElementById("sun");
  const weatherdescription = document.getElementById("weathergif");
  const img = document.getElementById("weathergifimg");

  hfour.forEach(function (title) {
    title.style.visibility = "visible";
    title.style.height = "min-content";
  });

  const inputcheck = document.querySelector("input[type='checkbox']");

  const phumidity = document.getElementById("humidity");
  locationheader.innerHTML = `${weatherinfoobject.city}, ${weatherinfoobject.country} &nbsp|&nbsp <i class="las la-clock"></i> ${weatherinfoobject.timeoffset}`;
  phumidity.innerHTML = weatherinfoobject.humidity + "%";
  if (inputcheck.checked) {
    switchCF("fahr", weatherinfoobject);
  } else {
    switchCF("celsius", weatherinfoobject);
  }
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  sunrise.innerHTML = weatherinfoobject.sunrise;
  sunset.innerHTML = weatherinfoobject.sunset;

  document.getElementById("weathergifdesc").textContent =
    weatherinfoobject.weatherdescription + " | ";
  img.src = await getweathergif(weatherinfoobject.weatherdescription);
  weatherdescription.style.visibility = "visible";
  info.style.visibility = "visible";
};

function switchCF(unit, weatherinfoobject) {
  const currenttemp = document.getElementById("currenttemp");
  const pfeelslike = document.getElementById("feelslike");
  const pmintemp = document.getElementById("mintemp");
  const pmaxtemp = document.getElementById("maxtemp");
  if (unit === "celsius") {
    currenttemp.innerHTML = weatherinfoobject.temperature[0] + "°C";
    pfeelslike.innerHTML = weatherinfoobject.feelslike[0] + "°C";
    pmintemp.innerHTML = weatherinfoobject.mintemp[0] + "°C";
    pmaxtemp.innerHTML = weatherinfoobject.maxtemp[0] + "°C";
  } else {
    currenttemp.innerHTML = weatherinfoobject.temperature[1] + "°F";
    pfeelslike.innerHTML = weatherinfoobject.feelslike[1] + "°F";
    pmintemp.innerHTML = weatherinfoobject.mintemp[1] + "°F";
    pmaxtemp.innerHTML = weatherinfoobject.maxtemp[1] + "°F";
  }
}

const animatespinner = (function () {
  const spinelement = document.querySelector(".spinit");
  let start, previousTimeStamp, animationID;

  function step(timestamp) {
    const hiddenorvisibile = document.getElementById("loading").style
      .visibility;
    if (start === undefined) {
      start = timestamp;
    }
    let elapsed = timestamp - start;
    if (previousTimeStamp !== timestamp) {
      if (elapsed > 3600) {
        const minutes = Math.floor(elapsed / 3600);
        elapsed = elapsed - 3600 * minutes;
      }
      const count = Math.min(0.1 * elapsed, 360);
      spinelement.style.transform = "rotate(" + count + "deg)";
    }
    if (hiddenorvisibile === "visible") {
      animationID = window.requestAnimationFrame(step);
      return animationID;
    }
    window.cancelAnimationFrame(animationID);
  }
  return { step };
})();

const styledayornight = function (weatherinfoobject) {
  const hour = weatherinfoobject.timeoffset.split(":")[0];
  const sunrise = weatherinfoobject.sunrise.split(":")[0];
  const sunset = weatherinfoobject.sunset.split(":")[0];
  const body = document.querySelector("body");
  const extratempinfo = document.getElementById("extratempinfo");
  const extratempinfodiv = extratempinfo.querySelectorAll("div");
  const sun = document.getElementById("sun");
  const sundiv = sun.querySelectorAll("div");
  const inputsubmit = document.querySelector("input[type='submit']");
  const searchicon = document.querySelector(".la-search");
  const weatherdescription = weatherinfoobject.weatherdescription;
  if (hour > sunrise && hour < sunset) {
    body.setAttribute("class", "day");
    extratempinfodiv.forEach((div) => div.setAttribute("class", "dayDiv"));
    sundiv.forEach((div) => div.setAttribute("class", "dayDiv"));
    inputsubmit.style.backgroundColor = "#fff6c1";
    inputsubmit.style.color = "black";
    searchicon.style.color = "darkgrey";
    weathericonDay(weatherdescription);
  } else {
    body.setAttribute("class", "night");
    extratempinfodiv.forEach((div) => div.setAttribute("class", "nightDiv"));
    sundiv.forEach((div) => div.setAttribute("class", "nightDiv"));
    inputsubmit.style.backgroundColor = "#54586f";
    inputsubmit.style.color = "white";
    searchicon.style.color = "darkgrey";
    weathericonNight(weatherdescription);
  }
};

const weathericonDay = function (weatherdescription) {
  const weathericondiv = document.getElementById("weathericon");
  switch (weatherdescription) {
    case "Clouds":
      weathericondiv.innerHTML = '<i class="las la-cloud-sun"></i>';
      break;
    case "Clear":
      weathericondiv.innerHTML = '<i class="las la-sun"></i>';
      break;
    case "Rain":
      weathericondiv.innerHTML = '<i class="las la-cloud-showers-heavy"></i>';
      break;
    case "Snow":
      weathericondiv.innerHTML = '<i class="las la-snowflake"></i>';
      break;
    case "Drizzle":
      weathericondiv.innerHTML = '<i class="las la-cloud-rain"></i>';
      break;
    case "Thunderstorm":
      weathericondiv.innerHTML = '<i class="las la-bolt"></i>';
      break;
    default:
      weathericondiv.innerHTML = '<i class="las la-smog"></i>';
      break;
  }
};

const weathericonNight = function (weatherdescription) {
  const weathericondiv = document.getElementById("weathericon");
  switch (weatherdescription) {
    case "Clouds":
      weathericondiv.innerHTML = '<i class="las la-cloud-moon"></i>';
      break;
    case "Clear":
      weathericondiv.innerHTML = '<i class="lar la-moon"></i>';
      break;
    case "Rain":
      weathericondiv.innerHTML = '<i class="las la-cloud-rain"></i>';
      break;
    case "Snow":
      weathericondiv.innerHTML = '<i class="las la-snowflake"></i>';
      break;
    case "Drizzle":
      weathericondiv.innerHTML = '<i class="las la-cloud-moon-rain">';
      break;
    case "Thunderstorm":
      weathericondiv.innerHTML = '<i class="las la-bolt"></i>';
      break;
    default:
      weathericondiv.innerHTML = '<i class="las la-smog"></i>';
      break;
  }
};

window.onload = checkweather("Agroal");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELDZCQUE2QixHQUFHLE9BQU8sNEJBQTRCLHlCQUF5QixHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLDZDQUE2QyxtQkFBbUIsR0FBRyxPQUFPLG9CQUFvQixHQUFHLFFBQVEsb0JBQW9CLHFCQUFxQixHQUFHLG9CQUFvQix1QkFBdUIsZ0JBQWdCLEdBQUcsNkNBQTZDLGtCQUFrQix3QkFBd0IsMkJBQTJCLGNBQWMsR0FBRyxtQ0FBbUMscUJBQXFCLHFCQUFxQixHQUFHLHlCQUF5QixxQkFBcUIsR0FBRywyQkFBMkIsdUJBQXVCLG9CQUFvQiwyQkFBMkIsc0JBQXNCLEdBQUcsbURBQW1ELG9CQUFvQixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxrQkFBa0IsdUJBQXVCLG9CQUFvQixHQUFHLHFCQUFxQixvQkFBb0Isd0JBQXdCLEdBQUcsY0FBYyxpQkFBaUIsa0JBQWtCLDBCQUEwQix5QkFBeUIsNEJBQTRCLHFCQUFxQixLQUFLLGlCQUFpQixxQkFBcUIsdUJBQXVCLEdBQUcsb0JBQW9CLGtCQUFrQixxQkFBcUIsbUJBQW1CLGlCQUFpQixHQUFHLGNBQWMsdUJBQXVCLHVCQUF1QixxQkFBcUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxtQkFBbUIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsYUFBYSxHQUFHLFdBQVcsbUJBQW1CLHVCQUF1QixHQUFHLDBCQUEwQixpQkFBaUIsdUJBQXVCLGlCQUFpQixpQkFBaUIsb0JBQW9CLGtCQUFrQixHQUFHLDRCQUE0QixpQkFBaUIsZ0JBQWdCLG9CQUFvQixpQkFBaUIsa0JBQWtCLG9CQUFvQixzQkFBc0IsdUJBQXVCLEdBQUcsa0NBQWtDLHNEQUFzRCxHQUFHLHlCQUF5QixrQkFBa0IsR0FBRyxVQUFVLGtCQUFrQix3QkFBd0IsMEJBQTBCLHdCQUF3QixHQUFHLFlBQVksa0JBQWtCLDJCQUEyQixtQ0FBbUMsY0FBYyxHQUFHLGtCQUFrQixrQkFBa0Isd0JBQXdCLG1DQUFtQyx3QkFBd0IsR0FBRyxVQUFVLGtDQUFrQyxnQ0FBZ0MsR0FBRyxZQUFZLDhCQUE4QixpQkFBaUIsR0FBRyxhQUFhLDhCQUE4QixHQUFHLGVBQWUsOEJBQThCLEdBQUcsZ0JBQWdCLGtCQUFrQix3QkFBd0IsY0FBYyxHQUFHLGdCQUFnQiw0QkFBNEIsa0JBQWtCLHdCQUF3Qix1QkFBdUIsd0JBQXdCLGNBQWMsR0FBRyxnQkFBZ0IsdUJBQXVCLG9CQUFvQixHQUFHLGtCQUFrQixpQkFBaUIsc0JBQXNCLG9CQUFvQixpQkFBaUIsR0FBRyxZQUFZLHFCQUFxQix3QkFBd0IsR0FBRyxjQUFjLGlCQUFpQixHQUFHLG9CQUFvQixnQ0FBZ0MsR0FBRyxzQkFBc0IsbUJBQW1CLEdBQUcsNEdBQTRHLHVCQUF1QiwwQkFBMEIsZ0JBQWdCLGlCQUFpQixxQkFBcUIsc0JBQXNCLEdBQUcscURBQXFELGVBQWUsYUFBYSxjQUFjLEdBQUcsK0JBQStCLHVCQUF1QixvQkFBb0IsV0FBVyxZQUFZLGFBQWEsY0FBYyw4QkFBOEIsNkJBQTZCLHFCQUFxQixHQUFHLG9CQUFvQix1QkFBdUIsa0JBQWtCLGlCQUFpQixnQkFBZ0IsY0FBYyxnQkFBZ0IsNEJBQTRCLDZCQUE2QixxQkFBcUIsR0FBRyw2QkFBNkIsMkNBQTJDLEdBQUcsMkJBQTJCLDZDQUE2QyxHQUFHLG9DQUFvQyx3Q0FBd0Msb0NBQW9DLGdDQUFnQyxHQUFHLDBDQUEwQyx3QkFBd0IsR0FBRywwQkFBMEIsdUJBQXVCLEdBQUcsZ0JBQWdCLHFCQUFxQixpQkFBaUIsa0JBQWtCLHdCQUF3QixpQkFBaUIsd0JBQXdCLEdBQUcsU0FBUyxnRkFBZ0YsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mcm9tVW5peFRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1tYWluLWJnLWNvbG9yOiAjZWRiYTExO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgZm9udC1mYW1pbHk6IE1vbGVuZ287XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBtYXJnaW4tdG9wOiBjYWxjKCg5OHZoIC0gOTAwcHgpIC8gMik7ICovXFxuICBoZWlnaHQ6IDk1dmg7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uaGlkZXNob3d0aXRsZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBoZWlnaHQ6IDBweDtcXG59XFxuXFxuI2V4dHJhdGVtcGluZm8sXFxuI3N1bixcXG4jY3VycmVudHRlbXBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jZXh0cmF0ZW1waW5mbyBkaXYsXFxuI3N1biBkaXYge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiNjdXJyZW50dGVtcGRpdiBkaXYge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG59XFxuXFxuI2V4dHJhdGVtcGluZm8sXFxuI3N1biB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNleHRyYXRlbXBpbmZvIHAsXFxuI3N1biBwLFxcbiNjdXJyZW50dGVtcGRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI2N1cnJlbnR0ZW1wZGl2IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjdXJyZW50dGVtcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbiNsb2NhdGlvbmhlYWRlciB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgLyogbWFyZ2luOiBhdXRvIGF1dG87ICovXFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICBib3JkZXI6IHNvbGlkIDRweCB3aGl0ZTtcXG4gIC8qIGZsZXgtZ3JvdzogMTsgKi9cXG59XFxuXFxuI3dlYXRoZXJnaWYge1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3dlYXRoZXJnaWZpbWcge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1heC13aWR0aDogMzYwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI2xvYWRpbmcge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNmZWVsc2xpa2VkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbiNub3RlIHtcXG4gIGZvbnQtc2l6ZTogOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDg1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpICFpbXBvcnRhbnQ7XFxufVxcblxcbmlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuaGVhZGVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRheSB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTc1OyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzY2Y1ODtcXG59XFxuXFxuLm5pZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJmNGM7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kYXlEaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjZjMTtcXG59XFxuXFxuLm5pZ2h0RGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDU4NmY7XFxufVxcblxcbiNjZW50ZXJkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbiNzZWFyY2hiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5sYS1zZWFyY2gge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jd2VhdGhlcmljb24ge1xcbiAgd2lkdGg6IDg2MHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmb250LXNpemU6IDc1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbmZvb3RlciBhOnZpc2l0ZWQge1xcbiAgY29sb3I6ICM2NjVjMjQ7XFxufVxcblxcbi8qIGNoZWNrYm94IHNsaWRlclxcbi8qIGNvcGllZCBmcm9tIHczc2Nob29scyAqL1xcbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNThweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4uc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyogVGhlIHNsaWRlciAqL1xcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgd2lkdGg6IDIzcHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuI3N3aXRjaGluZyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogMTAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwwQ0FBMEM7RUFDMUMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzBCQUMwQjtBQUMxQiwyQ0FBMkM7QUFDM0M7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQiwyQkFBMkI7QUFDN0I7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1tYWluLWJnLWNvbG9yOiAjZWRiYTExO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgZm9udC1mYW1pbHk6IE1vbGVuZ287XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBtYXJnaW4tdG9wOiBjYWxjKCg5OHZoIC0gOTAwcHgpIC8gMik7ICovXFxuICBoZWlnaHQ6IDk1dmg7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uaGlkZXNob3d0aXRsZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBoZWlnaHQ6IDBweDtcXG59XFxuXFxuI2V4dHJhdGVtcGluZm8sXFxuI3N1bixcXG4jY3VycmVudHRlbXBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jZXh0cmF0ZW1waW5mbyBkaXYsXFxuI3N1biBkaXYge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiNjdXJyZW50dGVtcGRpdiBkaXYge1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG59XFxuXFxuI2V4dHJhdGVtcGluZm8sXFxuI3N1biB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNleHRyYXRlbXBpbmZvIHAsXFxuI3N1biBwLFxcbiNjdXJyZW50dGVtcGRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI2N1cnJlbnR0ZW1wZGl2IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjdXJyZW50dGVtcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbiNsb2NhdGlvbmhlYWRlciB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgLyogbWFyZ2luOiBhdXRvIGF1dG87ICovXFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICBib3JkZXI6IHNvbGlkIDRweCB3aGl0ZTtcXG4gIC8qIGZsZXgtZ3JvdzogMTsgKi9cXG59XFxuXFxuI3dlYXRoZXJnaWYge1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3dlYXRoZXJnaWZpbWcge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1heC13aWR0aDogMzYwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI2xvYWRpbmcge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNmZWVsc2xpa2VkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbiNub3RlIHtcXG4gIGZvbnQtc2l6ZTogOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDg1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpICFpbXBvcnRhbnQ7XFxufVxcblxcbmlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuaGVhZGVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRheSB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTc1OyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzY2Y1ODtcXG59XFxuXFxuLm5pZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJmNGM7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kYXlEaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjZjMTtcXG59XFxuXFxuLm5pZ2h0RGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDU4NmY7XFxufVxcblxcbiNjZW50ZXJkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbiNzZWFyY2hiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5sYS1zZWFyY2gge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jd2VhdGhlcmljb24ge1xcbiAgd2lkdGg6IDg2MHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmb250LXNpemU6IDc1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbmZvb3RlciBhOnZpc2l0ZWQge1xcbiAgY29sb3I6ICM2NjVjMjQ7XFxufVxcblxcbi8qIGNoZWNrYm94IHNsaWRlclxcbi8qIGNvcGllZCBmcm9tIHczc2Nob29scyAqL1xcbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNThweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4uc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyogVGhlIHNsaWRlciAqL1xcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgd2lkdGg6IDIzcHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuI3N3aXRjaGluZyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogMTAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZnJvbVVuaXhUaW1lXG4gKiBAY2F0ZWdvcnkgVGltZXN0YW1wIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENyZWF0ZSBhIGRhdGUgZnJvbSBhIFVuaXggdGltZXN0YW1wLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ3JlYXRlIGEgZGF0ZSBmcm9tIGEgVW5peCB0aW1lc3RhbXAuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdW5peFRpbWUgLSB0aGUgZ2l2ZW4gVW5peCB0aW1lc3RhbXBcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENyZWF0ZSB0aGUgZGF0ZSAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjA1OlxuICogdmFyIHJlc3VsdCA9IGZyb21Vbml4VGltZSgxMzMwNTE1OTA1KVxuICogLy89PiBXZWQgRmViIDI5IDIwMTIgMTE6NDU6MDVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmcm9tVW5peFRpbWUoZGlydHlVbml4VGltZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHVuaXhUaW1lID0gdG9JbnRlZ2VyKGRpcnR5VW5peFRpbWUpO1xuICByZXR1cm4gdG9EYXRlKHVuaXhUaW1lICogMTAwMCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBmb3JtYXQsIGZyb21Vbml4VGltZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBjb252ZXJ0dGVtcGVyYXR1cmUgPSBmdW5jdGlvbiAodGVtcGVyYXR1cmUpIHtcbiAgY29uc3QgdGVtcGVyYXR1cmVJbkMgPSBNYXRoLmZsb29yKChOdW1iZXIodGVtcGVyYXR1cmUpIC0gMjczLjE1KSAqIDEwKSAvIDEwO1xuICBjb25zdCB0ZW1wZXJhdHVyZUluRiA9XG4gICAgTWF0aC5mbG9vcigoKE51bWJlcih0ZW1wZXJhdHVyZSkgLSAyNzMuMTUpICogKDkgLyA1KSArIDMyKSAqIDEwKSAvIDEwO1xuICByZXR1cm4gW3RlbXBlcmF0dXJlSW5DLCB0ZW1wZXJhdHVyZUluRl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB3ZWF0aGVyU3RhdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICB3ZWF0aGVyZGVzY3JpcHRpb24sXG4gICAgdGVtcGVyYXR1cmUsXG4gICAgZmVlbHNsaWtlLFxuICAgIG1pbnRlbXAsXG4gICAgbWF4dGVtcCxcbiAgICBodW1pZGl0eSxcbiAgICBzdW5yaXNlLFxuICAgIHN1bnNldCxcbiAgICBjb3VudHJ5LFxuICAgIGNpdHksXG4gICAgdGltZW9mZnNldFxuICApIHtcbiAgICB0aGlzLndlYXRoZXJkZXNjcmlwdGlvbiA9IHdlYXRoZXJkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnRlbXBlcmF0dXJlID0gY29udmVydHRlbXBlcmF0dXJlKHRlbXBlcmF0dXJlKTtcbiAgICB0aGlzLmZlZWxzbGlrZSA9IGNvbnZlcnR0ZW1wZXJhdHVyZShmZWVsc2xpa2UpO1xuICAgIHRoaXMubWludGVtcCA9IGNvbnZlcnR0ZW1wZXJhdHVyZShtaW50ZW1wKTtcbiAgICB0aGlzLm1heHRlbXAgPSBjb252ZXJ0dGVtcGVyYXR1cmUobWF4dGVtcCk7XG4gICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICAgIHRoaXMuc3VucmlzZSA9IHN1bkxvY2FsVGltZShmcm9tVW5peFRpbWUoc3VucmlzZSksIHRpbWVvZmZzZXQpO1xuICAgIHRoaXMuc3Vuc2V0ID0gc3VuTG9jYWxUaW1lKGZyb21Vbml4VGltZShzdW5zZXQpLCB0aW1lb2Zmc2V0KTtcbiAgICB0aGlzLmNvdW50cnkgPSBjb3VudHJ5O1xuICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gICAgdGhpcy50aW1lb2Zmc2V0ID0gY3VycmVudFRpbWUodGltZW9mZnNldCk7XG4gIH1cbn1cblxuY29uc3QgY3VycmVudFRpbWUgPSBmdW5jdGlvbiAodGltZW9mZnNldCkge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGhvdXJzVVRDID0gdG9kYXkuZ2V0VVRDSG91cnMoKTtcbiAgbGV0IG1pbnV0ZXMgPSB0b2RheS5nZXRNaW51dGVzKCk7XG4gIGlmIChOdW1iZXIobWludXRlcykgPCAxMCkge1xuICAgIG1pbnV0ZXMgPSBcIjBcIiArIG1pbnV0ZXM7XG4gIH1cbiAgbGV0IHRpbWVvZmZzZXRIb3VycyA9IE51bWJlcih0aW1lb2Zmc2V0KSAvIDYwIC8gNjA7XG4gIGxldCBob3VycyA9IE51bWJlcihob3Vyc1VUQykgKyB0aW1lb2Zmc2V0SG91cnM7XG4gIGlmIChob3VycyA8IDEwKSB7XG4gICAgaG91cnMgPSBcIjBcIiArIGhvdXJzO1xuICB9IGVsc2UgaWYgKGhvdXJzID4gMjQpIHtcbiAgICBob3VycyA9IGhvdXJzIC0gMjQ7XG4gICAgaG91cnMgPSBcIjBcIiArIGhvdXJzO1xuICB9XG4gIHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfWA7XG59O1xuXG5jb25zdCBzdW5Mb2NhbFRpbWUgPSBmdW5jdGlvbiAoZGF0ZSwgdGltZW9mZnNldCkge1xuICBjb25zdCBob3Vyc1VUQyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgbGV0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgaWYgKE51bWJlcihtaW51dGVzKSA8IDEwKSB7XG4gICAgbWludXRlcyA9IFwiMFwiICsgbWludXRlcztcbiAgfVxuICBsZXQgdGltZW9mZnNldEhvdXJzID0gTnVtYmVyKHRpbWVvZmZzZXQpIC8gNjAgLyA2MDtcbiAgbGV0IGhvdXJzID0gTnVtYmVyKGhvdXJzVVRDKSArIHRpbWVvZmZzZXRIb3VycztcbiAgaWYgKGhvdXJzID4gMCAmJiBob3VycyA8IDEwKSB7XG4gICAgaG91cnMgPSBcIjBcIiArIGhvdXJzO1xuICB9IGVsc2UgaWYgKGhvdXJzIDwgMCkge1xuICAgIGhvdXJzID0gMjQgKyBob3VycztcbiAgfSBlbHNlIGlmIChob3VycyA+IDI0KSB7XG4gICAgaG91cnMgPSBob3VycyAtIDI0O1xuICAgIGhvdXJzID0gXCIwXCIgKyBob3VycztcbiAgfVxuICByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc31gO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgd2VhdGhlclN0YXRzIGZyb20gXCIuL3NjcmlwdC5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgbG9jYXRpb25zZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uaW5wdXRcIik7XG5jb25zdCBzdWJtaXRzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdHNlYXJjaFwiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcblxuc3VibWl0c2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRsb2NhdGlvbiA9IGVuY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbnNlYXJjaC52YWx1ZSk7XG4gICAgY2hlY2t3ZWF0aGVyKHNlbGVjdGVkbG9jYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIGxvY2F0aW9uc2VhcmNoLnNldEN1c3RvbVZhbGlkaXR5KFxuICAgICAgXCJXcml0ZSBhIHZhbGlkIGxvY2F0aW9uIG5hbWUuIExldHRlcnMgYW5kIHNwYWNlcyBhcmUgYWxsb3dlZC5cIlxuICAgICk7XG4gIH1cbiAgbG9jYXRpb25zZWFyY2gucmVwb3J0VmFsaWRpdHkoKTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBjaGVja3dlYXRoZXIoY2l0eSkge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPWRhMjNlMjIwNmNhMTc2NTE1MmQyNTVlZDU4ODJiYTFmYDtcbiAgdHJ5IHtcbiAgICBjb25zdCBkaXZsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nXCIpO1xuICAgIGNvbnN0IGxvYWRpbmdzcGFuID0gZGl2bG9hZGluZy5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgICBsb2FkaW5nc3Bhbi50ZXh0Q29udGVudCA9IFwiU2VhcmNoaW5nXCI7XG4gICAgZGl2bG9hZGluZy5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgY29uc3QgZmlyc3RpZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZXNwaW5uZXIuc3RlcCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICBkaXZsb2FkaW5nLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgbG9hZGluZ3NwYW4udGV4dENvbnRlbnQgPSBcIiBMb2NhdGlvbiBub3QgZm91bmRcIjtcbiAgICAgIGRpdmxvYWRpbmcuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmZXRjaGVkZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBkaXZsb2FkaW5nLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIGNvbnN0IHdlYXRoZXJ0b2RheSA9IG5ldyB3ZWF0aGVyU3RhdHMoXG4gICAgICBmZXRjaGVkZGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICBmZXRjaGVkZGF0YS5tYWluLnRlbXAsXG4gICAgICBmZXRjaGVkZGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgICBmZXRjaGVkZGF0YS5tYWluLnRlbXBfbWluLFxuICAgICAgZmV0Y2hlZGRhdGEubWFpbi50ZW1wX21heCxcbiAgICAgIGZldGNoZWRkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgICBmZXRjaGVkZGF0YS5zeXMuc3VucmlzZSxcbiAgICAgIGZldGNoZWRkYXRhLnN5cy5zdW5zZXQsXG4gICAgICBmZXRjaGVkZGF0YS5zeXMuY291bnRyeSxcbiAgICAgIGZldGNoZWRkYXRhLm5hbWUsXG4gICAgICBmZXRjaGVkZGF0YS50aW1lem9uZVxuICAgICk7XG4gICAgdXBkYXRlRG9tKHdlYXRoZXJ0b2RheSk7XG4gICAgc3R5bGVkYXlvcm5pZ2h0KHdlYXRoZXJ0b2RheSk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKTtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnR0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50dGVtcFwiKTtcbiAgICAgIGlmIChjdXJyZW50dGVtcC5pbm5lckhUTUwgIT09IFwiXCIpIHtcbiAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICBzd2l0Y2hDRihcImZhaHJcIiwgd2VhdGhlcnRvZGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2l0Y2hDRihcImNlbHNpdXNcIiwgd2VhdGhlcnRvZGF5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB3ZWF0aGVydG9kYXk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXR3ZWF0aGVyZ2lmKGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT1XU0lBUnZaVEpYblJsQTd2YnJyTm5BY2ZUSWZRZlJ6cCZzPSR7ZGVzY3JpcHRpb259YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjb25zdCBmZXRjaGVkZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBpbWd1cmwgPSBhd2FpdCBmZXRjaGVkZGF0YS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG4gICAgcmV0dXJuIGltZ3VybDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmNvbnN0IHVwZGF0ZURvbSA9IGFzeW5jIGZ1bmN0aW9uICh3ZWF0aGVyaW5mb29iamVjdCkge1xuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuICBjb25zdCBoZm91ciA9IGluZm8ucXVlcnlTZWxlY3RvckFsbChcIi5oaWRlc2hvd3RpdGxlXCIpO1xuICBjb25zdCBsb2NhdGlvbmhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25oZWFkZXJcIik7XG4gIGNvbnN0IGN1cnJlbnR0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50dGVtcFwiKTtcbiAgY29uc3QgZXh0cmF0ZW1waW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXh0cmF0ZW1waW5mb1wiKTtcbiAgY29uc3Qgc3VuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5cIik7XG4gIGNvbnN0IHdlYXRoZXJkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlcmdpZlwiKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyZ2lmaW1nXCIpO1xuXG4gIGhmb3VyLmZvckVhY2goZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgdGl0bGUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIHRpdGxlLnN0eWxlLmhlaWdodCA9IFwibWluLWNvbnRlbnRcIjtcbiAgfSk7XG5cbiAgY29uc3QgaW5wdXRjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpO1xuXG4gIGNvbnN0IHBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XG4gIGxvY2F0aW9uaGVhZGVyLmlubmVySFRNTCA9IGAke3dlYXRoZXJpbmZvb2JqZWN0LmNpdHl9LCAke3dlYXRoZXJpbmZvb2JqZWN0LmNvdW50cnl9ICZuYnNwfCZuYnNwIDxpIGNsYXNzPVwibGFzIGxhLWNsb2NrXCI+PC9pPiAke3dlYXRoZXJpbmZvb2JqZWN0LnRpbWVvZmZzZXR9YDtcbiAgcGh1bWlkaXR5LmlubmVySFRNTCA9IHdlYXRoZXJpbmZvb2JqZWN0Lmh1bWlkaXR5ICsgXCIlXCI7XG4gIGlmIChpbnB1dGNoZWNrLmNoZWNrZWQpIHtcbiAgICBzd2l0Y2hDRihcImZhaHJcIiwgd2VhdGhlcmluZm9vYmplY3QpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaENGKFwiY2Vsc2l1c1wiLCB3ZWF0aGVyaW5mb29iamVjdCk7XG4gIH1cbiAgY29uc3Qgc3VucmlzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VucmlzZVwiKTtcbiAgY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5zZXRcIik7XG4gIHN1bnJpc2UuaW5uZXJIVE1MID0gd2VhdGhlcmluZm9vYmplY3Quc3VucmlzZTtcbiAgc3Vuc2V0LmlubmVySFRNTCA9IHdlYXRoZXJpbmZvb2JqZWN0LnN1bnNldDtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJnaWZkZXNjXCIpLnRleHRDb250ZW50ID1cbiAgICB3ZWF0aGVyaW5mb29iamVjdC53ZWF0aGVyZGVzY3JpcHRpb24gKyBcIiB8IFwiO1xuICBpbWcuc3JjID0gYXdhaXQgZ2V0d2VhdGhlcmdpZih3ZWF0aGVyaW5mb29iamVjdC53ZWF0aGVyZGVzY3JpcHRpb24pO1xuICB3ZWF0aGVyZGVzY3JpcHRpb24uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICBpbmZvLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbn07XG5cbmZ1bmN0aW9uIHN3aXRjaENGKHVuaXQsIHdlYXRoZXJpbmZvb2JqZWN0KSB7XG4gIGNvbnN0IGN1cnJlbnR0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50dGVtcFwiKTtcbiAgY29uc3QgcGZlZWxzbGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHNsaWtlXCIpO1xuICBjb25zdCBwbWludGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWludGVtcFwiKTtcbiAgY29uc3QgcG1heHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1heHRlbXBcIik7XG4gIGlmICh1bml0ID09PSBcImNlbHNpdXNcIikge1xuICAgIGN1cnJlbnR0ZW1wLmlubmVySFRNTCA9IHdlYXRoZXJpbmZvb2JqZWN0LnRlbXBlcmF0dXJlWzBdICsgXCLCsENcIjtcbiAgICBwZmVlbHNsaWtlLmlubmVySFRNTCA9IHdlYXRoZXJpbmZvb2JqZWN0LmZlZWxzbGlrZVswXSArIFwiwrBDXCI7XG4gICAgcG1pbnRlbXAuaW5uZXJIVE1MID0gd2VhdGhlcmluZm9vYmplY3QubWludGVtcFswXSArIFwiwrBDXCI7XG4gICAgcG1heHRlbXAuaW5uZXJIVE1MID0gd2VhdGhlcmluZm9vYmplY3QubWF4dGVtcFswXSArIFwiwrBDXCI7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudHRlbXAuaW5uZXJIVE1MID0gd2VhdGhlcmluZm9vYmplY3QudGVtcGVyYXR1cmVbMV0gKyBcIsKwRlwiO1xuICAgIHBmZWVsc2xpa2UuaW5uZXJIVE1MID0gd2VhdGhlcmluZm9vYmplY3QuZmVlbHNsaWtlWzFdICsgXCLCsEZcIjtcbiAgICBwbWludGVtcC5pbm5lckhUTUwgPSB3ZWF0aGVyaW5mb29iamVjdC5taW50ZW1wWzFdICsgXCLCsEZcIjtcbiAgICBwbWF4dGVtcC5pbm5lckhUTUwgPSB3ZWF0aGVyaW5mb29iamVjdC5tYXh0ZW1wWzFdICsgXCLCsEZcIjtcbiAgfVxufVxuXG5jb25zdCBhbmltYXRlc3Bpbm5lciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNwaW5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGluaXRcIik7XG4gIGxldCBzdGFydCwgcHJldmlvdXNUaW1lU3RhbXAsIGFuaW1hdGlvbklEO1xuXG4gIGZ1bmN0aW9uIHN0ZXAodGltZXN0YW1wKSB7XG4gICAgY29uc3QgaGlkZGVub3J2aXNpYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1wiKS5zdHlsZVxuICAgICAgLnZpc2liaWxpdHk7XG4gICAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0YXJ0ID0gdGltZXN0YW1wO1xuICAgIH1cbiAgICBsZXQgZWxhcHNlZCA9IHRpbWVzdGFtcCAtIHN0YXJ0O1xuICAgIGlmIChwcmV2aW91c1RpbWVTdGFtcCAhPT0gdGltZXN0YW1wKSB7XG4gICAgICBpZiAoZWxhcHNlZCA+IDM2MDApIHtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoZWxhcHNlZCAvIDM2MDApO1xuICAgICAgICBlbGFwc2VkID0gZWxhcHNlZCAtIDM2MDAgKiBtaW51dGVzO1xuICAgICAgfVxuICAgICAgY29uc3QgY291bnQgPSBNYXRoLm1pbigwLjEgKiBlbGFwc2VkLCAzNjApO1xuICAgICAgc3BpbmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyBjb3VudCArIFwiZGVnKVwiO1xuICAgIH1cbiAgICBpZiAoaGlkZGVub3J2aXNpYmlsZSA9PT0gXCJ2aXNpYmxlXCIpIHtcbiAgICAgIGFuaW1hdGlvbklEID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgIHJldHVybiBhbmltYXRpb25JRDtcbiAgICB9XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklEKTtcbiAgfVxuICByZXR1cm4geyBzdGVwIH07XG59KSgpO1xuXG5jb25zdCBzdHlsZWRheW9ybmlnaHQgPSBmdW5jdGlvbiAod2VhdGhlcmluZm9vYmplY3QpIHtcbiAgY29uc3QgaG91ciA9IHdlYXRoZXJpbmZvb2JqZWN0LnRpbWVvZmZzZXQuc3BsaXQoXCI6XCIpWzBdO1xuICBjb25zdCBzdW5yaXNlID0gd2VhdGhlcmluZm9vYmplY3Quc3VucmlzZS5zcGxpdChcIjpcIilbMF07XG4gIGNvbnN0IHN1bnNldCA9IHdlYXRoZXJpbmZvb2JqZWN0LnN1bnNldC5zcGxpdChcIjpcIilbMF07XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgZXh0cmF0ZW1waW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXh0cmF0ZW1waW5mb1wiKTtcbiAgY29uc3QgZXh0cmF0ZW1waW5mb2RpdiA9IGV4dHJhdGVtcGluZm8ucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgY29uc3Qgc3VuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5cIik7XG4gIGNvbnN0IHN1bmRpdiA9IHN1bi5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICBjb25zdCBpbnB1dHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSdzdWJtaXQnXVwiKTtcbiAgY29uc3Qgc2VhcmNoaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGEtc2VhcmNoXCIpO1xuICBjb25zdCB3ZWF0aGVyZGVzY3JpcHRpb24gPSB3ZWF0aGVyaW5mb29iamVjdC53ZWF0aGVyZGVzY3JpcHRpb247XG4gIGlmIChob3VyID4gc3VucmlzZSAmJiBob3VyIDwgc3Vuc2V0KSB7XG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRheVwiKTtcbiAgICBleHRyYXRlbXBpbmZvZGl2LmZvckVhY2goKGRpdikgPT4gZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGF5RGl2XCIpKTtcbiAgICBzdW5kaXYuZm9yRWFjaCgoZGl2KSA9PiBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkYXlEaXZcIikpO1xuICAgIGlucHV0c3VibWl0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZjZjMVwiO1xuICAgIGlucHV0c3VibWl0LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgIHNlYXJjaGljb24uc3R5bGUuY29sb3IgPSBcImRhcmtncmV5XCI7XG4gICAgd2VhdGhlcmljb25EYXkod2VhdGhlcmRlc2NyaXB0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBib2R5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmlnaHRcIik7XG4gICAgZXh0cmF0ZW1waW5mb2Rpdi5mb3JFYWNoKChkaXYpID0+IGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5pZ2h0RGl2XCIpKTtcbiAgICBzdW5kaXYuZm9yRWFjaCgoZGl2KSA9PiBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuaWdodERpdlwiKSk7XG4gICAgaW5wdXRzdWJtaXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNTQ1ODZmXCI7XG4gICAgaW5wdXRzdWJtaXQuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgc2VhcmNoaWNvbi5zdHlsZS5jb2xvciA9IFwiZGFya2dyZXlcIjtcbiAgICB3ZWF0aGVyaWNvbk5pZ2h0KHdlYXRoZXJkZXNjcmlwdGlvbik7XG4gIH1cbn07XG5cbmNvbnN0IHdlYXRoZXJpY29uRGF5ID0gZnVuY3Rpb24gKHdlYXRoZXJkZXNjcmlwdGlvbikge1xuICBjb25zdCB3ZWF0aGVyaWNvbmRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlcmljb25cIik7XG4gIHN3aXRjaCAod2VhdGhlcmRlc2NyaXB0aW9uKSB7XG4gICAgY2FzZSBcIkNsb3Vkc1wiOlxuICAgICAgd2VhdGhlcmljb25kaXYuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwibGFzIGxhLWNsb3VkLXN1blwiPjwvaT4nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNsZWFyXCI6XG4gICAgICB3ZWF0aGVyaWNvbmRpdi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJsYXMgbGEtc3VuXCI+PC9pPic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUmFpblwiOlxuICAgICAgd2VhdGhlcmljb25kaXYuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwibGFzIGxhLWNsb3VkLXNob3dlcnMtaGVhdnlcIj48L2k+JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJTbm93XCI6XG4gICAgICB3ZWF0aGVyaWNvbmRpdi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJsYXMgbGEtc25vd2ZsYWtlXCI+PC9pPic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRHJpenpsZVwiOlxuICAgICAgd2VhdGhlcmljb25kaXYuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwibGFzIGxhLWNsb3VkLXJhaW5cIj48L2k+JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJUaHVuZGVyc3Rvcm1cIjpcbiAgICAgIHdlYXRoZXJpY29uZGl2LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImxhcyBsYS1ib2x0XCI+PC9pPic7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgd2VhdGhlcmljb25kaXYuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwibGFzIGxhLXNtb2dcIj48L2k+JztcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG5jb25zdCB3ZWF0aGVyaWNvbk5pZ2h0ID0gZnVuY3Rpb24gKHdlYXRoZXJkZXNjcmlwdGlvbikge1xuICBjb25zdCB3ZWF0aGVyaWNvbmRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlcmljb25cIik7XG4gIHN3aXRjaCAod2VhdGhlcmRlc2NyaXB0aW9uKSB7XG4gICAgY2FzZSBcIkNsb3Vkc1wiOlxuICAgICAgd2VhdGhlcmljb25kaXYuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwibGFzIGxhLWNsb3VkLW1vb25cIj48L2k+JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJDbGVhclwiOlxuICAgICAgd2VhdGhlcmljb25kaXYuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwibGFyIGxhLW1vb25cIj48L2k+JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJSYWluXCI6XG4gICAgICB3ZWF0aGVyaWNvbmRpdi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJsYXMgbGEtY2xvdWQtcmFpblwiPjwvaT4nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlNub3dcIjpcbiAgICAgIHdlYXRoZXJpY29uZGl2LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImxhcyBsYS1zbm93Zmxha2VcIj48L2k+JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJEcml6emxlXCI6XG4gICAgICB3ZWF0aGVyaWNvbmRpdi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJsYXMgbGEtY2xvdWQtbW9vbi1yYWluXCI+JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJUaHVuZGVyc3Rvcm1cIjpcbiAgICAgIHdlYXRoZXJpY29uZGl2LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImxhcyBsYS1ib2x0XCI+PC9pPic7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgd2VhdGhlcmljb25kaXYuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwibGFzIGxhLXNtb2dcIj48L2k+JztcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG53aW5kb3cub25sb2FkID0gY2hlY2t3ZWF0aGVyKFwiQWdyb2FsXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9