import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'registrar',
        loadChildren: () => import('./registrar-productos/registrar-productos.module').then(m => m.RegistrarProductosModule)
      },
      {
        path: 'listar',
        loadChildren: () => import('./listar-productos/listar-productos.module').then(module => module.ListarProductosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarProductosRoutingModule { }
