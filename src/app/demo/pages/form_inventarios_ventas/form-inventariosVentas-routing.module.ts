import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'registrar',
        loadChildren: () => import('./registrar-inventarios-ventas/registrar-inventariosVentas.module').then(module => module.RegistrarVentasModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormInventariosVentasRoutingModule { }
