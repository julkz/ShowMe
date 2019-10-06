import { FeaturedComponent } from './featured/featured.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'location/:id', component: LocationDetailsComponent},
   { path: 'featured', component: FeaturedComponent},
  {path: '', component: HomepageComponent},
  {path: '**', component: NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
