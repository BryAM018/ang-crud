import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';


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
      terms: [false, Validators.requiredTrue],
      date: ['', Validators.required],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
    });
  }
  
  registrar() {
    const email = this.registarUsuario.value.email;
    const password = this.registarUsuario.value.password;
    const repetirPassowrd = this.registarUsuario.value.repetirPassword;
    console.log(this.registarUsuario);
    }
     

  }

  

