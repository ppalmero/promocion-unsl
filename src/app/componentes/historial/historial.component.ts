import { Component, Input } from '@angular/core';
import { HistoriaComponent } from "./historia/historia.component";
import { HistoriaModelo } from '../../modelos/historia-modelo';
import { NgFor, NgIf } from '@angular/common';
import { ComunicacionService } from '../../servicios/comunicacion.service';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [HistoriaComponent, NgFor, NgIf],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {
  historias: HistoriaModelo[] = [];
  constructor(public comunicacion: ComunicacionService){
    this.comunicacion.leerQR.subscribe(
      (estacion) => {
        //this.historias.push(estacion);
      }
    );

    this.comunicacion.loginUsuario.subscribe(
      (p) => {
        this.historias = this.comunicacion.usuario.historias;
      }
    )
  }
}
