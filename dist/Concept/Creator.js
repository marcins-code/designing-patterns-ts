"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creator = void 0;
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.creatorMethod = function () {
        var product = this.factoryMethod();
        return " From creator " + product.productOperation();
    };
    return Creator;
}());
exports.Creator = Creator;
