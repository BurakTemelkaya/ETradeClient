import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/compenents/home/home.component';

const routes: Routes = [
  {
    path:"admin",component:LayoutComponent,children:[
    {path:"",component:DashboardComponent},
      {
        path: "dashboard", loadChildren: () => import("./admin/components/dashboard/dashboard.module").then
     (module=> module.DashboardModule)},
      {
        path: "customers", loadChildren: () => import("./admin/components/customer/customer.module").then
     (module=> module.CustomerModule)},
      {
        path: "products", loadChildren: () => import("./admin/components/products/products.module").then
     (module=> module.ProductsModule)},
     {path:"orders", loadChildren: ()=> import("./admin/components/order/order.module").then
     (module=> module.OrderModule)}
    ]
  },
  {path:"",component:HomeComponent},
  {path:"basket",loadChildren:()=> import("./ui/compenents/baskets/baskets.module").then(module=> module.BasketsModule)},
  {path:"products",loadChildren:()=> import("./ui/compenents/products/products.module").then(module=> module.ProductsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
