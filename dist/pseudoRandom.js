"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pseudoRandomGenerator = void 0;
var sfc32 = function (a, b, c, d) { return function () {
    a >>>= 0;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    var t = (a + b) | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = (c << 21 | c >>> 11);
    d = d + 1 | 0;
    t = t + d | 0;
    c = c + t | 0;
    return (t >>> 0) / 4294967296;
}; };
var pseudoRandomGenerator = function (seed) {
    return sfc32(0x9E3779B9, 0x243F6A88, 0xB7E15162, seed ^ 0xDEADBEEF);
};
exports.pseudoRandomGenerator = pseudoRandomGenerator;
