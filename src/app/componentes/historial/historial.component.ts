import { Component, Input } from '@angular/core';
import { HistoriaComponent } from "./historia/historia.component";
import { HistoriaModelo } from '../../modelos/historia-modelo';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [HistoriaComponent],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {
  @Input() historias: HistoriaModelo[] = [];
}
