import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as usuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';
import { cargarUsuario } from '../actions/usuario.actions';


@Injectable()
export class UsuarioEffect {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ) { }

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuario),
            //tap(data => console.log('effect tap', data)),
            mergeMap(
                (action) => this.usuarioService.getUserPerId(action.id)
                    .pipe(
                        map(user => usuariosActions.cargarUsuarioSuccess({ usuario: user })),
                        catchError(err => of(usuariosActions.cargarUsuarioError({ payload: err })))
                    )
            )
        )
    );
}