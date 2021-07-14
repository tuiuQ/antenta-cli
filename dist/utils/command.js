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
exports.exec = exports.installPkg = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const inquirer_2 = require("../inquirer");
const ora_1 = __importDefault(require("ora"));
const chalk_1 = __importDefault(require("chalk"));
const execa_1 = __importDefault(require("execa"));
function installPkg(pkgTool, cwd) {
    return __awaiter(this, void 0, void 0, function* () {
        let tool = pkgTool;
        if (!tool) {
            const answers = yield inquirer_1.default.prompt([
                inquirer_2.libraryQues,
                inquirer_2.pkgToolQues
            ]);
            tool = answers.pkgTool;
        }
        const spinner = ora_1.default(chalk_1.default.blue('正在安装依赖...\n')).start();
        yield exec(`${tool} install`, { cwd });
        spinner.succeed(chalk_1.default.green("项目创建成功\n"));
    });
}
exports.installPkg = installPkg;
function exec(command, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const subProcess = execa_1.default.command(command, options);
            subProcess.stdout.pipe(process.stdout);
            subProcess.stdout.on('close', resolve);
            subProcess.stdout.on('error', reject);
        });
    });
}
exports.exec = exec;
