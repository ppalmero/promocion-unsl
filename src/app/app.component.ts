import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { PuntosComponent } from "./componentes/puntos/puntos.component";
import { PostasComponent } from "./componentes/postas/postas.component";
import { HistorialComponent } from "./componentes/historial/historial.component"; 
import {MatDialog, MatDialogModule} from '@angular/material/dialog'; 
import { EscanerComponent } from './componentes/escaner/escaner.component';
import { ComunicacionService } from './servicios/comunicacion.service';
import { HistoriaModelo } from './modelos/historia-modelo';
import { LoginComponent } from './componentes/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatDialogModule, 
    MatSidenavModule, MatButtonModule, MatIconModule, PuntosComponent, PostasComponent, HistorialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'promocion-unsl';
  showFiller = false;
  readonly dialog = inject(MatDialog);
  historias: HistoriaModelo[] = [];
  puntos: number = 0;
  postas: number = 0;

  constructor(private comunicacion: ComunicacionService){
    this.comunicacion.leerQR.subscribe(
      (estacion) => {
        this.historias.push(estacion);
      }
    );
    this.comunicacion.cargarPuntos.subscribe(
      (p) => {
        this.puntos += p;
        this.postas += 1;
      }
    )
  }

  login(){
    const dialogRefConsultar = this.dialog.open(LoginComponent, {
      height: '500px',
      width: '500px',
    });

    dialogRefConsultar.afterClosed().subscribe(result => {
      console.log(result);
      //this.historias.push({icon: "house", titulo: "Estación inicial", subtitulo: "primera estación", hora: "12:44"});
    });
  }

  escanear(){
    const dialogRefConsultar = this.dialog.open(EscanerComponent, {
      height: '500px',
      width: '500px',
    });

    dialogRefConsultar.afterClosed().subscribe(result => {
      console.log(result);
      //this.historias.push({icon: "house", titulo: "Estación inicial", subtitulo: "primera estación", hora: 0, puntos: 15});
    });
  }
}
