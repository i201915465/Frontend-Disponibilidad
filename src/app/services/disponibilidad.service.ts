import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disponibilidad } from '../models/disponibilidad.model';

const baseUrl = "http://localhost:8020/rest/disponibilidad";

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadService {

  constructor(private http:HttpClient) { }

  registraDisponibilidad(data:Disponibilidad):Observable<any>{
    return this.http.post(baseUrl,data);
  }
}
