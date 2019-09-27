import { LocationsApiService } from './locations-api.service';
import { UtilitiesService } from './utilities.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { LocationDetailsComponent } from './location-details/location-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    HighlightsComponent,
    LocationDetailsComponent,
  ],
  imports: [
    BrowserModule,
   AppRoutingModule
  ],
  providers: [UtilitiesService,LocationsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
