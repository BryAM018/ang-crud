import { Component, OnInit } from '@angular/core';
import { laboratorio } from '../laboratorio/laboratorios.model';
import { GestorComponent } from '../gestor/gestor.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public myFrom!:FormGroup;
  constructor(private fb:FormBuilder){

  }
ngOnInit():void{
  this.myFrom=this.createMyFrom();
}
private createMyFrom():FormGroup{
  return this.fb.group({
    usuario:[],
    password:[]
  })
}
}
