"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (name, options) {
    var basePath = "views";
    var trueName = name;
    var data = name.split('/');
    if (data.length > 1) {
        trueName = data.pop();
        basePath = data.join('/');
    }
    console.log(trueName);
    console.log(basePath);
});
