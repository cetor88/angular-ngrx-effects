import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuario = createAction(
    '[Usuario] Carga Usuario',
    props<{ id: string }>()
);

export const cargarUsuarioSuccess = createAction(
    '[Usuario] Carga Usuarios Success',
    props<{ usuario: Usuario }>()
);

export const cargarUsuarioError = createAction(
    '[Usuario] Carga Usuario Error',
    props<{ payload: any }>()
);