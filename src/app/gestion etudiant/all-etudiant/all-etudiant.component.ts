import { Component, OnInit, SimpleChanges,ViewChild } from '@angular/core';
import { EtudiantService } from 'src/app/servicess/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-all-etudiant',
  templateUrl: './all-etudiant.component.html',
  styleUrls: ['./all-etudiant.component.scss']
})
export class AllEtudiantComponent implements OnInit {
  Etudiants: Etudiant[] = [];
  search = '';
  Etudiant: any;
  pageIndex: number;
  pageSize: number;

  constructor(private service: EtudiantService, private router: Router) {}
  ngOnInit(): void {
    this.getall();
    this.updateDisplayedEtudiant();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)   
   }
  getall(): void {
    this.service.getEtudiantList().subscribe((Etudiants) => {
      console.log('La liste des étudiants:', Etudiants);
      this.Etudiants = Etudiants;
    });
  }
  generateQRCodeForEtudiants(): void {
    const dataToEncode = JSON.stringify(this.Etudiants);

    // Save data to local storage so it can be retrieved in QRcodeEtudiantComponent
    localStorage.setItem('qrCodeData', dataToEncode);

    this.router.navigate(['etudiant/qrcode-etudiant']);
  }

  etudianttoSelected!: Etudiant;
  show = false;

  updateinput(etudiant: Etudiant) {
    console.log('Selected Etudiant:', etudiant);
    this.etudianttoSelected = etudiant;
    this.show = true;
  }
  private updateDisplayedEtudiant(): void {
    const startIndex = this.pageIndex * this.pageSize;
    this.updateDisplayedEtudiant = this.Etudiant.slice(startIndex, startIndex + this.pageSize);
  }
  changeTab(e: any) {
    this.show = false;
    for (let i = 0; i < this.Etudiant.length; i++) {
      if (this.Etudiant[i].idEtudiant == e.id) {
        this.Etudiant[i] = e;
      }}}
   
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.updateDisplayedEtudiant();
  }
}
