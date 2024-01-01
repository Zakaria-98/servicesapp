import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities.component';
import { AgGridModule } from 'ag-grid-angular';
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
import { NewdialogComponent } from './newdialog/newdialog.component';
import { EditdialogComponent } from './editdialog/editdialog.component';

@NgModule({
  declarations: [
    CitiesComponent,
    NewdialogComponent,
    EditdialogComponent
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule,
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
export class CitiesModule { }
