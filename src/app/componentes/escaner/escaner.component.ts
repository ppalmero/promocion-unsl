import { Component } from '@angular/core';

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

@Component({
  selector: 'app-escaner',
  standalone: true,
  imports: [ZXingScannerModule,MatDialogActions,MatDialogClose,MatDialogContent],
  templateUrl: './escaner.component.html',
  styleUrl: './escaner.component.css'
})
export class EscanerComponent {

  qrResultString!: string;
  formats: BarcodeFormat[] = [BarcodeFormat.QR_CODE];

  constructor(private comunicacion: ComunicacionService){
    
  }

  onCodeResult(resultString: string) {
    this.comunicacion.leerQR.emit(resultString);
  }
}
