"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateClear = void 0;
var generateClear = function () {
    var mapsToClear = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mapsToClear[_i] = arguments[_i];
    }
    return function () {
        mapsToClear.forEach(function (map) { return map.clear(); });
    };
};
exports.generateClear = generateClear;
