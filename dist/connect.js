"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var withMobx_1 = require("./withMobx");
exports.default = (function (model) {
    return function (view) {
        return withMobx_1.default(model)(view);
    };
});
//# sourceMappingURL=connect.js.map