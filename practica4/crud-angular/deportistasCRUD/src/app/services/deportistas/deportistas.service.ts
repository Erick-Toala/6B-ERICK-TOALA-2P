import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, audit } from 'rxjs';


import { IDeportista, IDeportistas } from '../../interfaces/Deportistas';



@Injectable({
  providedIn: 'root'
})
export class DeportistasService {

  BASE_URL:string = 'http://localhost:5000/v1/inventory/api';

  constructor(private http: HttpClient) { }

  getDeportistas(): Observable<IDeportistas> {
    return this.http.get<IDeportistas>(`${this.BASE_URL}/deportistas`);
  }
  getDeportista(id: string):Observable<IDeportista>{ 
    return this.http.get<IDeportista>(`${this.BASE_URL}/deportistas/${id}`);
  }
  createDeportista(deportista:any):Observable<IDeportista>{
    return this.http.post<IDeportista>(`${this.BASE_URL}/deportistas`, deportista);

  }
  deleteDeportista(id: string):Observable<IDeportista>{ 
    return this.http.delete<IDeportista>(`${this.BASE_URL}/deportistas/${id}`);
  } 
  updateDeportistaid(id: string, deportista:any):Observable<IDeportista>{
    return this.http.put<IDeportista>(`${this.BASE_URL}/deportistas/${id}`, deportista);
  }
}
