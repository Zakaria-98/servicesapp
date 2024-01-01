import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
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
import { AgGridModule } from 'ag-grid-angular';
import { EditdialogComponent } from './dialog/editdialog/editdialog.component';
@NgModule({
  declarations: [
    CategoriesComponent,
    DialogComponent,
    EditdialogComponent,
    
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
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
export class CategoriesModule { }
