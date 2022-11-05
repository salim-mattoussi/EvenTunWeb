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
import {SignupComponent} from "./signup/signup.component";
import { ProfilComponent } from './profil/profil.component';
import { RestpasswordComponent } from './restpassword/restpassword.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path :"" , component :HomeComponent},
  {path :"home" , component :HomeComponent},
  {path :"evenement", component: EvenementComponent},
  {path :"singup", component: SignupComponent},
  {path : "contact", component : ContactComponent},
  {path : "login" , component : LoginComponent},
  {path :"admin", component: DashbordComponent},
  {path :"pay", component: PayementComponent},
  {path: "pannier" , component: PannierComponent},
  {path: "ticket", component: TicketsComponent},
  {path : "blog", component : BlogComponent},
  { path : "profil", component : ProfilComponent},
  { path : "restpassword", component : RestpasswordComponent},
  { path : "test", component : TestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
