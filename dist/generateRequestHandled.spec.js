"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateRequestHandled_1 = require("./generateRequestHandled");
it('should add first 100 elements to the top 100', function () {
    var top = new Map();
    var all = new Map();
    var requestHandled = (0, generateRequestHandled_1.generateRequestHandled)(top, all);
    for (var i = 0; i < 100; i++) {
        requestHandled("test " + i);
    }
    expect(top.size).toBe(100);
    expect(all.size).toBe(100);
});
it('should add first 100 elements to the top 100, all 200 should be in all', function () {
    var top = new Map();
    var all = new Map();
    var requestHandled = (0, generateRequestHandled_1.generateRequestHandled)(top, all);
    for (var i = 0; i < 200; i++) {
        requestHandled("test " + i);
    }
    expect(top.size).toBe(100);
    expect(all.size).toBe(200);
});
