"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var Mova = /** @class */ (function () {
    function Mova(model) {
        var _this = this;
        this.bindAction = function (actions, obState) {
            var boundAction = {};
            Object.keys(actions).forEach(function (actProp) {
                var act = actions[actProp];
                boundAction[actProp] = mobx_1.action(function () { return act(obState); });
            });
            return boundAction;
        };
        this.makeStateObservable = function (oriState) {
            return mobx_1.observable.object(oriState);
        };
        this.makeComputed = function (obState) {
            return mobx_1.computed(function () {
                return _this.model.computed(obState);
            });
        };
        this.model = model;
        var obState = this.makeStateObservable(model.state);
        var obComputed = this.makeComputed(obState);
        var boundAction = this.bindAction(model.action, obState);
        this.obModel = { obState: obState, obComputed: obComputed, boundAction: boundAction };
    }
    return Mova;
}());
exports.default = Mova;
//# sourceMappingURL=mova.js.map