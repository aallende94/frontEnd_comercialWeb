import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AperturaCajaComponent} from './aperturaCaja.component';

const routes: Routes = [
  {
    path: '',
    component: AperturaCajaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AperturaCajaRoutingModule { }
