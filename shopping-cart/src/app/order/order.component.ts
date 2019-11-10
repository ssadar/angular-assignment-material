import { Component, OnInit } from '@angular/core';
import { OrderHistoryService, Order } from '../order-history.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  displayedColumns: string[] = ['OrderId', 'ProductName', 'Price', 'ProductType'];
  orders: Order[];
  constructor(private service: OrderHistoryService) { }

  ngOnInit() {
    this.service.getOrdersHistory().subscribe(products => this.orders = products);

  }

}
