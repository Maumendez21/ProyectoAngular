import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from './Pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [

  // PagesRoutingModule  -- dashboard
  // PagesRoutingModule -- login, register

  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NoPageFoundComponent},

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
