"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalStore = /** @class */ (function () {
    function GlobalStore() {
        var _this = this;
        this.addNamespace = function (namespace, state) {
            if (!_this.hasNamespace(namespace)) {
                _this[namespace] = state;
            }
            else {
                console.warn("[mova]: " + namespace + " is already exist, and it will be replaced by a new state");
            }
        };
        this.hasNamespace = function (namespace) {
            return Object.keys(_this).indexOf(namespace) >= 0;
        };
    }
    return GlobalStore;
}());
exports.GlobalStore = GlobalStore;
var gStore = new GlobalStore();
exports.gStore = gStore;
//# sourceMappingURL=globalStore.js.map