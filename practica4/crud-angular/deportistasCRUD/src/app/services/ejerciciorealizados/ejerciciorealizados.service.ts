import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, audit } from 'rxjs';

import { IEjerciciosRealizado, IEjerciciosRealizados } from '../../interfaces/IEjerciciosRealizados';


@Injectable({
  providedIn: 'root'
})
export class EjerciciorealizadosService {

  BASE_URL:string = 'http://localhost:5000/v1/inventory/api';

  constructor(private http: HttpClient) { }

  getEjerciciosRealizados(): Observable<IEjerciciosRealizados> {
    return this.http.get<IEjerciciosRealizados>(`${this.BASE_URL}/ejerciciorealizados`);
  }
  createEjerciciosRealizado(ejerciciorealizados:any):Observable<IEjerciciosRealizado>{
    return this.http.post<IEjerciciosRealizado>(`${this.BASE_URL}/ejerciciorealizados`, ejerciciorealizados);

  }
  deleteEjerciciosRealizado(id: string):Observable<IEjerciciosRealizado>{ 
    return this.http.delete<IEjerciciosRealizado>(`${this.BASE_URL}/ejerciciorealizados/${id}`);
  } 
  updateEjerciciosRealizado(id: string, ejerciciorealizados:any):Observable<IEjerciciosRealizado>{
    return this.http.put<IEjerciciosRealizado>(`${this.BASE_URL}/ejerciciorealizados/${id}`, ejerciciorealizados);
  }

}
