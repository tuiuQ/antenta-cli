"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryQues = exports.pkgToolQues = exports.installQues = exports.libraryInfo = void 0;
const addRouter_1 = __importDefault(require("./actions/addRouter"));
exports.libraryInfo = [
    {
        name: 'vue-router',
        version: '^4.0.10',
        alias: 'router',
        generate: addRouter_1.default
    },
    {
        name: 'vuex',
        version: '^4.0.2',
        alias: 'vuex'
    },
    {
        name: 'axios',
        version: '^0.21.1',
        alias: 'http'
    },
    {
        name: 'element-plus',
        version: '^1.0.2-beta.55',
        alias: 'ElementPlus'
    }
];
exports.installQues = {
    type: 'confirm',
    name: 'install',
    default: false,
    message: '是否安装依赖?'
};
exports.pkgToolQues = {
    type: 'list',
    name: 'pkgTool',
    choices: ['npm', 'yarn'],
    default: 'npm',
    message: 'npm or yarn ？'
};
exports.libraryQues = {
    type: 'checkbox',
    name: 'library',
    choices: exports.libraryInfo,
    message: "请选择安装的依赖"
};
