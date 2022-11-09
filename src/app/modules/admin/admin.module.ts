import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EvenementComponent } from './components/evenement-stat/evenement.component';
import { UserStatComponent } from './components/user-stat/user-stat.component';
import { TicketStatComponent } from './components/ticket-stat/ticket-stat.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BodyComponent } from './components/body/body.component';
import { HomeDashComponent } from './components/home-dash/home-dash.component';
import { AjoutBlogComponent } from './components/ajout-blog/ajout-blog.component';
import { ListBlogComponent } from './components/list-blog/list-blog.component';
import { AjoutPubliciteComponent } from './components/ajout-publicite/ajout-publicite.component';
import { ListPubliciteComponent } from './components/list-publicite/list-publicite.component';
import { FormsModule } from '@angular/forms';



 



@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    EvenementComponent,
    UserStatComponent,
    TicketStatComponent,
    BodyComponent,
    HomeDashComponent,
    AjoutBlogComponent,
    ListBlogComponent,
    AjoutPubliciteComponent,
    ListPubliciteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FormsModule
    
    
    
  
  ]
})
export class AdminModule { }
