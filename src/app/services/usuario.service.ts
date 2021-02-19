import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'https://reqres.in/api/';
  constructor(private http: HttpClient) { }

  getUserPerPage(page: number = 2): Observable<Usuario[]> { //: Observable<Usuario[]> 

    return this.http.get(this.url + 'users?page=' + page + '&delay=3')
      .pipe(
        map(resp => {
          return resp['data'];
        })
      );
  }

  getUserPerId(id: string = '2'): Observable<Usuario> { //: Observable<Usuario[]> 

    return this.http.get(this.url + 'users/' + id)
      .pipe(
        map(resp => {
          return resp['data'];
        })
      );
  }
}
