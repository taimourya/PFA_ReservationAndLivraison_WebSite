import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from './services/RestaurantService';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http'
import { ContactService } from './services/ContactService';
import { CollaborezComponent } from './collaborez/collaborez.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { CollabarezInfoComponent } from './collabarez-info/collabarez-info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ContactFormComponent,
    CollaborezComponent,
    CollaborateurComponent,
    ContactInfoComponent,
    CollabarezInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    RestaurantService,
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
