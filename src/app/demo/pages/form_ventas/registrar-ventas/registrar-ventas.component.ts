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
  templateUrl: './registrar-ventas.component.html',
  styleUrls: ['./registrar-ventas.component.scss']
})
export class RegistrarVentasComponent implements OnInit {


  constructor(private fb                : FormBuilder, 
              private serviCliente : ClienteService
              ) { }

   venta = {
    id_cliente: null,
    id_usuario: null,
    fecha_venta: '',
    detalles: [] as any[]
  };

   mensaje: string = '';
   mensaje_error : string = '';
  mostrarMensaje_true: boolean = false;
   mostrarMensaje_err: boolean = false;


  ngOnInit(): void {

  }    

  submit() {
    console.table("Form Submitted")
    
  }

   agregarDetalle() {
    this.venta.detalles.push({ id_producto: null, cantidad: 1, precio_unitario: 0, precio_total: 0 });
  }

  eliminarDetalle(index: number) {
    this.venta.detalles.splice(index, 1);
  }

  registrarVenta() {
   // this.http.post('http://localhost/api/ventas.php', this.venta).subscribe(res => {
      console.log('Venta registrada');
    }
  //);
   //}



}
