import { Injectable } from '@angular/core';
import {ProductsCollection} from "../../../both/collections/products-collection";
import {MeteorObservable} from "angular2-meteor/dist/index";
import {Product} from "../../../both/models/product-object";

@Injectable()
export class ProductsService {
  constructor() {}

  public subscribeProducts() {
    return MeteorObservable.subscribe("products");
  }

  public addProduct(product : Product) {
    return MeteorObservable.call("addProduct", product);
  }

  public getProducts() {
    return ProductsCollection.find({});
  }
}