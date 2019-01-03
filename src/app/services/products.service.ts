import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private products:Product[]=[];
  constructor() {
   let p1=new Product("tv",50,100);
   let p2=new Product("pc",60,70);
   let p3=new Product("xv",80,100);
   this.products.push(p1);
   this.products.push(p2);
   this.products.push(p3);


   }
  getProducts(){
    return this.products;
  }
}
