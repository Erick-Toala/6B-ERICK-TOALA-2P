import { Component } from '@angular/core';

import { EjerciciorealizadosService } from '../../../services/ejerciciorealizados/ejerciciorealizados.service';
import { IEjerciciosRealizado,IEjerciciosRealizados } from '../../../interfaces/IEjerciciosRealizados';

//tipo ejercicios
import { TipoejerciciosService } from '../../../services/tipoejercicios/tipoejercicios.service';
import { ITipoEjercicio,ITipoEjercicios } from '../../../interfaces/ITipoEjercicios';

//deportistas 
import { DeportistasService } from '../../../services/deportistas/deportistas.service';
import { IDeportista,IDeportistas } from '../../../interfaces/Deportistas';

@Component({
  selector: 'app-ejerciciorealizados',
  templateUrl: './ejerciciorealizados.component.html',
  styleUrls: ['./ejerciciorealizados.component.css']
})
export class EjerciciorealizadosComponent {

  id: string='';;

  dataEjerciciosRealizados:IEjerciciosRealizados = { sum:0, ejerciciorealizados:[] };
  title:string = 'EjerciciosRealizados';

  //tipos ejercicios
  dataTipoEjercicios:ITipoEjercicios = { sum:0, tipoejercicio:[] };
  titleTipoEjercicios:string = 'TipoEjercicio';

  //deportistas
  dataDeportistas:IDeportistas = { sum:0, deportistas:[] };
  titleDeportistas:string = 'Deportistas';

  constructor(
    private ejerciciosRealizadosService: EjerciciorealizadosService,
    private tipoEjercicioService: TipoejerciciosService,
    private deportistasService: DeportistasService
  ){}

  ngOnInit() {
    this.ejerciciosRealizadosService.getEjerciciosRealizados()
     .subscribe(data => {
       this.dataEjerciciosRealizados= data;
       console.log(data)
    });
    this.tipoEjercicioService.getTipoEjercicios()
     .subscribe(data => {
       this.dataTipoEjercicios= data;
    });
    this.deportistasService.getDeportistas()
     .subscribe(data => {
       this.dataDeportistas= data;
     });
  }
  submitData(value: IEjerciciosRealizado) {
    const id = this.id;
    let body:IEjerciciosRealizado = {
      nombre: value.nombre,
      idtipoejercicio: value.idtipoejercicio,
      iddeportista: value.iddeportista,
      fecha: value.fecha,
      hora: value.hora,
      tiempo: value.tiempo,
      caloriasquemadas: value.caloriasquemadas
    }
    if (this.id.trim().length==0)
    {
    this.ejerciciosRealizadosService.createEjerciciosRealizado(body)
      .subscribe(response => {
        console.log(response);
        this.ngOnInit();
      })
    }else
    {
      this.ejerciciosRealizadosService.updateEjerciciosRealizado(this.id, body)
        .subscribe(response => {
          console.log(response);
          this.ngOnInit();
        })
    }
  }
  deleteEjercicioRealizado(id: string) {
    this.ejerciciosRealizadosService.deleteEjerciciosRealizado(id)
      .subscribe(response => {
        console.log('Ejercicio Realizado eliminado:', response);
        // Realiza cualquier otra acción necesaria después de eliminar el deportista.
        this.ngOnInit();
      });
  }

}
