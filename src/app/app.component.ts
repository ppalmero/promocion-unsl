import { Component, inject, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { PuntosComponent } from "./componentes/puntos/puntos.component";
import { PostasComponent } from "./componentes/postas/postas.component";
import { HistorialComponent } from "./componentes/historial/historial.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EscanerComponent } from './componentes/escaner/escaner.component';
import { ComunicacionService } from './servicios/comunicacion.service';
import { LoginComponent } from './componentes/login/login.component';
import { ImageModalComponent } from './componentes/image-modal/image-modal.component';
import { DialogoFinalizarComponent } from './componentes/dialogo-finalizar/dialogo-finalizar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatDialogModule, ImageModalComponent,
    MatSidenavModule, MatButtonModule, MatIconModule, PuntosComponent, PostasComponent, HistorialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('imageModal') imageModal!: ImageModalComponent;

  title = 'promocion-unsl';
  showFiller = false;
  readonly dialog = inject(MatDialog);
  //historias: HistoriaModelo[] = [];
  puntos: number = 0;
  postas: number = 0;

  constructor(private comunicacion: ComunicacionService, private router: Router) {
    this.comunicacion.leerQR.subscribe(
      (estacion) => {
        console.log("estacion ID" + estacion.idHistoria);
        console.log(this.comunicacion.usuario.historias);
        if (this.comunicacion.usuario.historias.find(h => h.idHistoria == estacion.idHistoria)) {
          alert("Estación ya registrada");
        } else {
          this.comunicacion.addEstacion(estacion);
          this.puntos += estacion.puntos;
          this.postas += 1;
        }
      }
    );
    /* this.comunicacion.cargarPuntos.subscribe(
       (p) => {
         if (this.comunicacion.usuario.historias.find(h=> h.idHistoria == estacion.idHistoria)) {
           this.puntos += p;
           this.postas += 1;
         }
       }
     );*/
    this.comunicacion.loginUsuario.subscribe(
      (p) => {
        if (this.comunicacion.tieneHistorias()) {
          this.puntos = this.comunicacion.usuario.historias.map(u => u.puntos).reduce((acc, value) => acc + value, 0);
          this.postas = this.comunicacion.usuario.historias.length;
        }
      }
    )
  }

  redirigir() {
    console.log("click");
    //this.router.navigate(['estudia']);
    window.location.href = 'https://estudiainformatica.unsl.edu.ar';
  }

  login() {
    const dialogRefConsultar = this.dialog.open(LoginComponent, {
      height: '500px',
      width: '500px',
    });

    dialogRefConsultar.afterClosed().subscribe(result => {
      console.log(result);
      //this.historias.push({icon: "house", titulo: "Estación inicial", subtitulo: "primera estación", hora: "12:44"});
    });
  }

  escanear() {
    if (this.comunicacion.isLogIn()) {
      const dialogRefConsultar = this.dialog.open(EscanerComponent, {
        height: '500px',
        width: '500px',
      });

      dialogRefConsultar.afterClosed().subscribe(result => {
        console.log(result);
        //this.historias.push({icon: "house", titulo: "Estación inicial", subtitulo: "primera estación", hora: 0, puntos: 15});
      });
    } else {
      this.login();
    }
  }
  
  openImageModal(imageSrc: string) {
    this.imageModal.openModal(imageSrc);
  }

  finalizar() {
    if (this.comunicacion.isLogIn()) {
      const dialogRefConsultar = this.dialog.open(DialogoFinalizarComponent, {
        data: this.comunicacion.usuario,
        height: '500px',
        width: '350px',
      });

      dialogRefConsultar.afterClosed().subscribe(result => {
        console.log(result);
        //this.historias.push({icon: "house", titulo: "Estación inicial", subtitulo: "primera estación", hora: 0, puntos: 15});
      });
    } else {
      this.login();
    }
  }
}
