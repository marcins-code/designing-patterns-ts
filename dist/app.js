"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product2Creator_1 = require("./Concept/Product2Creator");
var Product1Creator_1 = require("./Concept/Product1Creator");
function clintCode(creator) {
    console.log(creator.creatorMethod());
}
clintCode(new Product1Creator_1.Product1Creator());
clintCode(new Product2Creator_1.Product2Creator());
