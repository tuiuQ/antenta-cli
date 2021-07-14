"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const art_template_1 = __importDefault(require("art-template"));
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
function addRouter() {
    try {
        const content = art_template_1.default(path_1.join(__dirname, '../../templates', 'router.ts'), {});
        const dest = `src/router/index.ts`;
        fs_extra_1.outputFileSync(dest, content);
    }
    catch (err) {
        throw err;
    }
}
exports.default = addRouter;
