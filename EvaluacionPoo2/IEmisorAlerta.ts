import { IReceptorAlerta } from "./IReceptorAlerta";
 
export interface IEmisorAlerta {
  registrarReceptor(receptor: IReceptorAlerta): void;
  darDeBajaReceptor(receptor: IReceptorAlerta): void;
  notificarReceptores(): void;
}