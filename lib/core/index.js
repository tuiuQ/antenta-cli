"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommand = void 0;
var commander_1 = require("commander");
var package_json_1 = __importDefault(require("../../package.json"));
var colors_1 = __importDefault(require("colors"));
var create_1 = __importDefault(require("../create"));
var add_1 = __importDefault(require("../add"));
function registerCommand() {
    var program = new commander_1.Command('anc');
    program
        .version(package_json_1.default.version)
        .usage('<command> [options]')
        .addHelpText('afterAll', "\n\u8FD0\u884C " + colors_1.default.blue('anc <command> --help') + " \u83B7\u53D6\u6709\u5173\u547D\u4EE4\u7684\u8BE6\u7EC6\u7528\u6CD5\u7684\u5E2E\u52A9");
    program
        .command('create <project-name>')
        .description('创建新项目')
        .option('-i, --install', '是否自动安装依赖')
        .option('-t, --tool [value]', '选择构建工具')
        .option('-pt, --packageTool [value]', '选择包管理工具')
        .action(function (projectName, options) {
        create_1.default(projectName, options);
    });
    program
        .addCommand(add_1.default);
    program.parse(process.argv);
}
exports.registerCommand = registerCommand;
