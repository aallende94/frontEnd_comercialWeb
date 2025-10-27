import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EstadoCajaComponent} from './estadoCaja.component';

const routes: Routes = [
  {
    path: '',
    component: EstadoCajaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoCajaRoutingModule { }
