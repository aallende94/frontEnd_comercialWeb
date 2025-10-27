import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarProductosComponent} from './listar-productos.component';
//import { HttpClientModule } from "@angular/common/http";


const routes: Routes = [
  {
    path: '',
    component: ListarProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarProductosRoutingModule { }
