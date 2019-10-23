import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const HEADER = { headers: new HttpHeaders({ 'Authentication': 'AFDSSASDF123512' }) };

export interface Order {
  id: Number,
  products: [{
    id: Number,
    price: Number,
    name: String,
    desc: String,
    img: String
  }]
}

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor(private http: HttpClient) { }
  getOrdersHistory() {
    return this.http.get<Order[]>('http://localhost:4000/orders');

  }


}
