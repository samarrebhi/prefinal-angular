import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BlocComponent } from '../bloc/bloc.component';
import { AddBlocComponent } from '../add-bloc/add-bloc.component';
import { DeleteBlocComponent } from '../delete-bloc/delete-bloc.component';
import { UpdateBlocComponent } from '../update-bloc/update-bloc.component';
import { UpdateBlocfbComponent } from '../update-blocfb/update-blocfb.component';

const routes: Routes = [


  {
    path: '', component: BlocComponent },
      { path: 'add', component: AddBlocComponent },
    
      { path: 'delete', component:DeleteBlocComponent },
      { path: 'Update', component: UpdateBlocComponent },
      { path: 'Update/:id', component: UpdateBlocfbComponent },
    
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocmoduleRoutingModule { }
