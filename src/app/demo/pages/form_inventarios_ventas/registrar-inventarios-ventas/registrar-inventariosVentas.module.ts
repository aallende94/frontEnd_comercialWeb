import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { RegistrarInventariosVentasRoutingModule } from './registrar-inventariosVentas-routing.module';
import { RegistrarInventariosVentasComponent } from './registrar-inventariosVentas.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RegistrarInventariosVentasRoutingModule,
    SharedModule,
    NgbDropdownModule,
    HttpClientModule
  ],
  declarations: [RegistrarInventariosVentasComponent]
})
export class RegistrarVentasModule { }
