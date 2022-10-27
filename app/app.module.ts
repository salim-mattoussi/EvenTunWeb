import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EvenementComponent } from './evenement/evenement.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { PayementComponent } from './payement/payement.component';
import { PannierComponent } from './pannier/pannier.component';
import { DashbordComponent } from './backOffice/dashbord/dashbord.component';
import { UserStatComponent } from './backOffice/user-stat/user-stat.component';
import { EventStatComponent } from './backOffice/event-stat/event-stat.component';
import { TicketStatComponent } from './backOffice/ticket-stat/ticket-stat.component';
import { PubStatComponent } from './backOffice/pub-stat/pub-stat.component';
import { AddEventComponent } from './add-event/add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EvenementComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    PayementComponent,
    PannierComponent,
    DashbordComponent,
    UserStatComponent,
    EventStatComponent,
    TicketStatComponent,
    PubStatComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
