import {Bloc} from "./Bloc";


export enum TypeChambre {
  DOUBLE = 'DOUBLE',
  SIMPLE = 'SIMPLE',
  TRIPLE = 'TRIPLE',
}

export class Chambre {

    idChambre!: number;
    numeroChambre?: number;
   typeChambre?: TypeChambre ;
    bloc?: Bloc;



    constructor(idChambre: number, numeroChambre: number, typeChambre: TypeChambre,  ) {
        this.idChambre = idChambre;
        this.numeroChambre = numeroChambre;
        this.typeChambre = typeChambre;


    }
}
