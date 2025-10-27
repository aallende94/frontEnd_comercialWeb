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
  templateUrl: './estadoCaja.component.html',
  styleUrls: ['./estadoCaja.component.scss']
})
export class EstadoCajaComponent implements OnInit {

  cajaActual: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http.get<any>('http://localhost/api/estado_caja.php')
    //   .subscribe(data => {
    //     this.cajaActual = data;
    //   });
  }



}
