import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChambreComponent} from "../chambre/chambre.component";
import {AddChambreComponent} from "../add-chambre/add-chambre.component";
import {UpdateChambreComponent} from "../update-chambre/update-chambre.component";
import {DeleteChambreComponent} from "../delete-chambre/delete-chambre.component";
import {StatComponent} from "../Stat/stat.component";

const routes: Routes = [
    {path:'',component:ChambreComponent},
    {path:'add',component:AddChambreComponent},
    {path:'update/:id',component:UpdateChambreComponent},
    { path:'delete/:id', component: DeleteChambreComponent},
    { path:'stat', component: StatComponent},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChambreRoutingModule { }
