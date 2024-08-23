import { Component, inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog'; 
import { QRCodeModule } from 'angularx-qrcode';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-dialogo-finalizar',
  standalone: true,
  imports: [MatDialogModule, QRCodeModule],
  templateUrl: './dialogo-finalizar.component.html',
  styleUrl: './dialogo-finalizar.component.css'
})
export class DialogoFinalizarComponent {
  readonly data = inject<Usuario>(MAT_DIALOG_DATA);
  qrData: string = JSON.stringify(this.data);
  qrSize: number = 256;
  qrLevel: string = 'M'; // Nivel de corrección de errores: 'L', 'M', 'Q', 'H'

}
