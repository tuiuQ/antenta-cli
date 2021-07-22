"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./utils/log/index"));
var package_json_1 = __importDefault(require("../package.json"));
try {
    check();
}
catch (e) {
    throw new Error(e);
}
function check() {
    checkPkgVersion();
}
function checkPkgVersion() {
    index_1.default.success('欢迎使用Antenta-CLI脚手架');
    index_1.default.notice('Antenta-CLI', package_json_1.default.version);
}
