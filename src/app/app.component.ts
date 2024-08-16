import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { PuntosComponent } from "./componentes/puntos/puntos.component";
import { PostasComponent } from "./componentes/postas/postas.component";
import { HistorialComponent } from "./componentes/historial/historial.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatButtonModule, MatIconModule, PuntosComponent, PostasComponent, HistorialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'promocion-unsl';
  showFiller = false;
}
