"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var arr = [12, 34, 56, 78, 13];
var result = [].concat(_toConsumableArray(new Set(arr)));
console.log(result);
