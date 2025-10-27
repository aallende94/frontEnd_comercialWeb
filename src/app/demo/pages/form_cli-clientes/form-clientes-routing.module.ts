import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'registrar',
        loadChildren: () => import('./registrar-clientes/registrar-clientes.module').then(module => module.RegistrarClientesModule)
      },
      {
        path: 'listar',
        loadChildren: () => import('./listar-clientes/listar-clientes.module').then(module => module.ListarClientesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormClientesRoutingModule { }
