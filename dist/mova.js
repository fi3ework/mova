"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as warning from 'warning'
var invariant = require("invariant");
// import * as PropTypes from 'prop-types'
var globalStore_1 = require("./globalStore");
var Mova = /** @class */ (function () {
    function Mova() {
        var _this = this;
        this.model = function (options) {
            var type = options.type, namespace = options.namespace, state = options.state;
            // TODO: better code needed
            if (['global', 'route', 'local'].indexOf(type) < 0) {
                throw Error("[mova]: not invalid state type, type only support 'global', 'route' and 'local'");
            }
            switch (type) {
                case 'global':
                    invariant(namespace, "[mova]: not invalid state type, type only support 'global', 'route' and 'local'");
                    _this.addToGlobalState(namespace, state);
                    break;
                case 'route':
                    _this.initRouteState(state);
                case 'local':
                    _this.initLocalState(state);
                    break;
            }
            return _this;
        };
        this.addToGlobalState = function (namespace, state) {
            globalStore_1.gStore.addNamespace(namespace, state);
        };
        this.initRouteState = function (state) { };
        this.initLocalState = function (state) {
            _this._state = state;
        };
    }
    Object.defineProperty(Mova.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    return Mova;
}());
var createMovaModel = function (options) {
    return new Mova();
};
exports.createMovaModel = createMovaModel;
//# sourceMappingURL=mova.js.map