import { Component } from '@angular/core';
import { laboratorio } from './laboratorio/laboratorios.model';
import { AppModule } from '../app/app.module';
import { GestorComponent } from './gestor/gestor.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Proyecto Angular';

  ngOnInit():void {
    
  }

}
