import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarClientesComponent} from './listar-clientes.component';
//import { HttpClientModule } from "@angular/common/http";


const routes: Routes = [
  {
    path: '',
    component: ListarClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarClientesRoutingModule { }
