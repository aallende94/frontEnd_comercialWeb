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
  templateUrl: './registrar-clientes.component.html',
  styleUrls: ['./registrar-clientes.component.scss']
})
export class RegistrarClientesComponent implements OnInit {


  constructor(private fb                : FormBuilder, 
              private serviCliente : ClienteService
              ) { }

  cliente = {
    nombre_cliente: '',
    direccion_cliente: '',
    email_cliente: '',
    ruc_cliente: '',
    sexo_cliente: '',
    telefono_cliente: '',
    nro_documento_cliente: ''
  };

   mensaje: string = '';
   mensaje_error : string = '';
  mostrarMensaje_true: boolean = false;
   mostrarMensaje_err: boolean = false;

   REGISTRAR : boolean = true
   ACTUALIZAR : boolean = false
   ELIMINAR : boolean = false

  ngOnInit(): void {

  }    

  submit() {
    console.table("Form Submitted")
    
  }

  registrarCliente() {

        // Aquí puedes llamar a un servicio para guardar en la base de datos
    console.log('Cliente registrado:', this.cliente);

    this.serviCliente.insDataCliente(this.cliente).subscribe(
      data => {
         
        let result : any = data;
          console.log(result);

                if (!result.data.error) {
              
                    this.mensaje = result.data.msg;
                    this.mostrarMensaje_true = true;
                      this.mostrarMensaje_err = false;
                      this.clearCamposCliente();
                    window.scroll(0, 0);
                }else{

                   this.mensaje_error = result.data.error;
                   this.mostrarMensaje_true = false;
                    this.mostrarMensaje_err = true;
                    this.clearCamposCliente();
                    window.scroll(0, 0);

                }
        });
  }

  onNroDocumCliente(nroDoc: string): void{
    //(document.querySelector("#overlay") as HTMLElement).hidden = false;

    console.log(nroDoc);
    if (nroDoc != '') {

      let dataSend = {nroDoc}

      this.serviCliente.postNroDocumCliente(dataSend).subscribe(
        data => {

          let result: any = data;
          console.log(result);

          if (!result == false) {
              
            this.cliente = {
                nombre_cliente: result[0].nombre_cliente,
                direccion_cliente: result[0].direccion_cliente,
                email_cliente: result[0].email_cliente,
                ruc_cliente: result[0].ruc_cliente,
                sexo_cliente: result[0].sexo_cliente,
                telefono_cliente: result[0].telefono_cliente,
                nro_documento_cliente: result[0].nro_documento_cliente
              };
  
              this.REGISTRAR = false
               this.ACTUALIZAR = true
               this.ELIMINAR = true
          }else{
           
               this.REGISTRAR = true
               this.ACTUALIZAR = false
               this.ELIMINAR = false

               this.cliente = {
                              nombre_cliente: '',
                              direccion_cliente: '',
                              email_cliente: '',
                              ruc_cliente: '',
                              sexo_cliente: '',
                              telefono_cliente: '',
                              nro_documento_cliente: nroDoc
                              };
          }
         
      });
    }else{
   
      let msg = 'Debe ingresar Nro. de Documento!!';
      this.mensaje_error = msg;
      this.mostrarMensaje_err = true
     this.clearCamposCliente();
     this.REGISTRAR = true

    }
  }

  actualizarCliente(){
    
    // Aquí puedes llamar a un servicio para guardar en la base de datos
    console.log('Cliente actualizado:', this.cliente);

       this.serviCliente.updDataCliente(this.cliente).subscribe(
      data => {
         
        let result : any = data;
          console.log(result.data);

                if (!result.data.error) {
              
                    this.mensaje = result.data.msg;
                    this.mostrarMensaje_true = true;
                      this.mostrarMensaje_err = false;
                      this.clearCamposCliente();
                    window.scroll(0, 0);
                }else{

                   this.mensaje_error = result.data.error;
                   this.mostrarMensaje_true = false;
                    this.mostrarMensaje_err = true;
                    this.clearCamposCliente();
                    window.scroll(0, 0);

                }
        });

  }

   clearCamposCliente() : void{

     this.cliente = {
        nombre_cliente: '',
        direccion_cliente: '',
        email_cliente: '',
        ruc_cliente: '',
        sexo_cliente: '',
        telefono_cliente: '',
        nro_documento_cliente: ''
        };

    }



}
