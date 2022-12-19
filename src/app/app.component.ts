import { Component } from '@angular/core';
import { laboratorio } from './laboratorio/laboratorios.model';
import { AppModule } from '../app/app.module';
import { GestorComponent } from './gestor/gestor.component';
import { LoginComponent } from './login/login.component';
import * as xmlrpc from 'xmlrpc';
declare global {
  var parseXml:(xmlStr:string)=>{}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title:string = 'Proyecto AW';

  ngOnInit():void {
  

}
}
