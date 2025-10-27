import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { UsersModule } from '../models/users/users.module';
import { ConfigService } from '../helpers/config.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(private http: HttpClient,private config: ConfigService) { }

  //ActualizarTokenUser
  insDataCliente(params: any){
  
    let dir = 'cliente/insertaData';
    return this.http.post(this.config.url+dir, params);
  }

  postNroDocumCliente(params: any){
  
    let dir = 'cliente/nroDocumClienteData';
    return this.http.post(this.config.url+dir, params);
  }

  updDataCliente(params: any){
  
    let dir = 'cliente/actualizaData';
    return this.http.post(this.config.url+dir, params);
  }

   listDataCliente(params: any){
  
    let dir = 'cliente/listDataCliente';
    return this.http.get(this.config.url+dir, params);
  }

  

}
