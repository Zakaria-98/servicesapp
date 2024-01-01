import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { HomeRoutingModule } from './home-routing.module';
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
import { MainComponent } from './main/main.component';
import { ServicedetailsComponent } from './services/servicedetails/servicedetails.component';
import { HomeComponent } from './home.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
HomeComponent,


   
  ],
  imports: [

    RouterModule,
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatStepperModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    NgxPaginationModule,
    ScrollingModule,
    MatProgressBarModule,
    FormsModule      

   
  ], 
})
export class HomeModule { }
