"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product2Creator = void 0;
var Product2_1 = require("./Product2");
var Creator_1 = require("./Creator");
var Product2Creator = /** @class */ (function (_super) {
    __extends(Product2Creator, _super);
    function Product2Creator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Product2Creator.prototype.factoryMethod = function () {
        return new Product2_1.Product2();
    };
    return Product2Creator;
}(Creator_1.Creator));
exports.Product2Creator = Product2Creator;
