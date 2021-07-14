"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveDir = exports.downloadTemplates = void 0;
const util_1 = require("util");
const download_git_repo_1 = __importDefault(require("download-git-repo"));
const fs_extra_1 = require("fs-extra");
const downloadTemplate = util_1.promisify(download_git_repo_1.default);
function downloadTemplates(projectName, tool = 'webpack') {
    return downloadTemplate(`direct:https://gitee.com/tuiu/antenta-cli-template.git#${tool}`, projectName, { clone: true }).then(() => {
        return Promise.resolve(true);
    }).catch((err) => {
        return Promise.reject(err);
    });
}
exports.downloadTemplates = downloadTemplates;
function recursiveDir(sourceDir) {
    const res = [];
    function traverse(dir) {
        fs_extra_1.readdirSync(dir).forEach((file) => {
            const pathname = `${dir}/${file}`;
            const isDir = fs_extra_1.statSync(pathname).isDirectory();
            res.push({
                file: pathname,
                isDir
            });
            if (isDir) {
                traverse(pathname);
            }
        });
    }
    traverse(sourceDir);
    return res;
}
exports.recursiveDir = recursiveDir;
