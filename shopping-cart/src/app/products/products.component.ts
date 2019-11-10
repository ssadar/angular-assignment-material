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

  addToCart(product : Product) {
    console.log("addToCart click item is", product);
    this.productsService.addToCart(product);
  }
  ngOnInit(): void {
    this.getProducts();
  }

}

