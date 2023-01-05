import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public myForm!:FormGroup;
  loading: boolean = false;
  constructor(private fb:FormBuilder,
    private afAuth: AngularFireAuth, private router: Router){

  }
ngOnInit():void{
  this.myForm=this.createMyFrom();
}
private createMyFrom():FormGroup{
  return this.fb.group({
    usuario:['',[Validators.required],Validators.email],
    password:['',[Validators.required]]
  })
}

public submitFormulario(){
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;

    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
      if(user.user?.emailVerified) {
        this.router.navigate(['/Inicio']);
      } else {

      }
    }).catch((error) => {
      this.loading = false;
    })
  if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
  }

}

   
  

public get f():any{
  return this.myForm.controls;
}
}
