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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ora_1 = __importDefault(require("ora"));
const chalk_1 = __importDefault(require("chalk"));
const lodash_1 = require("lodash");
const art_template_1 = __importDefault(require("art-template"));
const utils_1 = require("../utils");
const fs_extra_1 = require("fs-extra");
const inquirer_1 = __importDefault(require("inquirer"));
const inquirer_2 = require("../inquirer");
function default_1(projectName, options) {
    const spinner = ora_1.default(chalk_1.default.blue('开始下载模版...\n')).start();
    utils_1.downloadTemplates(projectName).then(() => __awaiter(this, void 0, void 0, function* () {
        spinner.succeed(chalk_1.default.green('下载成功'));
        spinner.start(chalk_1.default.blue('初始化模版...\n'));
        const allFiles = utils_1.recursiveDir(projectName);
        lodash_1.partition(allFiles, 'isDir')[1].forEach(item => {
            const cwd = `${process.cwd()}/${item.file}`;
            if (!/\.(jpg|png|gif|woff)$/.test(item.file)) {
                try {
                    const content = art_template_1.default(cwd, {
                        projectName,
                        name: projectName
                    });
                    let dest = item.file;
                    if (dest.includes('.art')) {
                        fs_extra_1.unlinkSync(dest);
                        dest = dest.replace(/\.art/, '');
                    }
                    fs_extra_1.writeFileSync(dest, content);
                }
                catch (err) {
                    spinner.fail(chalk_1.default.red('非法模版，请切换模版'));
                }
            }
        });
        spinner.succeed(chalk_1.default.green('初始化模版成功\n'));
        const cwd = './' + projectName;
        if (options.install) {
            yield utils_1.installPkg(options.pkgTool, cwd);
        }
        else {
            const answers = yield inquirer_1.default.prompt([
                inquirer_2.libraryQues,
                inquirer_2.installQues,
                Object.assign(Object.assign({}, inquirer_2.pkgToolQues), { when(currentAnswers) {
                        return currentAnswers.install && !options.pkgTool;
                    } })
            ]);
            answers.library.forEach((item) => {
                utils_1.addLibrary(item, cwd);
            });
            utils_1.generateMain(answers.library, cwd);
            if (answers.install) {
                yield utils_1.installPkg(answers.pkgTool || options.pkgTool, cwd);
            }
            else {
                spinner.succeed(chalk_1.default.green("项目创建成功\n"));
            }
        }
    })).catch(err => {
        spinner.fail(chalk_1.default.red('创建项目失败\n'));
        throw err;
    });
}
exports.default = default_1;
