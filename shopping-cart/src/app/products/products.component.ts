import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];


  constructor(private productsService: ProductsService) {

  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products);
  }
  ngOnInit(): void {
    this.getProducts();
  }

}

