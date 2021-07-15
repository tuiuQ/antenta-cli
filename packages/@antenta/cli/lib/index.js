"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var figlet_1 = __importDefault(require("figlet"));
var package_json_1 = __importDefault(require("../package.json"));
var npmlog_1 = __importDefault(require("npmlog"));
var chalk_1 = __importDefault(require("chalk"));
var program = new commander_1.Command("an-cli");
program
    .version("an-cli " + package_json_1.default.version);
program
    .command('version')
    .action(function () {
    figlet_1.default('antenta-cli', function (err, data) {
        console.log(chalk_1.default.red(data));
    });
    npmlog_1.default.headers = 'antenta-cli';
    npmlog_1.default.addLevel('success', 2000, { fg: 'green', bold: true });
    npmlog_1.default.success("\uD83D\uDE46 an-cli v" + package_json_1.default.version);
});
program
    .command('create <projectName>')
    .description('创建新项目')
    .option('-i, --install', '是否自动安装依赖', false)
    .option('-t, --tool [value]', '选择安装依赖的包管理工具(默认npm)', 'npm')
    .action(function (projectName) {
    console.log("projectName", projectName);
});
program.parse(process.argv);
