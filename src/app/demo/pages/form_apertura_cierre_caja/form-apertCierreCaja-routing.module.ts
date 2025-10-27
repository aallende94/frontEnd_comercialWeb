import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'aperturaCaja',
        loadChildren: () => import('./apertura-caja/aperturaCaja.module').then(module => module.AperturaCajaModule)
      },
      {
        path: 'cierreCaja',
        loadChildren: () => import('./cierre-caja/cierreCaja.module').then(module => module.CierreCajaModule)
      },
      {
        path: 'estadoCaja',
        loadChildren: () => import('./estado-caja/estadoCaja.module').then(module => module.EstadoCajaModule)
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormApertCierreCajaRoutingModule { }
