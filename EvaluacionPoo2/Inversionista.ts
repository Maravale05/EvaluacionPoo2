import { IReceptorAlerta } from "./IReceptorAlerta";
 
export class Inversionista implements IReceptorAlerta {
  private nombre: string;
 
  constructor(nombre: string) {
    this.nombre = nombre;
  }
 
  actualizar(nombreAccion: string, nuevoPrecio: number): void {
    console.log(
      ` ${this.nombre} recibe alerta: "${nombreAccion}" ahora vale $${nuevoPrecio}`
    );
  }
}