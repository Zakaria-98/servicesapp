import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { NavComponent } from './nav.component';
import { NbActionsModule } from '@nebular/theme';


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule,
    NbActionsModule
  ]
})
export class NavModule { }
