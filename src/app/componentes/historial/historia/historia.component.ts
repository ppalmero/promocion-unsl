import { Component, Input } from '@angular/core';
import { HistoriaModelo } from '../../../modelos/historia-modelo';
import { MascaraFechaService } from '../../../servicios/mascara-fecha.service';
import { CommonModule } from '@angular/common';

import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [NgStyle, CommonModule],
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.css'
})
export class HistoriaComponent {
  @Input() historia: HistoriaModelo = {idHistoria: 0, icon: "", titulo: "", subtitulo: "", hora: 0, puntos: 0, color: "555555"};

  constructor(public mascaraService: MascaraFechaService){

  }
}
