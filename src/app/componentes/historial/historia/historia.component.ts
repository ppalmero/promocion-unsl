import { Component, Input } from '@angular/core';
import { HistoriaModelo } from '../../../modelos/historia-modelo';
import { MascaraFechaService } from '../../../servicios/mascara-fecha.service';

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [],
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.css'
})
export class HistoriaComponent {
  @Input() historia: HistoriaModelo = {icon: "", titulo: "", subtitulo: "", hora: 0, puntos: 0};

  constructor(public mascaraService: MascaraFechaService){

  }
}
