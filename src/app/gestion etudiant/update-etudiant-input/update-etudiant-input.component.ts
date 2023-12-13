import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/servicess/etudiant.service';

@Component({
  selector: 'app-update-etudiant-input',
  templateUrl: './update-etudiant-input.component.html',
  styleUrls: ['./update-etudiant-input.component.scss']
})
export class UpdateEtudiantInputComponent implements OnInit {
  @Input() etudiant: Etudiant = new Etudiant();
  @Output() updateUser = new EventEmitter();

  
  


  constructor(
    private s: EtudiantService,
    private ac: ActivatedRoute,
    private router: Router,
   
  ) {}

  ngOnInit() {
 

    const EtudiantId = this.ac.snapshot.params['id'];

    if (EtudiantId) {
      this.s.getEtudiantById(EtudiantId).subscribe(
        (data) => {
          this.etudiant = data;

        }
      );
    }
  }

  update(u:Etudiant): void {
    const id= Number(this.etudiant.idEtudiant);
            this.s.updateEtudiant(u,id).subscribe();
            alert('Etudiant '+this.etudiant.idEtudiant+' bien modifié')
      };
      
@Output() hidesectionevent = new EventEmitter<void>();
    isHidden: boolean = false;
    hidesection() {
        this.isHidden = true;
        this.hidesectionevent.emit();
    }


  
}
