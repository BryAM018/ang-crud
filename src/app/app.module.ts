import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { GestorComponent } from './gestor/gestor.component';
import { laboratorio } from './laboratorio/laboratorios.model';
import { laboratoriosComponent } from './laboratorio/laboratorio.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
const appRoutes:Routes=[
  {path:'Reservas',component:laboratoriosComponent},
  {path:'Horarios',component:GestorComponent},
  {path:'Inicio',component:HomeComponent},
  {path:'Registar',component:RegistroComponent},
  {path:'Iniciar',component:LoginComponent},
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

