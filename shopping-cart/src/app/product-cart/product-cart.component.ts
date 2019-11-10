import { Order } from './../order-history.service';
import { Product } from './../products/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  displayedColumns: string[] = ['Select', 'ProductName', 'Price', 'ProductType'];
  buyProductList: Product[];
  productsInCart: Product[];
  selection = new SelectionModel<Product>(true, []);
  order: Order = {
    id: 1, products: [{
      producttype: "", id: 1, name: "", actualPrice: 1, image: "", description: ""
      , position: 1, count: 1, offerPrice: 1
    }]
  };
  orderId = 104;

  constructor(private productsService: ProductsService) {

  }
  ngOnInit() {
    this.getProductCart();
  }

  getProductCart(): void {
    this.productsService.getCartList()
      .subscribe(products => this.productsInCart = products);
  }

  buyProducts(): void {
    this.orderId = this.orderId  + 1;
    this.order.id = this.orderId;
    this.order.products = this.selection.selected;
    this.productsService.buyProducts(this.order);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.productsInCart.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.productsInCart.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Product): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return 55;
  }
}
