"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const create_1 = __importDefault(require("./actions/create"));
const program = new commander_1.Command("an-cli");
program
    .command('create <projectName>')
    .description("创建项目")
    .option('-t --tool [value]', '选择构建工具', 'webpack')
    .option('-i --install', '是否安装依赖', false)
    .option('-pt --pkg-tool [value]', '选择要使用的包管理工具')
    .option('-l --library [value...]', '依赖')
    .action(create_1.default);
program
    .version(require('../package.json').version)
    .parse(process.argv);
