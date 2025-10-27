import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'registrar',
        loadChildren: () => import('./registrar-ventas/registrar-ventas.module').then(module => module.RegistrarVentasModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormVentasRoutingModule { }
