
import { IEmisorAlerta } from "./IEmisorAlerta";
import { IReceptorAlerta } from "./IReceptorAlerta";
 
export class Accion implements IEmisorAlerta {
  private nombre: string;
  private _precio: number;
  private receptores: IReceptorAlerta[] = [];
 
  constructor(nombre: string, precioInicial: number) {
    this.nombre = nombre;
    this._precio = precioInicial;
  }
 
  get precio(): number {
    return this._precio;
  }
 
  set precio(nuevoPrecio: number) {
    console.log(
      `\n[Bolsa] Precio de "${this.nombre}" cambia: $${this._precio} → $${nuevoPrecio}`
    );
    this._precio = nuevoPrecio;
    this.notificarReceptores();
  }
 
  registrarReceptor(receptor: IReceptorAlerta): void {
    this.receptores.push(receptor);
  }
 
  darDeBajaReceptor(receptor: IReceptorAlerta): void {
    this.receptores = this.receptores.filter((r) => r !== receptor);
  }
 
  notificarReceptores(): void {
    for (const receptor of this.receptores) {
      receptor.actualizar(this.nombre, this._precio);
    }
  }
}