"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_utils_1 = require("@antenta/cli-utils");
const package_json_1 = __importDefault(require("../../package.json"));
exports.default = () => {
    cli_utils_1.log.notice('当前版本', `an-cli v${package_json_1.default.version}`);
    cli_utils_1.log.success('欢迎使用antenta-cli脚手架');
};
