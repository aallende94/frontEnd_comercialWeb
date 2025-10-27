import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/signin',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'clientes',
        loadChildren: () => import('./demo/pages/form_cli-clientes/form-clientes.module').then(module => module.FormClientesModule)
       },
      {
        path: 'productos',
        loadChildren: () => import('./demo/pages/form_prod-productos/form-productos.module').then(m => m.FormProductosModule)
      },
      {
        path: 'aperturaCierreCaja',
        loadChildren: () => import('./demo/pages/form_apertura_cierre_caja/form-apertCierreCaja.module').then(m => m.FormApertCierreCajaModule)
      },
      {
        path: 'ventas',
        loadChildren: () => import('./demo/pages/form_ventas/form-ventas.module').then(m => m.FormVentasModule)
      },
      {
        path: 'inventariosVentas',
        loadChildren: () => import('./demo/pages/form_inventarios_ventas/form-inventariosVentas.module').then(m => m.FormInventariosVentasModule)
      },
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      }
    ]
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
