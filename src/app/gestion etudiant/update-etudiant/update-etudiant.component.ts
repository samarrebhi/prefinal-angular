import { Component} from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/servicess/etudiant.service';
@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.scss']
})
export class UpdateEtudiantComponent {
  constructor(private service:EtudiantService){}
     
    Etudiant: any;
    cinInput:string='';
    etudiantId: number; // Property to store the id

    trouver(){
    const cin = Number(this.cinInput);
      
      // Fetch data by cin from the service
      this.service.getEtudiantByCin(cin).subscribe((result:Etudiant) => {
        this.Etudiant = result;
        console.log(result);
       
         // Store the id in the class property
     // Check if this.Etudiant is not null or undefined before accessing its properties
          if (result!==null) {this.etudiantId = this.Etudiant?.idEtudiant;
            console.log(this.etudiantId);}

           else {console.error('this.Etudiant is null or undefined');}
});}
    
   // test form values yetkraw wale before updating 
  show(u:Etudiant){
    console.log('Form value:', u);}

   // en cliquant sur update
    onSubmit(u:Etudiant){
      const id= Number(this.etudiantId);
            this.service.updateEtudiant(u,id).subscribe();
            alert('Etudiant '+this.cinInput+' bien modifié')}
   

}