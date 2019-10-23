import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OrderHistoryService, Order } from '../order-history.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  orders: Order[];
  constructor(private service: OrderHistoryService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.service.getOrdersHistory().subscribe(products => this.orders = products);

  }

}
