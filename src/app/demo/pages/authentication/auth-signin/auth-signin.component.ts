import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { TokenService } from '../../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.css']
})

export class AuthSigninComponent implements OnInit {

  usuario: any = {
    user_web: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  avisoMessage = '';
  atencionMessage = '';
  
  //usuario: UsersModule = new UsersModule()
  constructor (private authService: AuthService, private router: Router, private tokenStorage : TokenService){}
  ngOnInit() {
  }

  login(f: NgForm): void {
    const { user_web, password } = this.usuario;

   //console.log(this.usuario);
   if (f.invalid) {
    this.errorMessage = 'Los Campos son obligatorios.';
    return;
  }
  
   
   this.authService.login(user_web, password).subscribe(
     data => {
       console.log(data);

       if(data.listUser){

         this.isSuccessful = true;
         this.isSignUpFailed = false;

         // aqui guardamos los datos el usuario
         this.tokenStorage.saveUser(data.listUser);

         this.router.navigate(['/clientes']);

         //this.router.navigate(['dash/principal']);

       }else{
         this.errorMessage = 'Error de Autenticacion';
       }
     },
     err => {
       this.errorMessage = err.error.message;
       this.isSignUpFailed = true;
     }
   ); 
    
  }
}

/*
   if(user_web == '' || password == '' || user_web == null || password == null ){
    this.errorMessage = 'Debe cargar los campos.';
    return
   } 
   */
  /*
   if (user_web != 'dsamudio@consolidada.com.py') {
      this.avisoMessage = 'El usuario indicado no está registrado en el sistema.'
      return
   }else
   if (password != 'conso55**') {
    this.atencionMessage = 'La contraseña no es correcta.'
    return
 }
*/
