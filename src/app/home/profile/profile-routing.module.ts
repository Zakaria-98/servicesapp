import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from 'src/app/@services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    
  },
   {
  path: 'user/:id',
  component: ProfileComponent,

  
},
{
  path:'account',
  component:AccountComponent,
   canActivate:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
