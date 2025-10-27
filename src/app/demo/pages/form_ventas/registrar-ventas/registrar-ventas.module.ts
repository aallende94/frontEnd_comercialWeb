import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { RegistrarVentasRoutingModule } from './registrar-ventas-routing.module';
import { RegistrarVentasComponent } from './registrar-ventas.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RegistrarVentasRoutingModule,
    SharedModule,
    NgbDropdownModule,
    HttpClientModule
  ],
  declarations: [RegistrarVentasComponent]
})
export class RegistrarVentasModule { }
