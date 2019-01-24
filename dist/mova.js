"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var Mova = /** @class */ (function () {
    function Mova(model) {
        var _this = this;
        // public model = (options: IModel) => {
        //   this.model =
        // const { type, namespace, state } = options
        // TODO: better code needed
        // if (['global', 'route', 'local'].indexOf(type) < 0) {
        //   throw Error(`[mova]: not invalid state type, type only support 'global', 'route' and 'local'`)
        // }
        // switch (type) {
        //   case 'global':
        //     invariant(namespace, `[mova]: not invalid state type, type only support 'global', 'route' and 'local'`)
        //     this.addToGlobalState(namespace!, state)
        //     break
        //   case 'route':
        //     this.initRouteState(state)
        //   case 'local':
        //     this.initLocalState(state)
        //     break
        // }
        // return this
        // }
        this.makeStateObservable = function (oriState) {
            return mobx_1.observable.object(oriState);
        };
        this.makeComputed = function (obState) {
            return mobx_1.computed(function () {
                return _this.model.computed(obState);
            });
        };
        this.model = model;
        var obState = this.makeStateObservable(this.model.state);
        var obComputed = this.makeComputed(obState);
        this.obModel = { obState: obState, obComputed: obComputed };
    }
    return Mova;
}());
exports.default = Mova;
//# sourceMappingURL=mova.js.map