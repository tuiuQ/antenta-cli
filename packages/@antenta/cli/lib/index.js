"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var package_json_1 = __importDefault(require("../package.json"));
var program = new commander_1.Command("an-cli");
program
    .version("an-cli " + package_json_1.default.version);
program
    .command('create <projectName>')
    .description('create a new project by an-cli')
    .option('-i, --install', 'is auto install library', false)
    .option('-t, --tool [value]', '选择构建包')
    .action(function (projectName) {
    console.log("projectName", projectName);
});
program
    .command('init')
    .option('');
