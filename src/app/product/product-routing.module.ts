import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
{path:'product-add',component:ProductAddComponent},
{path:'product-edit',component:ProductEditComponent},
{path:'products-list',component:ProductsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
