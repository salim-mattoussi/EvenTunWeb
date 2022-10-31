import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './backOffice/dashbord/dashbord.component';
import { BlogComponent } from './blog/blog.component';

import { ContactComponent } from './contact/contact.component';
import { EvenementComponent } from './evenement/evenement.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PannierComponent } from './pannier/pannier.component';
import { PayementComponent } from './payement/payement.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {path :"" , component :HomeComponent},
  {path :"home" , component :HomeComponent},
  {path :"evenement", component: EvenementComponent},
  {path : "contact", component : ContactComponent},
  {path : "login" , component : LoginComponent},
  {path :"admin", component: DashbordComponent},
  {path :"pay", component: PayementComponent},
  {path: "pannier" , component: PannierComponent},
  {path: "ticket", component: TicketsComponent},
  {path : "blog", component : BlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
