"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateTracker_1 = require("./generateTracker");
var _a = (0, generateTracker_1.generateTracker)(), clear = _a.clear, top100 = _a.top100, request_handled = _a.request_handled;
request_handled('127.0.0.1');
console.log(top100());
clear();
