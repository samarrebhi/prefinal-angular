import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocServiceService } from 'src/app/servicess/bloc-service.service';
import {Bloc} from "../../models/Bloc";

@Component({
  selector: 'app-update-blocfb',
  templateUrl: './update-blocfb.component.html',
  styleUrls: ['./update-blocfb.component.scss']
})
export class UpdateBlocfbComponent implements OnInit {
  blocId: number;
  bloc: Bloc = new Bloc();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blocService: BlocServiceService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');

      // Check if idParam is not null or undefined
      if (idParam !== null && idParam !== undefined) {
        this.blocId = +idParam;
        this.loadBloc();
      } else {
        // Handle the case when 'id' parameter is not present
        console.error("'id' parameter is missing");
        // You might want to redirect to an error page or handle it in another way
      }
    });
  }

  loadBloc() {
    this.blocService.getBlocById(this.blocId).subscribe(
      (bloc: Bloc) => {
        this.bloc = bloc;
      },
      error => {
        console.error(error);
      }
    );
  }

  updateBloc() {
    this.blocService.editBloc(this.bloc).subscribe(
      data => {
        console.log('Bloc updated successfully');
        // Redirect to the bloc list or any other page
        this.snackBar.open('Bloc updated successfully :DDDDDD', 'Fermer', {
          duration: 4000,  // Set the duration for the notification
          horizontalPosition: 'center',  // Optional: Set the horizontal position
          verticalPosition: 'top',  // Optional: Set the vertical position

        });
        this.router.navigate(['/bloc']);
      },
      error => {
        console.error(error);
        // Handle error if needed
      }
    );
  }
}
