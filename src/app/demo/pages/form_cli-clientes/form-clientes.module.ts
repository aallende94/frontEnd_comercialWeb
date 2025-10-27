import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { FormClientesRoutingModule } from './form-clientes-routing.module';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormClientesRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: []
})
export class FormClientesModule { }
