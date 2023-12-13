import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FoyerService} from "../../services/foyer.service";

@Component({
  selector: 'app-foyer-delete',
  templateUrl: './foyer-delete.component.html',
  styleUrls: ['./foyer-delete.component.css']
})
export class FoyerDeleteComponent implements OnInit {
  constructor(
    private foyerService: FoyerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.foyerService.deleteFoyerAndDesaffecterUniversite(id).subscribe(
        () => {
          alert('Foyer deleted successfully');
        },
        (error) => {
          console.error('Failed to delete foyer:', error);
          alert('Failed to delete foyer');
        }
      );
    }
  }
}
