"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTracker = void 0;
var generateClear_1 = require("./generateClear");
var generateTop100_1 = require("./generateTop100");
var generateRequestHandled_1 = require("./generateRequestHandled");
var generateTracker = function () {
    // keep high volume tracking data in a separate map for quick access
    var highVolumeTrackingData = new Map();
    // keep all tracking data here
    var trackingData = new Map();
    return {
        request_handled: (0, generateRequestHandled_1.generateRequestHandled)(highVolumeTrackingData, trackingData),
        clear: (0, generateClear_1.generateClear)(highVolumeTrackingData, trackingData),
        top100: (0, generateTop100_1.generateTop100)(highVolumeTrackingData),
    };
};
exports.generateTracker = generateTracker;
