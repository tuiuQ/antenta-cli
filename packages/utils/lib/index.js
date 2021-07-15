"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.header = exports.log = exports.test = exports.resolve = void 0;
var path_1 = require("./path");
Object.defineProperty(exports, "resolve", { enumerable: true, get: function () { return path_1.resolve; } });
Object.defineProperty(exports, "test", { enumerable: true, get: function () { return path_1.test; } });
var log_1 = require("./log");
Object.defineProperty(exports, "log", { enumerable: true, get: function () { return __importDefault(log_1).default; } });
Object.defineProperty(exports, "header", { enumerable: true, get: function () { return log_1.header; } });
