"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_1 = require("mobx-react");
var React = require("react");
function withMobx(model, mapModelProps) {
    return function (ComposedComponent) {
        var HOC = /** @class */ (function (_super) {
            __extends(HOC, _super);
            function HOC() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // private hasInited: boolean = false
            HOC.prototype.componentWillReact = function () {
                console.log('will react');
                // React.Component.prototype.forceUpdate.call(this)
            };
            HOC.prototype.basePreRender = function () {
                var propObj = mapModelProps(model);
                this.injectedProps = propObj;
                Object.keys(propObj).forEach(function (prop) {
                    /* tslint:disable */
                    var _value = propObj[prop];
                    console.log(_value);
                });
            };
            HOC.prototype.render = function () {
                console.log('will re-render');
                console.log('init render');
                this.basePreRender();
                // this.hasInited = true
                // TODO: add merge conflict in dev mode
                return React.createElement(ComposedComponent, __assign({}, this.props, this.injectedProps));
            };
            HOC = __decorate([
                mobx_react_1.observer
            ], HOC);
            return HOC;
        }(React.Component));
        return HOC;
    };
}
exports.default = withMobx;
//# sourceMappingURL=withMobx.js.map