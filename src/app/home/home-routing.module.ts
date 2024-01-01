import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../@services/auth.guard';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    
    children: [
      {
        path: 'main',
        loadChildren: () => import("./main/main.module").then(m => m.MainModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'service',
        loadChildren: () => import("./services/services.module").then(m => m.ServicesModule)
      },
      {
        path: 'categories',
        loadChildren: () => import("./categories/categories.module").then(m => m.CategoriesModule)
      }
      ,
      {
        path: 'profile',
        loadChildren: () => import("./profile/profile.module").then(m => m.ProfileModule)
      },
      {
        path: 'search',
        loadChildren: () => import("./search/search.module").then(m => m.SearchModule) 
      },
      
      
    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class HomeRoutingModule { }
