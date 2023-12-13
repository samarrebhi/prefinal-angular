import { Chambre } from "./Chambre";
import { Foyer } from "./Foyer";

export class Bloc{
  idBloc!:number;
  nomBloc!:String;
  capaciteBloc!:number;
  chambres?: Chambre[];
  foyer?: Foyer;
}
