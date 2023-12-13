import {Component, OnInit, SimpleChanges} from '@angular/core';
import { BlocServiceService } from 'src/app/servicess/bloc-service.service';
import { ChambreServiceService } from 'src/app/servicess/chambre-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogWarnComponent } from 'src/app/gestion bloc/dialog-warn/dialog-warn.component';
import {Bloc} from "../../models/Bloc";
@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.scss']
})
export class BlocComponent implements OnInit {
  blocs!: Bloc[];
  blocsWithChambres: any[] = [];

  constructor(
    private blocService: BlocServiceService,
    private chambreService: ChambreServiceService,
    public dialog :MatDialog
  ) {}

  ngOnInit(): void {
    this.blocService.getBloc().subscribe(
      (blocs: Bloc[]) => {
        this.blocs = blocs;
        this.loadChambresForBlocs();
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  loadChambresForBlocs() {
    this.blocs.forEach(bloc => {
      this.chambreService.searchChambresByBloc(bloc.idBloc).subscribe(
        (chambres: any[]) => {
          this.blocsWithChambres.push({
            bloc: bloc,
            chambres: chambres
          });
        }
      );
    });
  }



  OpenDialog(){
this.dialog.open(DialogWarnComponent, {
  height: '140px',
  width: '400px',

});

  }

  deleteBloc(id: number) {
    this.blocService.removeBloc(id).subscribe(() => {
      // Remove the bloc from the local data
      this.blocsWithChambres = this.blocsWithChambres.filter(item => item.bloc.idBloc !== id);
    });
  }
}




