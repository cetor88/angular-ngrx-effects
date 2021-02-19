import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    this.service.getUserPerPage()
      .pipe(take(1))
      .subscribe((usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      });
  }

}
