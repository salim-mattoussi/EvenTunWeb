import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EvenementComponent } from './components/evenement/evenement.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactComponent } from './components/contact/contact.component';
import { PayementComponent } from './components/payement/payement.component';
import { PannierComponent } from './components/pannier/pannier.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';
import { TicketsComponent } from './components/tickets/tickets.component';
import { BlogComponent } from './components/blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { DetailblogComponent } from './components/detailblog/detailblog.component';
import { HttpClientModule } from '@angular/common/http';





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
   
   
    TicketsComponent,
    BlogComponent,
    DetailblogComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule,
    BrowserAnimationsModule,
    OverlayModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
