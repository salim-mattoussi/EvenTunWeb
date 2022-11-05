import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';
import { TicketsComponent } from './tickets/tickets.component';
import { BlogComponent } from './blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ProfilComponent } from './profil/profil.component';
import { RestpasswordComponent } from './restpassword/restpassword.component';
import {MatStepperModule} from '@angular/material/stepper';
import { TestComponent } from './test/test.component'; 

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
    TicketsComponent,
    BlogComponent,
    ProfilComponent,
    RestpasswordComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatStepperModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
