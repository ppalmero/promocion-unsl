import { Component } from '@angular/core';
import { HistoriaComponent } from "./historia/historia.component";

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [HistoriaComponent],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {

}
