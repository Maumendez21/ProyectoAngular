import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule}  from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import { InputsComponent } from './inputs/inputs.component';
import { MapsComponent } from './maps/maps.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../Shared/shared.module';



@NgModule({
  declarations: [

    DashboardComponent,
    InputsComponent,
    MapsComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    InputsComponent,
    MapsComponent,
    PagesComponent,
  ]
})
export class PagesModule { }
