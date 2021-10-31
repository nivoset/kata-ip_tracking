"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateClear_1 = require("./generateClear");
it('should clear populated maps', function () {
    var populatedMap = new Map();
    populatedMap.set('key', 0);
    var clear = (0, generateClear_1.generateClear)(populatedMap);
    expect(populatedMap.size).toBe(1);
    clear();
    expect(populatedMap.size).toBe(0);
});
it('should clear populated maps even if multiple pushed in', function () {
    var maps = new Array(10).fill(0).map(function () {
        var populatedMap = new Map();
        populatedMap.set('key', 0);
        return populatedMap;
    });
    var clear = generateClear_1.generateClear.apply(void 0, maps);
    expect(maps.map(function (m) { return m.size; }).reduce(function (a, c) { return a + c; }, 0)).toBe(10);
    clear();
    expect(maps.map(function (m) { return m.size; }).reduce(function (a, c) { return a + c; }, 0)).toBe(0);
});
