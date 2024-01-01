import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { AgGridModule } from 'ag-grid-angular';
import { ServicesRoutingModule } from './services-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    AgGridModule,
    MatDialogModule,
    MatButtonModule,
MatButtonToggleModule ,
MatCardModule ,
MatIconModule,
MatStepperModule,
MatSnackBarModule,
MatToolbarModule,
MatFormFieldModule,
  MatInputModule,
MatMenuModule,
MatPaginatorModule,
 RouterModule,
 FormsModule,
 MatRadioModule,
 MatAutocompleteModule,
 ReactiveFormsModule,
 AgGridModule

  ]
})
export class ServicesModule { }
