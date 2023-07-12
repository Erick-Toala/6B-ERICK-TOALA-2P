import { Component } from '@angular/core';
import { Observable } from 'rxjs';


//para las validaciones
import { Validators, FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';


import { DeportistasService } from '../../../services/deportistas/deportistas.service';
import { IDeportista,IDeportistas } from '../../../interfaces/Deportistas';


@Component({
  selector: 'app-deportistas',
  templateUrl: './deportistas.component.html',
  styleUrls: ['./deportistas.component.css']
})
export class DeportistasComponent {

  //validaciones
  form: FormGroup;
  submitted = false;

  id: string='';;

  dataDeportistas:IDeportistas = { sum:0, deportistas:[] };
  title:string = 'Deportistas';

  constructor(private deportistasService: DeportistasService,){
    this.form = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('', [Validators.required, nameFormatValidator()]),
      peso: new FormControl('', [Validators.min(0), Validators.max(9999)]),
      altura: new FormControl('', [Validators.min(0), Validators.max(9999)]),
      edad: new FormControl('', [Validators.min(0), Validators.max(9999)]),
    });
  }

  ngOnInit() {
    this.deportistasService.getDeportistas()
     .subscribe(data => {
       this.dataDeportistas= data;
     })
  }
  submitData(value: IDeportista) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const id = this.id;
    let body:IDeportista = {
      nombre: value.nombre,
      peso: value.peso,
      altura: value.altura,
      edad: value.edad,
    }

    if (this.id.trim().length==0)
    {
    this.deportistasService.createDeportista(body)
      .subscribe(response => {
        console.log(response);
        this.ngOnInit();
      })
    }
    else
    {
      this.deportistasService.updateDeportistaid(this.id, body)
        .subscribe(response => {
          console.log(response);
          this.ngOnInit();
        })
    }
  }

  deleteDeportista(id: string) {
    this.deportistasService.deleteDeportista(id)
      .subscribe(response => {
        console.log('Deportista eliminado:', response);
        // Realiza cualquier otra acción necesaria después de eliminar el deportista.
        this.ngOnInit();
      });
  }
  

}
function nameFormatValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    const regex = /^([A-Z][a-z]*\s*)+$/; // Regex pattern for the desired format

    if (value && !regex.test(value)) {
      return { lowercase: true };
    }

    return null;
  };
}
