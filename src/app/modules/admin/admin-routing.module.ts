import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SignupComponent } from 'src/app/components/signup/signup.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EvenementComponent } from './components/evenement-stat/evenement.component';
import { HomeDashComponent } from './components/home-dash/home-dash.component';
import { PubStatComponent } from './components/pub-stat/pub-stat.component';
import { TicketStatComponent } from './components/ticket-stat/ticket-stat.component';
import { UserStatComponent } from './components/user-stat/user-stat.component';
import { VlogstatComponent } from './components/vlogstat/vlogstat.component';

const routes: Routes = [
  
  {path:'', component:DashboardComponent ,children:[
    {path:"" ,component: HomeDashComponent},
    {path:"dashboard" ,component: HomeDashComponent},
    {path:"blog" ,component: VlogstatComponent},
    {path:"tickets" ,component: TicketStatComponent},
    {path:"user" ,component: UserStatComponent},
    {path:"event" ,component: EvenementComponent},
    {path:"publicite" ,component: PubStatComponent},
    {path:"login", component: LoginComponent},
    {path:"reclamationData",component:SignupComponent}
    //{path:"" ,redirectTo:"/admin/home",pathMatch:"full"},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
