import { Component, Input, OnChanges, OnInit, ViewChild, ElementRef, TemplateRef  } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
//import { HttpClientModule } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { ConfigService } from '../../../helpers/config.service';
//import { TokenService } from '../../../services/token.service';
import { CommonModule } from '@angular/common';

import { ProductoService } from '../../../services/productos.service';

@Component({
  selector: 'app-basic-elements',
  templateUrl: './registrar-productos.component.html',
  styleUrls: ['./registrar-productos.component.scss']
})
export class RegistrarProductosComponent implements OnInit {

  constructor(private fb                : FormBuilder, 
             private serviProducto : ProductoService) { }

    @ViewChild('id_cat') id_cat!: ElementRef<HTMLInputElement>
    @ViewChild('id_prov') id_prov!: ElementRef<HTMLInputElement>

    cod_producto          : string;
    descripcion_producto  : string;
    //nombre_producto: string '';
    precio_compra         : string = '0';
    precio_contado_venta  : string = '0';
    stock                 : string = '0';
    id_categoria          : number;
    id_proveedor          : number;

   mensaje                : string = '';
   mensaje_error          : string = '';
   mostrarMensaje_true    : boolean = false;
   mostrarMensaje_err     : boolean = false;

   REGISTRAR             : boolean = true
   ACTUALIZAR            : boolean = false
   ELIMINAR              : boolean = false

   categorias : any[] = [];
   proveedores : any[] = [];

  ngOnInit():   void {
      this.getDataFormulario();
  } 
  
  getDataFormulario(){

    this.serviProducto.getDataForm().subscribe(
      data => {
         
        let result : any = data;
          console.log(result);

          this.categorias = result.categorias;
          this.proveedores = result.proveedores;
          
        });

  }
  
  registrarProducto() {
   
    // Aquí puedes llamar a un servicio para guardar en la base de datos

    let cod_producto         = this.cod_producto; 
    let descripcion_producto = this.descripcion_producto;
    let precio_compra        = this.precio_compra;
    let precio_contado_venta = this.precio_contado_venta;
    let stock                = this.stock;
  
    let id_categoria = this.id_cat.nativeElement.value;
    let id_proveedor = this.id_prov.nativeElement.value;

    let dataSend = {cod_producto, descripcion_producto, precio_compra, precio_contado_venta, stock, id_categoria, id_proveedor};

    console.log(dataSend);

     this.serviProducto.insDataProducto(dataSend).subscribe(
      data => {
         
        let result : any = data;
          console.log(result);

                if (!result.data.error) {
              
                    this.mensaje = result.data.msg;
                    this.mostrarMensaje_true = true;
                      this.mostrarMensaje_err = false;
                      this.clearCamposProducto();
                    window.scroll(0, 0);
                }else{

                   this.mensaje_error = result.data.error;
                   this.mostrarMensaje_true = false;
                    this.mostrarMensaje_err = true;
                    this.clearCamposProducto();
                    window.scroll(0, 0);

                }
        });
  }

  clearCamposProducto() : void{

    
          this.cod_producto = '';
          this.descripcion_producto = '';
          //nombre_producto = '';
          this.precio_compra = '0';
          this.precio_contado_venta = '0';
          this.stock = '0';
          this.id_categoria = null;
          this.id_proveedor = null;
          // documento_factura: '',
          // nombre_factura: '',
          // email_factura: ''
        

    }

 

}
