"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkNodeVersion_1 = __importDefault(require("./checkNodeVersion"));
const checkPkgVersion_1 = __importDefault(require("./checkPkgVersion"));
exports.default = async () => {
    // 检查当前运行的版本
    checkPkgVersion_1.default();
    // 检查 node 版本
    checkNodeVersion_1.default();
    // 检查是否为 root 启动
    // 检查用户主目录
    // 检查用户输入参数
    // 检查环境变量
    // 检查工具是否需要更新
};
