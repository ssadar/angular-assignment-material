import { ProductCartComponent } from './product-cart/product-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'orderHistory', component: OrderComponent },
  { path: 'productCart', component: ProductCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [ProductsComponent, OrderComponent];
