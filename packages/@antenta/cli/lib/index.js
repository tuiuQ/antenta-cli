"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = __importDefault(require("./check"));
const command_1 = __importDefault(require("./command"));
const cli_utils_1 = require("@antenta/cli-utils");
async function cli() {
    try {
        await check_1.default();
        command_1.default();
    }
    catch (e) {
        cli_utils_1.log.error('❌❌❌', '项目出错啦');
        throw new Error(e);
    }
}
cli();
