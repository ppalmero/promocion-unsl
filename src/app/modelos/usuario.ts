import { HistoriaModelo } from "./historia-modelo";

export interface Usuario {
    id: number,
    nombre: string,
      apellido: string,
      dni: string,
      escuela: string,
      email: string,
      historias: HistoriaModelo[],
      keyGen: string,
      envioDatos: boolean,
}
