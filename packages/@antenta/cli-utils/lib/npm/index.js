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
exports.getNpmLastSemverVersion = exports.getLastSemverVersion = exports.getVersions = exports.getLastVersion = exports.getNpmInfo = exports.getNpmRegistry = void 0;
var url_join_1 = __importDefault(require("url-join"));
var axios_1 = __importDefault(require("axios"));
var log_1 = __importDefault(require("../log"));
var semver_1 = __importDefault(require("semver"));
/**
 * 获取registry
 * @param {Boolean} isOriginal [是否原生镜像源]
 * @returns {String} [返回镜像源]
 */
function getNpmRegistry(isOriginal) {
    if (isOriginal === void 0) { isOriginal = false; }
    return isOriginal ? 'https://registry.npmjs.org' : 'https://registry.npm.taobao.org';
}
exports.getNpmRegistry = getNpmRegistry;
/**
 * 根据registy获取npm信息
 * @param {String} npm [包名]
 * @param {String} registry
 */
function getNpmInfo(npm, registry) {
    return __awaiter(this, void 0, void 0, function () {
        var register, url, response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    register = registry || getNpmRegistry();
                    url = url_join_1.default(register, npm);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get(url)];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, Promise.resolve(response.data)];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, Promise.reject(e_1)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getNpmInfo = getNpmInfo;
/**
 * 获取npm包的最新版号
 * @param {String} npm [包名]
 * @param {String} registry
 */
function getLastVersion(npm, registry) {
    return __awaiter(this, void 0, void 0, function () {
        var info, latestVersion, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getNpmInfo(npm, registry)];
                case 1:
                    info = _a.sent();
                    if (!info['dist-tags'] || !info['dist-tags'].latest) {
                        log_1.default.error('没有latest版本号', info.name);
                        // return Promise.reject(new Error('Error：没有latest版本'))
                    }
                    latestVersion = info['dist-tags'].latest;
                    return [2 /*return*/, Promise.resolve(latestVersion)];
                case 2:
                    e_2 = _a.sent();
                    return [2 /*return*/, Promise.reject(e_2)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getLastVersion = getLastVersion;
/**
 * 获取npm的所有版本
 */
function getVersions(npm, registry) {
    return __awaiter(this, void 0, void 0, function () {
        var info, versions, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getNpmInfo(npm, registry)];
                case 1:
                    info = _a.sent();
                    versions = Object.keys(info.versions);
                    return [2 /*return*/, Promise.resolve(versions)];
                case 2:
                    e_3 = _a.sent();
                    return [2 /*return*/, Promise.reject(new Error(e_3))];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getVersions = getVersions;
/**
 * 根据指定的版本号获取semver规范的最新版本
 * @param {String} baseVersion
 * @param {Array<String>} versions
 * @returns {String}
 */
function getLastSemverVersion(baseVersion, versions) {
    versions = versions
        .filter(function (version) { return semver_1.default.satisfies(version, '^' + baseVersion); })
        .sort(function (a, b) {
        return semver_1.default.gt(b, a);
    });
    return versions[0];
}
exports.getLastSemverVersion = getLastSemverVersion;
/**
 *
 * @param {String} npm
 * @param {String} baseVersion
 * @param {String} registry
 */
function getNpmLastSemverVersion(npm, baseVersion, registry) {
    return __awaiter(this, void 0, void 0, function () {
        var versions, latestVersion, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getVersions(npm, registry)];
                case 1:
                    versions = _a.sent();
                    latestVersion = getLastSemverVersion(baseVersion, versions);
                    return [2 /*return*/, Promise.resolve(latestVersion)];
                case 2:
                    e_4 = _a.sent();
                    return [2 /*return*/, Promise.reject(e_4)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getNpmLastSemverVersion = getNpmLastSemverVersion;
