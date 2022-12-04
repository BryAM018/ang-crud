import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

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


const appRoutes:Routes=[
  {path:'Reservas',component:laboratoriosComponent},
  {path:'Horarios',component:GestorComponent},
  {path:'Inicio',component:HomeComponent},
  {path:'Registar',component:RegistroComponent},
  {path:'Iniciar',component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    GestorComponent,
    laboratoriosComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
