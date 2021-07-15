"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.script = exports.clean = void 0;
var del_1 = __importDefault(require("del"));
var gulp_1 = require("gulp");
var gulp_typescript_1 = __importDefault(require("gulp-typescript"));
var Dir = 'lib';
function clean() {
    return del_1.default(Dir);
}
exports.clean = clean;
function script() {
    return gulp_1.src('./src/**/*.ts', { base: 'src' })
        .pipe(gulp_typescript_1.default.createProject('tsconfig.json')())
        .pipe(gulp_1.dest(Dir));
}
exports.script = script;
