"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var execa_1 = __importDefault(require("execa"));
exports.default = (function (command, options) {
    return new Promise(function (resolve, reject) {
        var subProcess = execa_1.default.command(command, options);
        subProcess.stdout.pipe(process.stdout);
        subProcess.stdout.on('close', resolve);
        subProcess.stdout.on('error', reject);
    });
});
