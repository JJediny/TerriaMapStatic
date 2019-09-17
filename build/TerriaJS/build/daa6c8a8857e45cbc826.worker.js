/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/babel-loader/lib/index.js?!./lib/ReactViews/Custom/Chart/downloadHrefWorker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Core/sortedIndices.js":
/*!***********************************!*\
  !*** ./lib/Core/sortedIndices.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Returns indices such that array[indices[i]] = sortedArray[i].
 * Eg. sortedIndices(['c', 'a', 'b', 'd']) => [1, 2, 0, 3]. (The sorted array is [a, b, c, d], and "a" was in position 1, "b" in position 2, etc.)
 * @param {Array} array The array to sort.
 * @param {Function} [compareFunction] The usual compare function, eg. function(a, b) { return a - b }.
 * @return {Array} The sorted indices, such that array[sortedIndices[0]] = sortedArray[0].
 */

function sortedIndices(array, compareFunction) {
  var length = array.length;
  var indices = new Array(length);

  for (var i = 0; i < length; i++) {
    indices[i] = i;
  }

  if (!compareFunction) {
    compareFunction = function compareFunction(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  }

  indices.sort(function (a, b) {
    return compareFunction(array[a], array[b]);
  });
  return indices;
} //
// Note: for indices which go in the other direction, just use indexOf like this:
//
// it('inverse indices work', function() {
//     var data = ['c', 'a', 'b', 'd'];
//     var sorted = data.slice().sort();
//     var inverseIndices = data.map(function(datum) { return sorted.indexOf(datum); });
//     expect(inverseIndices).toEqual([2, 0, 1, 3]);
// });


module.exports = sortedIndices;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./lib/ReactViews/Custom/Chart/downloadHrefWorker.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7!./lib/ReactViews/Custom/Chart/downloadHrefWorker.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defined = _interopRequireDefault(__webpack_require__(/*! terriajs-cesium/Source/Core/defined */ "./node_modules/terriajs-cesium/Source/Core/defined.js"));

var _sortedIndices = _interopRequireDefault(__webpack_require__(/*! ../../../Core/sortedIndices */ "./lib/Core/sortedIndices.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* global onmessage:true */

/**
 * Create combined arrays from arrays of column values, eg. [[values1, values2, values3], [values4, values5]].
 * The first columns of each array must be of the same type (in the above example, values1 and values4).
 * These are combined and sorted into a single column.
 * Then the subsequent columns are added, filling with null where missing. (This could be an option in future.)
 * Eg. if the values of each col are: values1=[1,3]; values2=[10,30]; values3=[100,300]; values4=[1,2]; values5=[-1,-2];
 * then the resulting array of column values are, in order, [1,2,3]; [10,null,30]; [100,null,300]; [-1,-2,null].
 * @param {Array[]} valueArrays See description above.
 * @return {Array[]} The synthesized values which could be passed to a table structure.
 */
function combineValueArrays(valueArrays) {
  if (!(0, _defined["default"])(valueArrays) || valueArrays.length < 1) {
    return;
  }

  var combinedValueArrays = []; // Start by copying the first set of columns into the result.

  var firstArray = valueArrays[0];

  for (var j = 0; j < firstArray.length; j++) {
    var values = firstArray[j];
    combinedValueArrays.push(values.slice());
  } // Then add the subsequent sets of x-columns to the end of the first result column,
  // add nulls to the end of the other existing columns,
  // add nulls to the start of the new columns,
  // and add them to the end of the result.


  for (var i = 1; i < valueArrays.length; i++) {
    var currentValueArray = valueArrays[i];
    var currentFirstArray = currentValueArray[0];
    var preExistingValuesLength = combinedValueArrays[0].length;
    combinedValueArrays[0] = combinedValueArrays[0].concat(currentFirstArray);
    var empty1 = new Array(currentFirstArray.length); // elements are undefined.

    for (var k = 1; k < combinedValueArrays.length; k++) {
      combinedValueArrays[k] = combinedValueArrays[k].concat(empty1);
    }

    var empty2 = new Array(preExistingValuesLength); // elements are undefined.

    for (var _j = 1; _j < currentValueArray.length; _j++) {
      var _values = currentValueArray[_j];
      combinedValueArrays.push(empty2.concat(_values));
    }
  } // Sort by the first column.


  combinedValueArrays = sortByFirst(combinedValueArrays);
  combinedValueArrays = combineRepeated(combinedValueArrays);
  return combinedValueArrays;
}
/**
 * Eg. sortByFirst([['b', 'a', 'c'], [1, 2, 3]]) = [['a', 'b', 'c'], [2, 1, 3]].
 * @param  {Array[]} valueArrays The array of arrays of values to sort.
 * @return {Array[]} The values sorted by the first column.
 */


function sortByFirst(valueArrays) {
  var firstValues = valueArrays[0];
  var indices = (0, _sortedIndices["default"])(firstValues);
  return valueArrays.map(function (values) {
    return indices.map(function (sortedIndex) {
      return values[sortedIndex];
    });
  });
}
/**
 * @param  {Array[]} sortedJulianDateOrValueArrays The array of arrays of values to combine. These must be sortedByFirst. Dates must be JulianDates.
 * @param  {Integer} [firstColumnType] Eg. VarType.TIME.
 * @return {Array[]} The values, with any repeats in the first column combined into one. Dates are converted to ISO8601 string representation.
 *
 * Eg.
 * var x = [['a', 'b', 'b', 'c'], [1, 2, undefined, 3], [4, undefined, 5, undefined]];
 * combineRepeated(x);
 * # x is [['a', 'b', 'c'], [1, 2, 3], [4, 5, undefined]].
 */


function combineRepeated(sortedValueArrays) {
  var result = new Array(sortedValueArrays.length);

  for (var i = 0; i < result.length; i++) {
    result[i] = [sortedValueArrays[i][0]];
  }

  for (var j = 1; j < sortedValueArrays[0].length; j++) {
    if (sortedValueArrays[0][j] === sortedValueArrays[0][j - 1]) {
      var currentIndex = result[0].length - 1;

      for (var _i = 0; _i < result.length; _i++) {
        if (result[_i][currentIndex] === undefined) {
          result[_i][currentIndex] = sortedValueArrays[_i][j];
        }
      }
    } else {
      for (var _i2 = 0; _i2 < result.length; _i2++) {
        result[_i2].push(sortedValueArrays[_i2][j]);
      }
    }
  }

  return result;
}
/**
 * Convert an array of column values, with column names, to an array of row values.
 * @param  {Array[]} columnValueArrays Array of column values, eg. [[1,2,3], [4,5,6]].
 * @param  {String[]} columnNames Array of column names, eg ['x', 'y'].
 * @return {Array[]} Array of rows, starting with the column names, eg. [['x', 'y'], [1, 4], [2, 5], [3, 6]].
 */


function toArrayOfRows(columnValueArrays, columnNames) {
  if (columnValueArrays.length < 1) {
    return;
  }

  var rows = columnValueArrays[0].map(function (value0, rowIndex) {
    return columnValueArrays.map(function (values) {
      return values[rowIndex];
    });
  });
  rows.unshift(columnNames);
  return rows;
}

onmessage = function onmessage(event) {
  var valueArrays = event.data.values.map(function (valuesArray) {
    return valuesArray.map(function (values) {
      return Array.prototype.slice.call(values);
    });
  }); // Convert from typed arrays.

  var nameArrays = event.data.names;
  var combinedValues = combineValueArrays(valueArrays);
  var rows = toArrayOfRows(combinedValues, nameArrays);
  var joinedRows = rows.map(function (row) {
    return row.join(",");
  });
  var csvString = joinedRows.join("\n");
  postMessage(csvString);
};

/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/Core/defined.js":
/*!*************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/Core/defined.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    /**
     * @exports defined
     *
     * @param {*} value The object.
     * @returns {Boolean} Returns true if the object is defined, returns false otherwise.
     *
     * @example
     * if (Cesium.defined(positions)) {
     *      doSomething();
     * } else {
     *      doSomethingElse();
     * }
     */
    function defined(value) {
        return value !== undefined && value !== null;
    }

    return defined;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });
//# sourceMappingURL=daa6c8a8857e45cbc826.worker.js.map