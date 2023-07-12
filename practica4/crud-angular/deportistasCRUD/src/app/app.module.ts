import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeportistasComponent } from './components/deportista/deportistas/deportistas.component';
import { TipoejerciciosComponent } from './components/tipoejercicio/tipoejercicios/tipoejercicios.component';
import { EjerciciorealizadosComponent } from './components/ejerciciorealizados/ejerciciorealizados/ejerciciorealizados.component';

@NgModule({
  declarations: [
    AppComponent,
    DeportistasComponent,
    TipoejerciciosComponent,
    EjerciciorealizadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
