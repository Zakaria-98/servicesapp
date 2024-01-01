import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { SecondregisterComponent } from './secondregister/secondregister.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
  {
    path: 'forget',
    component: SecondregisterComponent,
  },
  {
    path: 'change/:id',
    component: ChangepasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
