"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateTracker_1 = require("./generateTracker");
var pseudoRandom_1 = require("./pseudoRandom");
var tracker;
beforeEach(function () {
    tracker = (0, generateTracker_1.generateTracker)();
});
it('should generate a new tracker with no records', function () {
    expect(tracker.top100()).toEqual([]);
});
it('should clear tracker when reset', function () {
    expect(tracker.top100()).toEqual([]);
    tracker.request_handled("ip");
    expect(tracker.top100()).toEqual(["ip"]);
    tracker.clear();
    expect(tracker.top100()).toEqual([]);
});
it('should give top 100 results', function () {
    var rand = (0, pseudoRandom_1.pseudoRandomGenerator)(1337 ^ 0xDEADBEEF);
    expect(tracker.top100()).toMatchSnapshot();
    // generate 10000 pseudo-random requests and check if top 100 is correct
    // the "ip addresses" used are just strings of data showing index as well as number of 'calls'
    new Array(700).fill(0)
        .map(function () { return Math.floor(rand() * 10000); })
        .map(function (r, i) { return ["ip index=" + i + " numberOfRequests=" + r, r]; })
        .map(function (_a) {
        var ip = _a[0], count = _a[1];
        return new Array(count).fill(ip);
    })
        .flat()
        .forEach(tracker.request_handled);
    // only used a snapshot here as the order of the top 100 is a large set of data
    expect(tracker.top100()).toMatchSnapshot();
});
