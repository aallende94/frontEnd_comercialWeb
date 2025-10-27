import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarProductosRoutingModule } from './form-productos-routing.module';

import { SharedModule } from 'src/app/theme/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegistrarProductosRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class FormProductosModule { }
