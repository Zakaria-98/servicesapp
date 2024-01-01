import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddserviceComponent } from './addservice/addservice.component';
import { AllservicesComponent } from './allservices/allservices.component';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';
import { AuthGuard } from 'src/app/@services/auth.guard';

const routes: Routes = [ {
  path: '',
  component: AllservicesComponent,

},
{
  path: 'info/:id',
  component: ServicedetailsComponent,
},
{
  path: 'all',
  component: AllservicesComponent,
},
{
  path: 'add',
  component:AddserviceComponent,
        canActivate:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
