import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { DashbordComponent } from './backOffice/dashbord/dashbord.component';
import { ContactComponent } from './contact/contact.component';
import { EvenementComponent } from './evenement/evenement.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path :"home" , component :HomeComponent},
  {path :"evenement", component: EvenementComponent},
  {path : "contact", component : ContactComponent},
  {path : "login" , component : LoginComponent},
  {path :"admin", component: DashbordComponent},
  {path :"addEvent", component: AddEventComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
