// import {Creator} from "./Creator";
// import {ProductInterface} from "./ProductInterface";

import {Creator} from "./Creator";
import {ProductInterface} from "./ProductInterface";
import {Product1} from "./Product1";

export class Product1Creator extends Creator {

        factoryMethod(): ProductInterface {
            return new Product1();
        }

    }

