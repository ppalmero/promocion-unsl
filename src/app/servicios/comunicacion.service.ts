import { EventEmitter, Injectable } from '@angular/core';
import { HistoriaModelo } from '../modelos/historia-modelo';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  leerQR = new EventEmitter<HistoriaModelo>;
  cargarPuntos = new EventEmitter<number>;
  
  constructor() { }
}
