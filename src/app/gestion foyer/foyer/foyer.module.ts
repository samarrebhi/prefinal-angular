import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoyerRoutingModule } from './foyer-routing.module';
import {FoyerListComponent} from "../foyer-list/foyer-list.component";
import {FoyerAddComponent} from "../foyer-add/foyer-add.component";
import {FoyerUpdateComponent} from "../foyer-update/foyer-update.component";
import {FoyerDeleteComponent} from "../foyer-delete/foyer-delete.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../material.module";
import {TablerIconsModule} from "angular-tabler-icons";
import * as TablerIcons from "angular-tabler-icons/icons";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    FoyerListComponent,
    FoyerAddComponent,
    FoyerUpdateComponent,
    FoyerDeleteComponent,
  ],
  imports: [
    CommonModule,
    FoyerRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    MatPaginatorModule
  ],
})
export class FoyerModule {}
