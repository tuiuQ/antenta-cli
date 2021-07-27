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
exports.check = void 0;
var log_1 = __importDefault(require("../log"));
var package_json_1 = __importDefault(require("../../../package.json"));
var semver_1 = __importDefault(require("semver"));
var colors_1 = __importDefault(require("colors"));
var npm_1 = require("../npm");
function check() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkPkgVersion();
                    checkNodeVersion();
                    return [4, checkGlobalUpdate()];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
}
exports.check = check;
function checkGlobalUpdate() {
    return __awaiter(this, void 0, void 0, function () {
        var currentVersion, name, latestVersion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentVersion = package_json_1.default.version;
                    name = package_json_1.default.name;
                    return [4, npm_1.getNpmLastVersion(currentVersion, name)];
                case 1:
                    latestVersion = _a.sent();
                    if (latestVersion && semver_1.default.gt(latestVersion, currentVersion)) {
                        log_1.default.warn('更新提醒', colors_1.default.yellow(name + "\u53EF\u66F4\u65B0\uFF0C\u5F53\u524D\u7248\u672C\u4E3A" + currentVersion + "\uFF0C\u6700\u65B0\u7248\u672C\u4E3A" + latestVersion));
                    }
                    return [2];
            }
        });
    });
}
function checkNodeVersion() {
    log_1.default.notice('NodeJS', process.version);
    if (!semver_1.default.satisfies(process.version, package_json_1.default.engines.node)) {
        throw new Error(colors_1.default.red("node\u7248\u672C\u89C4\u5B9A\u4E3A" + package_json_1.default.engines.node + "\uFF0C\u4F60\u5F53\u524D\u7248\u672C\u4E3A" + process.version));
    }
}
function checkPkgVersion() {
    log_1.default.success('欢迎使用Antenta-CLI脚手架');
    log_1.default.notice('Antenta-CLI', "v" + package_json_1.default.version);
}
