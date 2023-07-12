import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, audit } from 'rxjs';

import { ITipoEjercicio, ITipoEjercicios } from '../../interfaces/ITipoEjercicios';

@Injectable({
  providedIn: 'root'
})
export class TipoejerciciosService {
  BASE_URL:string = 'http://localhost:5000/v1/inventory/api';

  constructor(private http: HttpClient) { }

  getTipoEjercicios(): Observable<ITipoEjercicios> {
    return this.http.get<ITipoEjercicios>(`${this.BASE_URL}/tipoejercicios`);
  }
  createTipoEjercicio(tipoejercicios:any):Observable<ITipoEjercicio>{
    return this.http.post<ITipoEjercicio>(`${this.BASE_URL}/tipoejercicios`, tipoejercicios);

  }
  deleteTipoEjercicio(id: string):Observable<ITipoEjercicio>{ 
    return this.http.delete<ITipoEjercicio>(`${this.BASE_URL}/tipoejercicios/${id}`);
  } 
  updateTipoEjercicio(id: string, tipoejercicios:any):Observable<ITipoEjercicio>{
    return this.http.put<ITipoEjercicio>(`${this.BASE_URL}/tipoejercicios/${id}`, tipoejercicios);
  }

}
