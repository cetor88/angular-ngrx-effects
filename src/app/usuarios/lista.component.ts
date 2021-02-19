import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, take } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service';
import { AppState } from '../store/app.reducers';
import { cargarUsuarios } from '../store/actions/usuarios.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any
  constructor(
    private service: UsuarioService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.select('usuarios')
      //.pipe(take(1))
      .subscribe(({ users, loading, error }) => {
        this.usuarios = users;
        this.loading = loading;
        this.error = error
      }
      )


    this.store.dispatch(cargarUsuarios());
    /*
    this.service.getUserPerPage()
      .pipe(take(1))
      .subscribe((usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      });
      */
  }

  verDetalle(usuario: Usuario) {
    this.router.navigate([`usuario/${usuario.id}`]);
  }
}
