import {Component, SimpleChanges} from '@angular/core';
import {Chambre, TypeChambre} from "../../models/Chambre";
import {ChambreService} from "../ChambreService/chambre-service.service";
import {MatDialog} from "@angular/material/dialog";
import {debounceTime} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import jsPDF from "jspdf";

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent {
    showAddChambre: boolean = false;
  chambreToUpdate : Chambre;
  show =false;
  update(chambre:any){
    this.show =true;
    this.chambreToUpdate=chambre;
  }
    toggleAddChambre() {
        this.showAddChambre = !this.showAddChambre;
    }

    searchForm: FormGroup;
    chambres!: Chambre[];
    numeroChambre: number | undefined;
    showConfirmation: boolean = false;
    selectedChambre: Chambre;
    types: string[] = ['SIMPLE', 'DOUBLE', 'TRIPLE'];
    selectedType: string;

    constructor(private fb: FormBuilder, private chambreService: ChambreService, private router: Router) {
        this.searchForm = this.fb.group({
            numeroChambre: [''],
        });
    }

    ngOnInit(): void {
        this.chambreService.getChambre().subscribe(
            (chambres: Chambre[]) => {
                this.chambres = chambres;
                this.searchForm.get('numeroChambre')?.valueChanges
                    .pipe(debounceTime(300))
                    .subscribe(value => {
                        if (value) {
                            this.findChambreByNumero(value);
                        }
                    });

            }
        );
    }

    public hideAddChambre() {
        this.showAddChambre = false;
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
    }
    deleteChambre(id: number): void {

        this.chambreService.deleteChambre(id).subscribe(
            () => {
                console.log('Chambre supprimée avec succès');
                // Filtrer la chambre supprimée du tableau chambres
                this.chambres = this.chambres.filter(chambre => chambre.idChambre !== id);
                this.showConfirmation = false;
            },
            error => {
                console.error('Erreur lors de la suppression de la chambre :', error);
            }
        );
    }

    findChambreByNumero(numeroChambre: string) {
        if (numeroChambre) {
            this.chambreService.findChambreByNumero(parseInt(numeroChambre, 10))
                .subscribe((chambre) => {
                    this.chambres = chambre ? [chambre] : [];
                });
        } else {
            // Gérer le cas où le numéro de chambre est vide
            this.chambres = [];
        }
    }


    updateChambre(idChambre: number): void {
        this.chambreService.getChambreById(idChambre).subscribe(
            (chambre) => {
                // Redirige vers la page de mise à jour avec les détails de la chambre
                this.router.navigate(['Chambre/update', idChambre], {});

            },
            (error) => {
                console.error('Erreur lors de la récupération des détails de la chambre :', error);
            }
        );
    }

    findChambreByType(): void {
        if (this.selectedType) {
            this.chambreService.findChambreByType(this.selectedType)
                .subscribe(
                    (chambres: Chambre[]) => {
                        this.chambres = chambres;
                        console.log('Chambres avec le type sélectionné :', this.chambres);
                        // Gérez les chambres récupérées ici, par exemple, les afficher dans votre template
                    },
                    (error) => {
                        console.error('Erreur lors de la récupération des chambres :', error);
                        // Gérez les erreurs ici
                    }
                );
        } else {
            console.log('Aucun type sélectionné');
        }
    }

    protected readonly Chambre = Chambre;


    downloadPDF() {
        this.chambreService.getChambre().subscribe((chambres) => {
            const doc = new jsPDF();
            let y = 10;

            chambres.forEach((chambre) => {
                doc.text(`ID Chambre: ${chambre.idChambre}`, 10, y);
                doc.text(`Numéro Chambre: ${chambre.numeroChambre}`, 10, y + 10);
                doc.text(`Type Chambre: ${chambre.typeChambre}`, 10, y + 20);
                //doc.text(`Nom Bloc: ${chambre.bloc?.nomBloc ?? 'N/A'}`, 10, y + 30);
                //doc.text(`Capacité Bloc: ${chambre.bloc.capaciteBloc}`, 10, y + 40);
                //doc.text(`ID Bloc: ${chambre.bloc.idBloc}`, 10, y + 50);

                y += 60;
            });

            // Enregistrement du fichier PDF avec un nom générique
            doc.save('ListeChambres.pdf');
        });
    }
}
