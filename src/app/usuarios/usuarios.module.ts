import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component';
import { UsuarioComponent } from './usuario.component';



@NgModule({
  declarations: [
    ListaComponent,
    UsuarioComponent
  ],
  exports: [
    ListaComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
