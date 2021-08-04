"use strict";
// import {Creator} from "./Creator";
// import {ProductInterface} from "./ProductInterface";
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
exports.Product1Creator = void 0;
var Creator_1 = require("./Creator");
var Product1_1 = require("./Product1");
var Product1Creator = /** @class */ (function (_super) {
    __extends(Product1Creator, _super);
    function Product1Creator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Product1Creator.prototype.factoryMethod = function () {
        return new Product1_1.Product1();
    };
    return Product1Creator;
}(Creator_1.Creator));
exports.Product1Creator = Product1Creator;
