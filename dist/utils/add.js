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
exports.generateMain = exports.addLibrary = void 0;
const fs_1 = require("fs");
const inquirer_1 = require("../inquirer");
const fs_extra_1 = require("fs-extra");
const string_1 = __importDefault(require("json-templater/string"));
const lodash_1 = require("lodash");
const os_1 = require("os");
const templater_1 = __importDefault(require("../../templates/templater"));
function addLibrary(library, projectName) {
    return __awaiter(this, void 0, void 0, function* () {
        const cwd = `${projectName}/package.json`;
        const content = fs_1.readFileSync(cwd, 'utf-8');
        const pkg = JSON.parse(content);
        const lib = inquirer_1.libraryInfo.filter(item => item.name === library)[0];
        pkg.dependencies[library] = lib.version;
        lib.generate();
        fs_extra_1.writeFileSync(cwd, JSON.stringify(pkg, null, "\t"));
    });
}
exports.addLibrary = addLibrary;
function generateMain(libraries, projectName) {
    const cwd = `${projectName}/src/index.ts`;
    const importTemplate = [];
    const useTemplate = [];
    libraries.forEach(library => {
        importTemplate.push(string_1.default(templater_1.default.IMPORT_TEMPLATE, {
            name: inquirer_1.libraryInfo.filter(item => item.name === library)[0].alias,
            package: lodash_1.kebabCase(inquirer_1.libraryInfo.filter(item => item.name === library)[0].alias)
        }));
        useTemplate.push(string_1.default(templater_1.default.USE_TEMPLATE, {
            name: inquirer_1.libraryInfo.filter(item => item.name === library)[0].alias
        }));
    });
    const main = string_1.default(templater_1.default.MAIN_TEMPLATE, {
        import: importTemplate.join(os_1.EOL),
        use: useTemplate.join(os_1.EOL)
    });
    fs_extra_1.writeFileSync(cwd, main);
}
exports.generateMain = generateMain;
