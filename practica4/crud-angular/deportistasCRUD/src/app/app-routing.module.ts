import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  DeportistasComponent} from './components/deportista/deportistas/deportistas.component';
import {  TipoejerciciosComponent} from './components/tipoejercicio/tipoejercicios/tipoejercicios.component';
import {  EjerciciorealizadosComponent} from './components/ejerciciorealizados/ejerciciorealizados/ejerciciorealizados.component';




const routes: Routes = [
  {
    path:'deportistas',
    component:DeportistasComponent
  },
  {
    path:'tipoejercicios',
    component:TipoejerciciosComponent
  },
  {
    path:'ejerciciorealizados',
    component:EjerciciorealizadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
