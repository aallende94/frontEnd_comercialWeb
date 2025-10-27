import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { AperturaCajaRoutingModule } from './aperturaCaja-routing.module';
import { AperturaCajaComponent } from './aperturaCaja.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AperturaCajaRoutingModule,
    SharedModule,
    NgbDropdownModule,
    HttpClientModule
  ],
  declarations: [AperturaCajaComponent]
})
export class AperturaCajaModule { }
