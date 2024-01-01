import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { GeneraldialogComponent } from './generaldialog/generaldialog.component';
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
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    GeneraldialogComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatButtonModule,
    MatButtonModule,
MatButtonToggleModule,
MatCardModule ,
MatIconModule,
MatStepperModule,

MatToolbarModule,
MatFormFieldModule,
  MatInputModule,
MatMenuModule,
MatPaginatorModule,
MatRadioModule,
MatAutocompleteModule,
MatDialogModule



  ],
  exports:[ MatButtonModule,
    MatButtonModule,
MatButtonToggleModule,
MatSnackBarModule,
GeneraldialogComponent


 ]
})
export class SharedModule { }
