import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BlocServiceService } from 'src/app/servicess/bloc-service.service';

@Component({
  selector: 'app-delete-bloc',
  templateUrl: './delete-bloc.component.html',
  styleUrls: ['./delete-bloc.component.scss']
})
export class DeleteBlocComponent implements OnInit {
  deleteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private blocService: BlocServiceService ,private snackBar: MatSnackBar ) {
    this.deleteForm = this.formBuilder.group({
      idBloc: ['']
    });
  }

  ngOnInit(): void {
   
  }

  onSubmit() {
    const blocId = this.deleteForm.value.idBloc;
    this.blocService.removeBloc(blocId).subscribe(
      () => {
        console.log('Bloc supprimé avec succès');

        this.snackBar.open('Bloc supprimé avec succès', 'Fermer', {
          duration: 3000,  // Set the duration for the notification
          horizontalPosition: 'center',  // Optional: Set the horizontal position
          verticalPosition: 'top', 
        });
        // Ajoutez des actions supplémentaires si nécessaire (par exemple, rediriger vers une autre page)
      },
      error => {
        console.error('Erreur lors de la suppression du bloc:', error);
        // Gérez les erreurs ici
      }
    );
  }
}


