import { Component, OnInit } from '@angular/core';
import { BlocServiceService } from 'src/app/servicess/bloc-service.service';
import {Bloc} from "../../models/Bloc";

@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.scss']
})
export class UpdateBlocComponent implements OnInit {
  showUpdateBlocForm = false;
  blocs: Bloc[] = [];
  blocToUpdate: Bloc = new Bloc();

  constructor(private blocService: BlocServiceService) {}

  ngOnInit(): void {
    this.blocService.getBloc().subscribe(
      (data) => {
        console.log(data);
        this.blocs = data;
      }
    );
  }

  updateBloc(bloc: Bloc) {
    this.showUpdateBlocForm = true;
    this.blocToUpdate = bloc;
  }

  handleNotification(event: any) {
    this.showUpdateBlocForm = !this.showUpdateBlocForm;
  }
}
