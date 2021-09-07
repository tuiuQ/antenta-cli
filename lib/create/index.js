"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clear_1 = __importDefault(require("clear"));
var inquirer_1 = __importDefault(require("../utils/inquirer"));
var ora_1 = __importDefault(require("ora"));
var colors_1 = __importDefault(require("colors"));
var util_1 = require("util");
var download_git_repo_1 = __importDefault(require("download-git-repo"));
var utils_1 = require("../utils");
var lodash_1 = require("lodash");
var art_template_1 = __importDefault(require("art-template"));
var fs_extra_1 = require("fs-extra");
var exec_1 = __importDefault(require("../utils/exec"));
var spinner = ora_1.default();
function create(projectName, options) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, isInstall, tool, pkgTool, cwd;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    clear_1.default();
                    console.log(colors_1.default.blue(' Antenta CLI'));
                    return [4, prepare(projectName, options)];
                case 1:
                    _a = _b.sent(), isInstall = _a.isInstall, tool = _a.tool, pkgTool = _a.pkgTool;
                    cwd = './' + projectName;
                    if (isInstall) {
                        installTemplate(pkgTool, cwd);
                    }
                    return [2];
            }
        });
    });
}
function prepare(projectName, options) {
    return __awaiter(this, void 0, void 0, function () {
        var isInstall, _a, tool, _b, pkgTool, _c, allFiles;
        var _this = this;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = (options === null || options === void 0 ? void 0 : options.install);
                    if (_a) return [3, 2];
                    return [4, inquirer_1.default({
                            type: 'confirm',
                            message: '是否自动安装依赖?',
                            default: false
                        })];
                case 1:
                    _a = (_d.sent());
                    _d.label = 2;
                case 2:
                    isInstall = _a;
                    _b = (options === null || options === void 0 ? void 0 : options.tool);
                    if (_b) return [3, 4];
                    return [4, inquirer_1.default({
                            type: 'list',
                            message: '选择构建工具',
                            choices: [
                                {
                                    name: 'Webpack-tsx',
                                    value: 'webpack-tsx'
                                },
                                {
                                    name: 'Webpack-tsx-quan',
                                    value: 'webpack-tsx-quan'
                                },
                                {
                                    name: 'ts',
                                    value: 'ts'
                                }
                            ],
                            default: 'webpack-tsx'
                        })];
                case 3:
                    _b = (_d.sent());
                    _d.label = 4;
                case 4:
                    tool = _b;
                    _c = (options === null || options === void 0 ? void 0 : options.packageTool);
                    if (_c) return [3, 6];
                    return [4, inquirer_1.default({
                            type: 'list',
                            message: '选择包管理工具',
                            choices: ['yarn', 'npm'],
                            default: 'npm'
                        })];
                case 5:
                    _c = (_d.sent());
                    _d.label = 6;
                case 6:
                    pkgTool = _c;
                    spinner.start('拉取模版中...');
                    return [4, downloadTemplate(projectName, tool)];
                case 7:
                    _d.sent();
                    allFiles = utils_1.recursiveDir(projectName);
                    spinner.start('初始化模版中...');
                    lodash_1.partition(allFiles, 'isDir')[1].forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                        var content, dest;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    content = art_template_1.default(process.cwd() + '/' + item.file, { projectName: projectName });
                                    dest = item.file;
                                    if (dest.includes('.art')) {
                                        fs_extra_1.unlinkSync(dest);
                                        dest = dest.replace(/\.art/, '');
                                    }
                                    console.log(dest);
                                    return [4, fs_extra_1.writeFile(dest, content)];
                                case 1:
                                    _a.sent();
                                    return [2];
                            }
                        });
                    }); });
                    spinner.succeed('初始化模版成功');
                    return [2, {
                            isInstall: isInstall,
                            tool: tool,
                            pkgTool: pkgTool
                        }];
            }
        });
    });
}
function installTemplate(pkgTool, cwd) {
    return __awaiter(this, void 0, void 0, function () {
        var tool;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tool = pkgTool;
                    if (!!tool) return [3, 2];
                    return [4, inquirer_1.default({
                            type: 'list',
                            choices: ['npm', 'yarn'],
                            default: 'npm',
                            message: 'npm or yarn ?'
                        })];
                case 1:
                    tool = (_a.sent());
                    _a.label = 2;
                case 2:
                    if (!(tool === 'yarn' && !utils_1.hasYarn())) return [3, 3];
                    console.log(colors_1.default.red('请先安装yarn'));
                    return [3, 5];
                case 3:
                    spinner.start(colors_1.default.blue('正在安装依赖...'));
                    return [4, exec_1.default(tool + " install", { cwd: cwd })];
                case 4:
                    _a.sent();
                    spinner.succeed(colors_1.default.green('项目创建成功'));
                    _a.label = 5;
                case 5: return [2];
            }
        });
    });
}
function downloadTemplate(projectName, branch) {
    return __awaiter(this, void 0, void 0, function () {
        var clone, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clone = util_1.promisify(download_git_repo_1.default);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, clone("direct:https://gitee.com/tuiu/antenta-cli-template.git#" + branch, projectName, { clone: true })];
                case 2:
                    _a.sent();
                    spinner.succeed('拉取模版成功');
                    return [3, 4];
                case 3:
                    e_1 = _a.sent();
                    throw new Error(e_1);
                case 4: return [2];
            }
        });
    });
}
exports.default = create;
