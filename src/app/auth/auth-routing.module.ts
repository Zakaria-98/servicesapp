import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import("./register/register.module").then(m => m.RegisterModule)
      },
      {
        path: 'confirm',
        loadChildren: () => import("./confirm/confirm.module").then(m => m.ConfirmModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
