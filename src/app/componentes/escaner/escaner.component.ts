import { Component, inject } from '@angular/core';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ComunicacionService } from '../../servicios/comunicacion.service';

import { HistoriaModelo } from '../../modelos/historia-modelo';

@Component({
  selector: 'app-escaner',
  standalone: true,
  imports: [ZXingScannerModule,MatDialogActions,MatDialogClose,MatDialogContent],
  templateUrl: './escaner.component.html',
  styleUrl: './escaner.component.css'
})
export class EscanerComponent {
  readonly dialogRef = inject(MatDialogRef<EscanerComponent>);
  qrResultString!: string;
  formats: BarcodeFormat[] = [BarcodeFormat.QR_CODE];

  constructor(private comunicacion: ComunicacionService){
    
  }

  onCodeResult(resultString: string) {
    try {
      let estacion : HistoriaModelo = this.convertirEstacion(resultString);
      console.log(estacion);
      if (Number.isNaN(estacion.idHistoria)){
        alert("Error al leer el QR");
      } else {
        this.comunicacion.leerQR.emit(estacion);
      }
    //this.comunicacion.cargarPuntos.emit(estacion.puntos);
    } catch (e) {
      alert("Error al leer el QR");
    }
    this.dialogRef.close();
  }

  convertirEstacion(texto: string): HistoriaModelo {
    var splitted = texto.split("#");
    let estacion: HistoriaModelo = {idHistoria: +splitted[0], icon: splitted[1], titulo: splitted[2], subtitulo: splitted[3], hora: Date.now(), puntos: +splitted[5], color: splitted[6]};
    //let estacion: HistoriaModelo = {idHistoria: 2, icon: splitted[0], titulo: splitted[1], subtitulo: splitted[2], hora: Date.now(), puntos: +splitted[4]};
    return estacion;
  }
}

