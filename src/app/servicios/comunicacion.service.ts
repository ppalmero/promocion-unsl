import { EventEmitter, Injectable } from '@angular/core';
import { HistoriaModelo } from '../modelos/historia-modelo';
import { Usuario } from '../modelos/usuario';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  leerQR = new EventEmitter<HistoriaModelo>;
  cargarPuntos = new EventEmitter<number>;
  usuario!: Usuario;
  loginUsuario = new EventEmitter<Usuario>;

  constructor(private dbService: NgxIndexedDBService) {
    

    this.dbService.getAll('users').subscribe((users) => {
      let usuarios: any[] = users;
      if (usuarios.length > 0) {
        this.login(usuarios[0]);
      }
    });
   }

  login(u: Usuario) {
    this.usuario = u;
    this.loginUsuario.emit(this.usuario);
  }

  isLogIn(): boolean {
    if (this.usuario) {
      return true;
    } else {
      return false;
    }
  }

  getUserID(): number {
    if (this.usuario) {
      return this.usuario.id;
    } else {
      return 0;
    }
  }

  completarUsuario(u: Usuario): Usuario {
    if (this.isLogIn()) {
      u.id = this.usuario.id;
      u.keyGen = this.usuario.keyGen;
      u.historias = this.usuario.historias;
      //this.loginUsuario.emit(this.usuario);
    }
    return u;
  }

  addEstacion(estacion: HistoriaModelo) {
    if (this.isLogIn()) {
      if (!this.usuario.historias) {
        this.usuario.historias = [];
      }
      this.usuario.historias.push(estacion);
      this.dbService.update('users', { ...this.usuario, id: this.getUserID() }).subscribe(() => {
        alert('Estación actualizado exitosamente.');
        //this.userId = null;
      });
    }
  }

  tieneHistorias(): boolean {
    if (!this.usuario.historias) {
      return false;
    } else {
      return true;
    }
  }

}
