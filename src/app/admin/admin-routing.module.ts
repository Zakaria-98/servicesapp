import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
    {
      path: 'users',
      loadChildren: () => import("./users/users.module").then(m => m.UsersModule)
    },
    {
      path: 'services',
      loadChildren: () => import("./services/services.module").then(m => m.ServicesModule)
    },
    {
      path: 'categories',
      loadChildren: () => import("./categories/categories.module").then(m => m.CategoriesModule)
    },
    {
      path: 'cities',
      loadChildren: () => import("./cities/cities.module").then(m => m.CitiesModule)
    },
    {
      path: 'admins',
      loadChildren: () => import("./admins/admins.module").then(m => m.AdminsModule)
    },

  ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
