import { Injectable } from '@angular/core';
import { Product } from './products/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productServiceUrl = 'http://localhost:3000/products';

  constructor(
    private http : HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productServiceUrl);
  }
}
