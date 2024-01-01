import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './@services/auth.guard';
import { AdminguardGuard } from './@services/adminguard.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },

  

  {
    path: 'home',
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule) ,
    

  },

  {
    path: 'landing',
    loadChildren: () => import("./landing/landing.module").then(m => m.LandingModule) ,

  },
  {
    path: 'auth',
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule) ,

  },
  {
    path: 'admin',
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule) ,
    canActivate: [AuthGuard,AdminguardGuard]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
  
  */