import { Order } from './order-history.service';
import { Injectable } from '@angular/core';
import { Product } from './products/product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productServiceUrl = 'http://localhost:3000/products';
  private orderServiceUrl = 'http://localhost:3000/orders';

  cartArray = [];
  idArray = [];

  constructor(
    private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productServiceUrl);
  }
  buyProducts(order: Order) {
    return this.http.post(this.orderServiceUrl, order).subscribe();
  }


  addToCart(product: Product): Observable<Product[]> {

    if (this.cartArray.length == 0) {
      this.cartArray.push(product);
    }

    for (var i = 0; i < this.cartArray.length; i++) {
      if (this.idArray.indexOf(this.cartArray[i].id) == -1) {
        this.idArray.push(this.cartArray[i].id)
      }
    }

    if (this.idArray.indexOf(product.id) == -1) {
      console.log("item successfully got pushed to idArray", this.idArray);
      product.count = product.count + 1;
      this.cartArray.push(product);
    } else {
      for (var i = 0; i < this.cartArray.length; i++) {
        if (this.cartArray[i].id == product.id) {
          this.cartArray[i].count = this.cartArray[i].count + 1;
        }
      }
    }
    console.log("cartArray after push", this.cartArray);
    return of(this.cartArray);
  }

  getCartList(): Observable<Product[]> {
    return of(this.cartArray);
  }
}
