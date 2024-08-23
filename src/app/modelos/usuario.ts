import { HistoriaModelo } from "./historia-modelo";

export interface Usuario {
    id: number,
    nombre: string,
      apellido: string,
      dni: string,
      escuela: string,
      fechaNacimiento: string,
      historias: HistoriaModelo[],
      keyGen: string,
}
