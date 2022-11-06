import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BlogComponent } from './components/blog/blog.component';

import { ContactComponent } from './components/contact/contact.component';
import { EvenementComponent } from './components/evenement/evenement.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PannierComponent } from './components/pannier/pannier.component';
import { PayementComponent } from './components/payement/payement.component';
import { TicketsComponent } from './components/tickets/tickets.component';

const routes: Routes = [
  {path :"" , component :HomeComponent},
  {path :"home" , component :HomeComponent},
  {path :"evenement", component: EvenementComponent},
  {path : "contact", component : ContactComponent},
  {path : "login" , component : LoginComponent},
  {path:"admin",loadChildren:()=> import('./modules/admin/admin.module').then((m)=>m.AdminModule)},
  {path :"pay", component: PayementComponent},
  {path: "pannier" , component: PannierComponent},
  {path: "ticket", component: TicketsComponent},
  {path : "blog", component : BlogComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
