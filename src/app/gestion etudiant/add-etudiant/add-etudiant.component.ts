import { Component } from '@angular/core';
import { EtudiantService } from 'src/app/servicess/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent {
  
  Etudiant=new Etudiant()
  chooseform: boolean; 

  constructor(private EtudiantService: EtudiantService,private formBuilder: FormBuilder)
   {}
  chooseformtrue(){
    this.chooseform=true;
  }
  chooseformfalse(){
    this.chooseform=false;
    this.etudiantForm = this.formBuilder.group({
      nomEt: ['', [Validators.required, Validators.minLength(5)]],
      prenomEt: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      ecole: ['', Validators.required],
      mdp: ['', [Validators.required, Validators.maxLength(10)]],
      dateNaissance: ['', Validators.required],
      cin: ['', Validators.required],
      // Add other form controls as needed
    });}
// tester les inputs 
show(u:Etudiant){
  console.log('Form value:', u);}
// ajouter l'étudiant par le template driven
saveEtudiant(u:Etudiant){
this.EtudiantService.addEtudiant(u).subscribe(
  (response) => {
    console.log('Response from server:', response);
    alert('etudiant ajouté');
  },
  (error) => {
    console.error('Error adding Etudiant:', error);}
);;}
//reactive form 
etudiantForm: FormGroup;
//ajout de l'étudiant par le reactive forùm
saveEtudiant2(formData:Etudiant) {
  this.EtudiantService.addEtudiant(formData).subscribe(
    (response) => {
     
      console.log('Response from server:', response);
      alert('etudiant ajouté');
    },
    (error) => {
      console.error('Error adding Etudiant:', error);}
  );;console.log(formData);}}

