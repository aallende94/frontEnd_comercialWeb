import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
//import { EnvioEmailsService } from '../../../services/envio-emails.service';
//import { HttpClientModule } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { ConfigService } from '../../../helpers/config.service';
//import { TokenService } from '../../../services/token.service';
import { CommonModule } from '@angular/common';
import { ProductoService } from 'src/app/demo/services/productos.service';


@Component({
  selector: 'app-basic-elements',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent implements OnInit {
 
  constructor( private serviProducto : ProductoService) { }
 
   listProductos: any[] = [];
   listProductosall: any[] = [];
 
   name: string;
   email: string;

  ngOnInit(): void {
  this.getUser()
  }    

 
   getUser(){

    let params = '';
    this.serviProducto.listDataProducto(params).subscribe(
      data => {

        console.log(data);
        let resultProductos : any = data;
       this.listProductos = resultProductos.data;

     
      });
  }

 

 

}
