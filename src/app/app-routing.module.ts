import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import {FoyerDeleteComponent} from "./gestion foyer/foyer-delete/foyer-delete.component";
import {FoyerUpdateComponent} from "./gestion foyer/foyer-update/foyer-update.component";
import {FoyerAddComponent} from "./gestion foyer/foyer-add/foyer-add.component";
import {FoyerListComponent} from "./gestion foyer/foyer-list/foyer-list.component";


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/Foyer',
        pathMatch: 'full',
      },
      {
        path: 'etudiant',
        loadChildren: () =>
          import('../app/gestion etudiant/etudiant/etudiant.module').then(
            (m) => m.EtudiantModule
          ),
      },
      {
        path: 'Foyer',
        loadChildren: () =>
          import('../app/gestion foyer/foyer/foyer.module').then(
            (m) => m.FoyerModule
          ),
      },
      {path:'bloc',loadChildren:()=>import('../app/gestion bloc/blocmodule/blocmodule.module').then((t)=>t.BlocmoduleModule)},
      {
        path: 'Chambre',
        loadChildren: () =>
          import('../app/gestion Chambre/ChambreRoute/Chambre.module').then(
            (c) => c.ChambreModule
          ),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
