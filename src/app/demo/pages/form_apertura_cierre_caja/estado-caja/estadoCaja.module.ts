import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { EstadoCajaRoutingModule } from './estadoCaja-routing.module';
import { EstadoCajaComponent } from './estadoCaja.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    EstadoCajaRoutingModule,
    SharedModule,
    NgbDropdownModule,
    HttpClientModule
  ],
  declarations: [EstadoCajaComponent]
})
export class EstadoCajaModule { }
