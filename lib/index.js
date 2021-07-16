"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const package_json_1 = __importDefault(require("../package.json"));
const create_1 = __importDefault(require("./actions/create"));
const program = new commander_1.Command('an-cli');
program
    .version(`an-cli v${package_json_1.default.version}`)
    .usage(`create <projectName> [options] `);
program
    .command('create <projectName>')
    .description("创建新项目")
    .option('-i, --install', '是否自动安装依赖', false)
    .option('-pt, --package-tool [value]', '选择构建的包管理工具(默认是npm)', 'npm')
    .action(create_1.default);
program.parse(process.argv);
