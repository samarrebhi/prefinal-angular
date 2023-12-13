// etudiant-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllEtudiantComponent } from '../all-etudiant/all-etudiant.component';
import { AddEtudiantComponent } from '../add-etudiant/add-etudiant.component';
import { DeleteEtudiantComponent } from '../delete-etudiant/delete-etudiant.component';
import { QRcodeEtudiantComponent } from '../qrcode-etudiant/qrcode-etudiant.component';
import { UpdateEtudiantComponent } from '../update-etudiant/update-etudiant.component';

const routes: Routes = [
  { path: '', component: AllEtudiantComponent },
  { path: 'add-etudiant', component: AddEtudiantComponent },
  { path: 'update-etudiant', component: UpdateEtudiantComponent },
  { path: 'delete-etudiant', component: DeleteEtudiantComponent },
  { path: 'qrcode-etudiant', component: QRcodeEtudiantComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtudiantRoutingModule {}
