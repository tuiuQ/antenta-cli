"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.resolve = void 0;
var path_1 = require("path");
function resolve(filePath) {
    return path_1.join(__dirname, '..', filePath);
}
exports.resolve = resolve;
function test() {
    return 'test';
}
exports.test = test;
