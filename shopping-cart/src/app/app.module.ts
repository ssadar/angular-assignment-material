import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,RoutingComponent  } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RoutingComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    ],
  providers: [HttpClient, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
