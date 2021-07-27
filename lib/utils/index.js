"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasYarn = exports.recursiveDir = void 0;
var execa_1 = __importDefault(require("execa"));
var fs_extra_1 = require("fs-extra");
function recursiveDir(sourceDir) {
    var res = [];
    function traverse(dir) {
        fs_extra_1.readdirSync(dir).forEach(function (file) {
            var pathname = dir + "/" + file;
            var isDir = fs_extra_1.statSync(pathname).isDirectory();
            res.push({ file: pathname, isDir: isDir });
            if (isDir) {
                traverse(pathname);
            }
        });
    }
    traverse(sourceDir);
    return res;
}
exports.recursiveDir = recursiveDir;
function hasYarn() {
    try {
        execa_1.default.commandSync('yarn -v', { stdio: 'ignore' });
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.hasYarn = hasYarn;
