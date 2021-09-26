import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciclo } from '../models/ciclo.model';

const baseUrl = "http://localhost:8020/rest/util"

@Injectable({
  providedIn: 'root'
})
export class CicloService {

  constructor(private http:HttpClient) { }

  listaCiclo():Observable<Ciclo[]> {
    return this.http.get<Ciclo[]>(baseUrl+"/ciclo");
  }

}
