import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascaraFechaService {

  constructor() { }

  formatearHorario(fecha: number): string {
    let f = new Date(fecha);
    return f.toLocaleTimeString('es-ES', {
      hour: 'numeric',
      minute: 'numeric'
    }) + "h";
  }
  
}
