import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { UsersModule } from '../models/users/users.module';
import { ConfigService } from '../helpers/config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  constructor(private http: HttpClient,private config: ConfigService) { }

  getDataForm(){
    let dir = 'producto/dataForm';
    return this.http.get(this.config.url+dir);
  }

 
  insDataProducto(params: any){
  
    let dir = 'producto/insertaData';
    return this.http.post(this.config.url+dir, params);
  }

  postNroDocumProducto(params: any){
  
    let dir = 'producto/codProductoData';
    return this.http.post(this.config.url+dir, params);
  }

  updDataProducto(params: any){
  
    let dir = 'producto/actualizaData';
    return this.http.post(this.config.url+dir, params);
  }

   listDataProducto(params: any){
  
    let dir = 'producto/listDataProducto';
    return this.http.get(this.config.url+dir, params);
  }

 

}
