import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

//import { HttpClientModule } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { ConfigService } from '../../../helpers/config.service';
//import { TokenService } from '../../../services/token.service';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { ClienteService } from 'src/app/demo/services/clientes.service';

@Component({
  selector: 'app-basic-elements',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {


  constructor( private serviCliente : ClienteService) { }

  listClientes: any[] = [];
  listClientesall: any[] = [];

  name: string;
  email: string;

  ngOnInit(): void {
    
   this.getUser();
   }

  getUser(){

    let params = '';
    this.serviCliente.listDataCliente(params).subscribe(
      data => {

        console.log(data);
        let resultClientes : any = data;
       this.listClientes = resultClientes.data;

     
      });
  }

  

 
 

}
