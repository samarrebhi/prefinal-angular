import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import {FoyerDeleteComponent} from "./gestion foyer/foyer-delete/foyer-delete.component";
import {FoyerUpdateComponent} from "./gestion foyer/foyer-update/foyer-update.component";
import {FoyerAddComponent} from "./gestion foyer/foyer-add/foyer-add.component";
import {FoyerListComponent} from "./gestion foyer/foyer-list/foyer-list.component";

import {MatDialog} from "@angular/material/dialog";
import {ChambreComponent} from "./gestion Chambre/chambre/chambre.component";
import {AddChambreComponent} from "./gestion Chambre/add-chambre/add-chambre.component";
import {DeleteChambreComponent} from "./gestion Chambre/delete-chambre/delete-chambre.component";
import {UpdateChambreComponent} from "./gestion Chambre/update-chambre/update-chambre.component";
import {StatComponent} from "./gestion Chambre/Stat/stat.component";
import{DialogWarnComponent} from "./gestion bloc/dialog-warn/dialog-warn.component";
import {BlocmoduleModule} from "./gestion bloc/blocmodule/blocmodule.module";

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,





  ],
  imports: [
    BrowserModule,
    BlocmoduleModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),

  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
