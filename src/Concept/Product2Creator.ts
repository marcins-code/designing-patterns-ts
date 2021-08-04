import {ProductInterface} from "./ProductInterface";
import {Product2} from "./Product2";
import {Creator} from "./Creator";

export class Product2Creator extends Creator {

    factoryMethod(): ProductInterface {
        return new Product2();
    }
}


