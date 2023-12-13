import {Component, OnInit, ViewChild} from '@angular/core';

import {MatSnackBar} from "@angular/material/snack-bar";
import {Foyer} from "../../models/Foyer";
import {FoyerService} from "../../services/foyer.service";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-foyer-list',
  templateUrl: './foyer-list.component.html',
  styleUrls: ['./foyer-list.component.css']
})
export class FoyerListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 2; // page size
  pageIndex = 0;
  length = 0; // number of items
  displayedFoyers: Foyer[] = [];

  isFoyerSaturated(foyer: Foyer): boolean {
    return foyer.bloc.length >= foyer.capaciteFoyer;
  }

  downloadPDF(): void {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Foyer List', 10, 10);

    const columns = [
      { header: 'Nom Foyer', dataKey: 'nomFoyer' },
      { header: 'Capacite Foyer', dataKey: 'capaciteFoyer' },
      { header: 'Universite', dataKey: 'nomUniversite' },
      { header: 'Blocs', dataKey: 'blocs' },
      { header: 'Est sature', dataKey: 'isSaturated' },
    ];

    const data = this.foyers.map((foyer) => ({
      nomFoyer: foyer.nomFoyer,
      capaciteFoyer: foyer.capaciteFoyer,
      nomUniversite: foyer.universite ? foyer.universite.nomUniversite : '',
      blocs: foyer.bloc.map((bloc) => bloc.nomBloc).join(', '),
      isSaturated: this.isFoyerSaturated(foyer) ? 'Yes' : 'No',
    }));

    (doc as any).autoTable({
      columns: columns,
      body: data.map((item) =>
        columns.map((column) => {
          // @ts-ignore
          return item[column.dataKey];
        })
      ),
      startY: 20,
    });

    doc.save('foyer-list.pdf');
  }


  foyers: Foyer[] = [];
  search = '';
  usertoSelected!: Foyer;
  show = false;

  constructor(private foyerservice: FoyerService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.foyerservice.getFoyer().subscribe((d) => {
      this.foyers = d;
      this.length = this.foyers.length;
      this.updateDisplayedFoyers();
    });
  }

  deleteFoyerById(id: number): void {
    const snackBarRef = this.snackBar.open(
      'Are you sure you want to delete this foyer?',
      'Delete',
      {
        duration: 5000,
      }
    );

    snackBarRef.onAction().subscribe(() => {
      this.foyerservice.deleteFoyerAndDesaffecterUniversite(id).subscribe(
        () => {
          this.foyers = this.foyers.filter((foyer) => foyer.idFoyer !== id);
          this.showSnackBar('Foyer deleted successfully');
          this.updateDisplayedFoyers();
        },
        (error) => {
          console.error('Failed to delete foyer:', error);
          this.showSnackBar('Failed to delete foyer');
        }
      );
    });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  update(foyer: Foyer) {
    console.log('Selected Foyer:', foyer);
    this.usertoSelected = foyer;
    this.show = true;
  }

  changeTab(e: any) {
    this.show = false;
    for (let i = 0; i < this.foyers.length; i++) {
      if (this.foyers[i].idFoyer == e.id) {
        this.foyers[i] = e;
      }
    }
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.updateDisplayedFoyers();
  }

  private updateDisplayedFoyers(): void {
    const startIndex = this.pageIndex * this.pageSize;
    this.displayedFoyers = this.foyers.slice(startIndex, startIndex + this.pageSize);
  }
}
