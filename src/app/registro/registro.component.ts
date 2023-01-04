import { Component, OnInit } from '@angular/core';
import { laboratorio } from '../laboratorio/laboratorios.model';
import { GestorComponent } from '../gestor/gestor.component';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { NgModule } from '@angular/core';
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
    this.afAuth.createUserWithEmailAndPassword(email,password).then((user)=>{console.log(user)})
    .catch((error)=>{console.log(error);})
  }

}
