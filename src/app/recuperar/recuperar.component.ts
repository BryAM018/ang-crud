import { Component } from '@angular/core';
import { laboratorio } from '../laboratorio/laboratorios.model';
import { GestorComponent } from '../gestor/gestor.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
    recuperarUsuario: FormGroup;
    loading: boolean = false;
  
    constructor(
      private fb: FormBuilder,
      private afAuth: AngularFireAuth,

      private router: Router,
    
    ) {
      this.recuperarUsuario = this.fb.group({
        correo: ['', [Validators.required, Validators.email]],
      });
    }
  
    ngOnInit(): void {}
  
    recuperar() {
      const email = this.recuperarUsuario.value.correo;
  
      this.loading = true;
      this.afAuth
        .sendPasswordResetEmail(email)
        .then(() => {
          
          this.router.navigate(['/login']);
        })
        .catch((error) => {
          this.loading = false;
        });
    }
}
