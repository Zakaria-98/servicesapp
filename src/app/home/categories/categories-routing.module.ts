import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcategoriesComponent } from './allcategories/allcategories.component';
import { CategoriesComponent } from 'src/app/admin/categories/categories.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [ {

 path: '',
component: AllcategoriesComponent,
},
{

  path: 'cat/:id',
 component: CategoryComponent,
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
