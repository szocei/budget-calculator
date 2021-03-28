import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './page/main/main.component';
import { AddItemFormComponent } from './page/add-item-form/add-item-form.component';
import { BudgetListComponent } from './page/budget-list/budget-list.component';
import { BudgetItemCardComponent } from './page/budget-list/budget-item-card/budget-item-card.component';
import { EditItemModalComponent } from './page/edit-item-modal/edit-item-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddItemFormComponent,
    BudgetListComponent,
    BudgetItemCardComponent,
    EditItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents:[EditItemModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
