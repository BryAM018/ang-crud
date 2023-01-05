import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire/compat'
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { GestorComponent } from './gestor/gestor.component';
import { laboratorio } from './laboratorio/laboratorios.model';
import { laboratoriosComponent } from './laboratorio/laboratorio.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';

import { ToastrModule } from 'ngx-toastr';

const appRoutes:Routes=[
  {path:'',redirectTo:'Inicio',pathMatch:'full'},
  {path:'Inicio',component:HomeComponent},
  {path:'Iniciar',component:LoginComponent},
  {path:'Registro',component:RegistroComponent},
  {path:'Horarios',component:GestorComponent}, 
  {path:'Reservas',component:laboratoriosComponent},
  {path:'Recuperar',component:RecuperarComponent},
  {path:'Detalles',component:XyzComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    GestorComponent,
    laboratoriosComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    RecuperarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    NgbModalModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const firebaseConfig = {

    apiKey: "AIzaSyBvtZeBqARQJwjWRV0frPYJcNQmzXsQAwY",
  
    authDomain: "fir-angular-ff9ec.firebaseapp.com",
  
    databaseURL: "https://fir-angular-ff9ec-default-rtdb.firebaseio.com",
  
    projectId: "fir-angular-ff9ec",
  
    storageBucket: "fir-angular-ff9ec.appspot.com",
  
    messagingSenderId: "742639967482",
  
    appId: "1:742639967482:web:f7beff60c21e1196c0fd43"
  
  };
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);

