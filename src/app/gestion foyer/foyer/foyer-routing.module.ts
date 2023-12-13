import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoyerListComponent} from "../foyer-list/foyer-list.component";
import {FoyerDeleteComponent} from "../foyer-delete/foyer-delete.component";
import {FoyerUpdateComponent} from "../foyer-update/foyer-update.component";
import {FoyerAddComponent} from "../foyer-add/foyer-add.component";

const routes: Routes = [
    { path: '', component: FoyerListComponent },
    { path: 'add', component: FoyerAddComponent },
    { path: 'update/:id', component: FoyerUpdateComponent },
    { path: 'delete/:id', component: FoyerDeleteComponent },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FoyerRoutingModule { }
