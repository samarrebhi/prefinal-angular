import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BlocServiceService } from 'src/app/servicess/bloc-service.service';
import { FoyerServiceService } from 'src/app/servicess/foyer-service.service';
import {Foyer} from "../../models/Foyer";
import {Bloc} from "../../models/Bloc";

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.scss']
})
export class AddBlocComponent implements OnInit {
  blocForm: FormGroup;
  foyers!: Foyer[]; // Assurez-vous de remplacer par le type réel de votre modèle Foyer

  constructor(
    private fb: FormBuilder,
    private blocService: BlocServiceService,
    private foyerService: FoyerServiceService,
    private snackBar: MatSnackBar
  ) {
    this.blocForm = this.fb.group({
      nomBloc: ['',[Validators.required,Validators.minLength(3)]],
      capaciteBloc: [null, [ Validators.required, Validators.pattern('^[0-9]+$')  ]],
      foyer: [[]] // La valeur par défaut est un tableau vide
    });
  }

  ngOnInit(): void {
    // Récupérez la liste des Foyers depuis votre service
    this.foyerService.findAllFoyers().subscribe((data) => {
      this.foyers = data;
      console.log(data)
    });
  }

  onSubmit() {
    // Utilize the form values to create the Bloc
    const newBloc: Bloc = this.blocForm.value;

    // Call your service to add the Bloc
    this.blocService.addBloc(newBloc).subscribe((result) => {
      console.log('Bloc ajouté avec succès :', result);
  alert("ajout avec succés")
      // Access the selected Foyer's nomFoyer from the form
      let selectedFoyerNom: string = this.blocForm.get('foyer')?.value[0]?.nomFoyer;
      console.log(this.blocForm.get('foyer')?.value[0]?.nomFoyer)
      console.log(result.nomBloc.toLowerCase())
      // Affect the Bloc to the selected Foyer
      this.blocService.affecterBlocAFoyer(result.nomBloc.toLowerCase(),selectedFoyerNom)
        .subscribe((resultAffectation) => {

        //  console.log('affectation faite avec succès :',resultAffectation);
          this.snackBar.open('Affectation faite avec succès', 'Fermer', {
            duration: 3000,  // Set the duration for the notification
            horizontalPosition: 'center',  // Optional: Set the horizontal position
            verticalPosition: 'top',  // Optional: Set the vertical position

          });

          // Reset the form after submission if necessary
          this.blocForm.reset();
        });
    });
  }
}
