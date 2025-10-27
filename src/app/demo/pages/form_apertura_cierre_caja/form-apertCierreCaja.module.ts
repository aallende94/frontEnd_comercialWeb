import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { FormApertCierreCajaRoutingModule } from './form-apertCierreCaja-routing.module';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormApertCierreCajaRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: []
})

export class FormApertCierreCajaModule { }
