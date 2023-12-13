import {Component, EventEmitter, Input, Output} from '@angular/core';

import {ChambreService} from "../ChambreService/chambre-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Chambre, TypeChambre} from "../../models/Chambre";


@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent {

  @Input() showAddChambre: boolean;
  @Output() hideAddChambreEvent = new EventEmitter<void>();



  myForm: FormGroup;

  chambre: Chambre = {idChambre : 0 , numeroChambre: 1, typeChambre: TypeChambre.SIMPLE,  bloc: { nomBloc: "A",capaciteBloc :0, idBloc:0 } };
  ajoutReussi: boolean = false;
  chambreExiste: boolean = false;

  constructor(private chambreService: ChambreService , private fb: FormBuilder) {}
  typeChambre = Object.values(TypeChambre);

  addChambre() {
    // Assurez-vous de mettre à jour l'objet chambre avec les valeurs du formulaire

    this.chambre = this.myForm.value;
    this.chambreService.addChambre(this.chambre).subscribe((result) => {
      console.log('Chambre ajoutée avec succès :', result);
      this.ajoutReussi = true;


    });
  }

 /* addChambre() {
    const numeroChambre = this.myForm.get('numeroChambre')?.value;

    if (numeroChambre) {
      this.chambreService.checkChambreExistence(numeroChambre).subscribe((chambreExiste: boolean) => {
        if (chambreExiste) {
          console.log('La chambre existe déjà :', numeroChambre);
          this.chambreExiste = true;
        } else {
          this.chambre = this.myForm.value;
          this.chambreService.addChambre(this.chambre).subscribe((result) => {
            console.log('Chambre ajoutée avec succès :', result);
            this.ajoutReussi = true;
            this.refresh(); // Optionnel : Rafraîchissez la page après l'ajout
          });
        }
      });
    }
  }*/

  refresh(): void {
    setTimeout(() => {
      this.ajoutReussi = false;
    }, 3000);
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      idChambre: ['', [Validators.required]],
      numeroChambre: ['', [Validators.required]],
      typeChambre: ['', [Validators.required]],
      bloc: ['', Validators.required],
    });

  }

/////////////
  /*affecterChambreABloc() {
    // Vous pouvez ajouter des validations du formulaire ici si nécessaire

    const numerosChambre = [this.myForm.value.numeroChambre]; // Utilisation du numéro de chambre du formulaire
    const nomBloc = 'NomDuBloc'; // Remplacez cela par le nom du bloc réel

    this.chambreService.affecterChambresABloc(numerosChambre, nomBloc).subscribe(
      (result) => {
        console.log('Chambre affectée avec succès au bloc:', result);
        // Mettez à jour votre liste de chambres ou effectuez d'autres actions ici
      },
      (error) => {
        console.error('Erreur lors de l\'affectation de la chambre au bloc:', error);
        // Gérez les erreurs ici
      }
    );
  }*/


}
