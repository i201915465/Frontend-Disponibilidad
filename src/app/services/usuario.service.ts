import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const baseUrl = "http://localhost:8020/rest/util"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  listaUsuario():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(baseUrl+"/usuario");
  }

}
