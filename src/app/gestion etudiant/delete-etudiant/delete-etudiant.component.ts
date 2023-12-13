import { Component} from '@angular/core';
import { EtudiantService } from 'src/app/servicess/etudiant.service';
@Component({
  selector: 'app-delete-etudiant',
  templateUrl: './delete-etudiant.component.html',
 
})
export class DeleteEtudiantComponent {
  constructor(private service:EtudiantService
   ){}

   Etudiant: any;
  cinInput:string='';
  etudiantId: number; // Property to store the id

  supprimer() {
    const cin = Number(this.cinInput);
  
    this.service.getEtudiantByCin(cin).subscribe(
      (result) => {
        if (result) {
          this.Etudiant = result;
          // Store the id in the class property
          this.etudiantId = this.Etudiant.idEtudiant;
  
          if (this.etudiantId) {
            this.service.removeEtudiant(this.etudiantId).subscribe(
              () => {
                alert('Etudiant bien supprimé');},
              (error) => {
                console.error('Erreur de suppression:', error);
                alert('Erreur de suppression');});} } else {
          alert('Etudiant non existant.');}},);};}
  
    
   
     
      