import {ProductInterface} from "./ProductInterface";


export abstract class Creator {

        public abstract factoryMethod(): ProductInterface

        public creatorMethod() {
            const product = this.factoryMethod();

            return " From creator " + product.productOperation();
        }
    }


