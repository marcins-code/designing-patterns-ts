"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product1Creator_1 = require("./Concept/Product1Creator");
function clintCode(creator) {
    console.log(creator.creatorMethod());
}
clintCode(new Product1Creator_1.Product1Creator());
