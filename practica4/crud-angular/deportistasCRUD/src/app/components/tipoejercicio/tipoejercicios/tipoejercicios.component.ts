import { Component } from '@angular/core';

import { TipoejerciciosService } from '../../../services/tipoejercicios/tipoejercicios.service';
import { ITipoEjercicio,ITipoEjercicios } from '../../../interfaces/ITipoEjercicios';

@Component({
  selector: 'app-tipoejercicios',
  templateUrl: './tipoejercicios.component.html',
  styleUrls: ['./tipoejercicios.component.css']
})
export class TipoejerciciosComponent {
  id: string='';;

  dataTipoEjercicios:ITipoEjercicios = { sum:0, tipoejercicio:[] };
  title:string = 'TipoEjercicio';

  constructor(private tipoEjercicioService: TipoejerciciosService){}

  ngOnInit() {
    this.tipoEjercicioService.getTipoEjercicios()
     .subscribe(data => {
       this.dataTipoEjercicios= data;
     })
  }
  submitData(value: ITipoEjercicio) {
    const id = this.id;
    let body:ITipoEjercicio = {
      tipo: value.tipo
    }

    if (this.id.trim().length==0)
    {
    this.tipoEjercicioService.createTipoEjercicio(body)
      .subscribe(response => {
        console.log(response);
        this.ngOnInit();
      })

    }else
    {
      this.tipoEjercicioService.updateTipoEjercicio(this.id, body)
        .subscribe(response => {
          console.log(response);
          this.ngOnInit();
        })
    }
  }

  deleteTipoEjercicio(id: string) {
    this.tipoEjercicioService.deleteTipoEjercicio(id)
      .subscribe(response => {
        console.log('Tipo Ejercicio eliminado:', response);
        // Realiza cualquier otra acción necesaria después de eliminar el deportista.
        this.ngOnInit();
      });
  }

}
