import { Component, OnInit } from '@angular/core';
import { laboratorio } from '../laboratorio/laboratorios.model';
import { GestorComponent } from '../gestor/gestor.component';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { NgModule } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    registarUsuario: FormGroup; 
    loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,    private router: Router

  ) {
    this.registarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required],
    });
  }
  
  registrar() {
    const email = this.registarUsuario.value.email;
    const password = this.registarUsuario.value.password;
    const repetirPassowrd = this.registarUsuario.value.repetirPassword;
    if (password !== repetirPassowrd) {
        this.toastr.error(
          'Las contraseñas ingresadas deben ser las mismas',
          'Error'
        );
        return;
      }


      this.loading = true;
      this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.router.navigate(['/Iniciar']);
        })
        .catch((error) => {
          this.loading = false;
          this.toastr.error(this.firebasesError(error.code), 'Error');
        }); 

  }
    firebasesError(code:string)  {
        switch(code){
            case 'auth/email-already-in-use':
            return 'elusuario ya existe';
            case 'auth/weak-password':
                return 'Contraseña debil';
        default:
            return 'DEsconocido'
        }

    }

}
