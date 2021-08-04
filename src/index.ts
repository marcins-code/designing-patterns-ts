// import {ProductInterface} from "./Concept/ProductInterface";
import {Creator} from "./Concept/Creator";
import {Product1Creator} from "./Concept/Product1Creator";

function clintCode(creator: Creator) {

    console.log(creator.creatorMethod());
}

clintCode(new Product1Creator());
