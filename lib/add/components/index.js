"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var art_template_1 = __importDefault(require("art-template"));
var fs_extra_1 = require("fs-extra");
var lodash_1 = require("lodash");
var path_1 = require("path");
var colors_1 = __importDefault(require("colors"));
exports.default = (function (name, options) {
    var basePath = 'components';
    var trueName = name;
    var data = name.split('/');
    if (data.length > 1) {
        trueName = data.pop();
        basePath = data.join('/');
    }
    var suffix = '.vue';
    if (options.tsx) {
        suffix = '.tsx';
    }
    try {
        var content = art_template_1.default(path_1.join(__dirname, '../../../templates', 'component' + suffix), { name: trueName, rootCls: lodash_1.kebabCase(trueName) });
        var dest = "src/" + basePath + "/" + trueName + suffix;
        fs_extra_1.outputFileSync(dest, content);
        console.log(colors_1.default.green('创建成功>>> ' + dest));
    }
    catch (e) {
        console.log(colors_1.default.red('创建失败'));
        throw e;
    }
});
