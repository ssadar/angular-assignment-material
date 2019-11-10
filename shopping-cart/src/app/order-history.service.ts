import { Product } from './products/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Order {
  id: Number;
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor(private http: HttpClient) { }
  getOrdersHistory() {
    return this.http.get<Order[]>('http://localhost:3000/orders');

  }


}
