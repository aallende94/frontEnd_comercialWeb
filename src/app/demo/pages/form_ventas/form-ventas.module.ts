import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { FormVentasRoutingModule } from './form-ventas-routing.module';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormVentasRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: []
})
export class FormVentasModule { }
