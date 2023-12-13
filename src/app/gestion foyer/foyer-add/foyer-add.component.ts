import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Foyer} from "../../models/Foyer";
import {Universite} from "../../models/Universite";
import {Bloc} from "../../models/Bloc";
import {FoyerService} from "../../services/foyer.service";
import {UniversiteService} from "../../services/universite.service";
import {BlocService} from "../../services/bloc.service";

@Component({
  selector: 'app-foyer-add',
  templateUrl: './foyer-add.component.html',
  styleUrls: ['./foyer-add.component.css']
})
export class FoyerAddComponent implements OnInit {
  foyer: Foyer = new Foyer();
  universites: Universite[] = [];
  blocs: Bloc[] = [];
  selectedBlocs: Bloc[][] = [[]]; // Initialize with an empty dropdown


  constructor(
    private foyerService: FoyerService,
    private universiteService: UniversiteService,
    private blocService: BlocService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadUniversites();
    this.loadBlocs();
  }

  saveUser(): void {
    // Extract ids from selectedBlocs
    const idBloc: number[] = this.selectedBlocs.flatMap(blocs => blocs.map(bloc => bloc.idBloc));

    const confirmationMessage = 'Are you sure you want to add this foyer and associate it with the selected university and blocs?';

    const snackBarRef = this.snackBar.open(confirmationMessage, 'Add', {
      duration: 5000,
    });

    snackBarRef.onAction().subscribe(() => {
      this.foyerService.addFoyerAndAssociateUniversiteAndBloc(
        this.foyer,
        this.foyer.universite.idUniversite,
        idBloc // Pass the flat array of bloc ids
      ).subscribe(
        (response) => {
          this.showSnackBar('Added successfully and associated with university and bloc');
          this.router.navigate(['/Foyer']);
        },
        (error) => {
          console.error('Failed to add and associate with university and bloc:', error);
          this.showSnackBar('Failed to add and associate with university and bloc');
        }
      );
    });
  }

  private loadUniversites(): void {
    this.universiteService.getUniversite().subscribe(
      (data) => {
        this.universites = data;
      },
      (error) => {
        console.error('Failed to load universites:', error);
      }
    );
  }

  private loadBlocs(): void {
    this.blocService.getBlocs().subscribe(
      (data) => {
        this.blocs = data;
      },
      (error) => {
        console.error('Failed to load blocs:', error);
      }
    );
  }

  addDropdown(): void {
    this.selectedBlocs.push([]); // Create a new empty array
  }

  removeDropdown(index: number): void {
    if (this.selectedBlocs.length > 1) {
      this.selectedBlocs.splice(index, 1); // Remove the dropdown at the specified index
    } else {
      this.showSnackBar('At least one Bloc must be chosen.');
    }
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
  isAddDisabled(): boolean {
    const totalBlocks = this.selectedBlocs.reduce((total, blocs) => total + blocs.length, 0);

    return totalBlocks > this.foyer.capaciteFoyer;
  }
}
