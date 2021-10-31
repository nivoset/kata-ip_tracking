"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRequestHandled = void 0;
var getLowestEntry = function (_a, _b) {
    var lowestIp = _a[0], lowestCount = _a[1];
    var ip = _b[0], count = _b[1];
    return count < lowestCount
        ? [ip, count]
        : [lowestIp, lowestCount];
};
var generateRequestHandled = function (highVolumeTrackingData, trackingData) {
    var threshold = 0;
    return function (ipAddress) {
        var _a;
        var callCount = ((_a = trackingData.get(ipAddress)) !== null && _a !== void 0 ? _a : 0) + 1;
        trackingData.set(ipAddress, callCount);
        // if we are greater than the threshold for being in the high volume, add to the high volume tracking data
        if (callCount >= threshold) {
            highVolumeTrackingData.set(ipAddress, callCount);
            // clear out the lowest entry if you have more than 100 entries
            if (highVolumeTrackingData.size > 100) {
                var _b = Array.from(highVolumeTrackingData)
                    .reduce(getLowestEntry, ['', Number.MAX_VALUE]), lowestIp = _b[0], lowestCount = _b[1];
                // use the lowest count as the new threshold
                threshold = lowestCount;
                highVolumeTrackingData.delete(lowestIp);
            }
        }
    };
};
exports.generateRequestHandled = generateRequestHandled;
