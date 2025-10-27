import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrarProductosComponent} from './registrar-productos.component';
//import { HttpClientModule } from "@angular/common/http";


const routes: Routes = [
  {
    path: '',
    component: RegistrarProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarProductosRoutingModule { }
