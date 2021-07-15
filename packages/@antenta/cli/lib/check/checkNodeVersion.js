"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const semver_1 = __importDefault(require("semver"));
const cli_utils_1 = require("@antenta/cli-utils");
const package_json_1 = __importDefault(require("../../package.json"));
exports.default = () => {
    if (!semver_1.default.satisfies(process.version, package_json_1.default.engines.node, { includePrerelease: true })) {
        cli_utils_1.log.info('NodeJS', `你的NodeJS版本为${process.version}，但是antenta-cli需要${package_json_1.default.engines.node}`);
    }
};
