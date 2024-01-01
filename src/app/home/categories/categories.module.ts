import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatSelectModule} from '@angular/material/select';
import {NgxPaginationModule} from 'ngx-pagination'; 

import { CategoriesRoutingModule } from './categories-routing.module';
import { AllcategoriesComponent } from './allcategories/allcategories.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AllcategoriesComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    CommonModule,
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
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    MatSelectModule,
    NgxPaginationModule

  ]
})
export class CategoriesModule { }
