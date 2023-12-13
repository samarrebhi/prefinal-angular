import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ChambreService } from '../ChambreService/chambre-service.service';
import {Chambre} from "../../models/Chambre";

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent implements OnInit {
  chambreForm: FormGroup;
  idChambre: number;
    modificationReussie: boolean = false;
    typeChambre: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private chambreService: ChambreService
  ) {
    this.chambreForm = this.formBuilder.group({
      numeroChambre: ['', Validators.required],
      typeChambre: ['', Validators.required],
      // ... autres champs de la chambre
    });
  }

  ngOnInit(): void {
    const idChambreParam = this.route.snapshot.params['id'];
      this.typeChambre = ['SIMPLE', 'DOUBLE', 'TRIPLE'];
    // Vérifiez si idChambreParam est une valeur numérique
    if (!isNaN(idChambreParam as any)) {
      this.idChambre = +idChambreParam;
      this.loadChambreDetails();
    } else {
      console.error('ID de chambre non valide :', idChambreParam);
    }
  }

  loadChambreDetails(): void {
    this.chambreService.getChambreById(this.idChambre).subscribe(
      (chambre) => {
        if (chambre) {
          // Pré-remplit le formulaire avec les détails de la chambre
          this.chambreForm.patchValue({
            numeroChambre: chambre.numeroChambre,
            typeChambre: chambre.typeChambre,
            // ... autres champs de la chambre
          });
        } else {
          console.error('Chambre introuvable');
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails de la chambre :', error);
      }
    );
  }

  updateChambre(): void {
    if (this.chambreForm.valid) {
      const updatedChambre: Partial<Chambre> & { idChambre: number } = {
        idChambre: this.idChambre,
        ...this.chambreForm.value,
        // ... autres champs de la chambre
      };

      this.chambreService.updateChambre(updatedChambre).subscribe(
        () => {
          console.log('Chambre mise à jour avec succès');
            this.modificationReussie = true;
        },

        (error) => {
          console.error('Erreur lors de la mise à jour de la chambre :', error);
        }
      );
    }
  }
}
