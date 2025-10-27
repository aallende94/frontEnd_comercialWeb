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
  templateUrl: './aperturaCaja.component.html',
  styleUrls: ['./aperturaCaja.component.scss']
})
export class AperturaCajaComponent implements OnInit {


  constructor(private fb                : FormBuilder, 
              private serviCliente : ClienteService
              ) { }

   inventario: any[] = [];

  ngOnInit(): void {

  }  

    abrirCaja(){
      
    }



}
