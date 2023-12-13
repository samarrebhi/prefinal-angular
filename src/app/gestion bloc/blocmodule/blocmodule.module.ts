import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocmoduleRoutingModule } from './blocmodule-routing.module';
import { AddBlocComponent } from '../add-bloc/add-bloc.component';
import { BlocComponent } from '../bloc/bloc.component';
import { DeleteBlocComponent } from '../delete-bloc/delete-bloc.component';
import { DialogWarnComponent } from '../dialog-warn/dialog-warn.component';
import { UpdateBlocComponent } from '../update-bloc/update-bloc.component';
import { UpdateblocInputComponent } from '../updatebloc-input/updatebloc-input.component';
import { UpdateBlocfbComponent } from '../update-blocfb/update-blocfb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { BlocdirectiveDirective } from '../blocdirective/blocdirective.directive';


@NgModule({
  declarations: [
    AddBlocComponent,
    BlocComponent,
    DeleteBlocComponent,
    DialogWarnComponent,
    UpdateBlocComponent,
    UpdateblocInputComponent,
    UpdateBlocfbComponent,
    BlocdirectiveDirective
  ],
  imports: [
    CommonModule,
    BlocmoduleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]

})
export class BlocmoduleModule { }
