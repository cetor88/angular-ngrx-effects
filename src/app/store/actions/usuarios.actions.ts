import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios] Carga Usuarios');

export const cargarUsuariosSucces = createAction(
    '[Usuarios] Carga Usuarios Success',
    props<{ usuarios: Usuario[] }>()
);

export const cargarUsuariosError = createAction(
    '[Usuarios] Carga Usuarios Error',
    props<{ payload: any }>()
);