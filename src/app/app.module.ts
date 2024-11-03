import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeroComponent } from './hero/hero.component';
import { FeatureServiceComponent } from './feature-service/feature-service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClientsComponent } from './clients/clients.component';
import { FeatureComponent } from './feature/feature.component';
import { FeatureDetailsComponent } from './feature-details/feature-details.component';
import { ServicesComponent } from './services/services.component';
import { MoreFeaturesComponent } from './more-features/more-features.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeroComponent,
    FeatureServiceComponent,
    AboutUsComponent,
    ClientsComponent,
    FeatureComponent,
    FeatureDetailsComponent,
    ServicesComponent,
    MoreFeaturesComponent,
    PricingComponent,
    FaqComponent,
    TestimonialsComponent,    
    ContactFormComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
