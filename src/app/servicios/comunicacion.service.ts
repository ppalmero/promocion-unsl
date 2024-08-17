import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  leerQR! : EventEmitter<string>;
  constructor() { }
}
