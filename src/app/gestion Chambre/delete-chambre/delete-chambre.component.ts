import { Component } from '@angular/core';
import { ChambreService } from '../ChambreService/chambre-service.service';

@Component({
  selector: 'app-delete-chambre',
  templateUrl: './delete-chambre.component.html',
  styleUrls: ['./delete-chambre.component.css']
})
export class DeleteChambreComponent {
  idChambre: number | null = 0; // Assurez-vous d'initialiser idChambre


  constructor(private chambreService: ChambreService) {}

  deleteChambre() {
    if (this.idChambre !== null) {
      const url = `${this.chambreService.baseUrl}/deleteChamberById/${this.idChambre}`;
      console.log(`Tentative de suppression de la chambre avec ID: ${this.idChambre}`);
      console.log(`URL de suppression: ${url}`);

      this.chambreService.deleteChambreById(this.idChambre).subscribe(
        (data) => {
          console.log('Réponse de suppression:', data);
          // Ajoutez ici d'autres actions à effectuer après la suppression
        },
        (error) => {
          console.error(`Erreur lors de la suppression de la chambre: ${error}`);
          // Ajoutez ici d'autres actions en cas d'erreur
        }
      );
    } else {
      console.log('ID de chambre est null. La suppression est annulée.');
    }
  }
  refresh(): void {
    window.location.reload();
  }
}
