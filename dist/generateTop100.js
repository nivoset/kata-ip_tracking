"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTop100 = void 0;
var generateTop100 = function (highVolumeTrackingData) { return function () {
    return Array.from(highVolumeTrackingData)
        //sort via the count
        .sort(function (_a, _b) {
        var aCount = _a[1];
        var bCount = _b[1];
        return bCount - aCount;
    })
        //map to the ip address
        .map(function (_a) {
        var ipAddress = _a[0];
        return ipAddress;
    })
        // slice top 100
        .slice(0, 100);
}; };
exports.generateTop100 = generateTop100;
