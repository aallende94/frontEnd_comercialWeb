import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
//import { HttpClientModule } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { ConfigService } from '../../../helpers/config.service';
//import { TokenService } from '../../../services/token.service';
import { CommonModule } from '@angular/common';

import { ClienteService } from '../../../services/clientes.service';

@Component({
  selector: 'app-basic-elements',
  templateUrl: './cierreCaja.component.html',
  styleUrls: ['./cierreCaja.component.scss']
})
export class CierreCajaComponent implements OnInit {


  constructor(private fb                : FormBuilder, 
              private serviCliente : ClienteService
              ) { }

   inventario: any[] = [];

  ngOnInit(): void {

  }  

    cerrarCaja(){
      
    }



}
