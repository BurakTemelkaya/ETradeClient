import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { HomeModule } from '../home/home.module';
import { BasketsModule } from '../baskets/baskets.module';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    HomeModule,
    BasketsModule
  ]
})
export class ProductsModule { }
