import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { FormInventariosVentasRoutingModule } from './form-inventariosVentas-routing.module';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormInventariosVentasRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: []
})

export class FormInventariosVentasModule { }
