import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { ListarClientesRoutingModule } from './listar-clientes-routing.module';
import { ListarClientesComponent } from './listar-clientes.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    ListarClientesRoutingModule,
    SharedModule,
    NgbDropdownModule,
    HttpClientModule,
    DataTablesModule
  ],
  declarations: [ListarClientesComponent]
})
export class ListarClientesModule { }
