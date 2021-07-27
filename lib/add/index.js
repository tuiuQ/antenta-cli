"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = __importDefault(require("./components"));
var directives_1 = __importDefault(require("./directives"));
var commander_1 = require("commander");
var generate = new commander_1.Command('add');
generate
    .command('c <name>')
    .description('添加组件')
    .option('-t, --tsx', '是否使用tsx')
    .action(components_1.default);
generate
    .command('d <name>')
    .description('添加指令')
    .option('-t, --tsx', '是否使用tsx')
    .action(directives_1.default);
exports.default = generate;
