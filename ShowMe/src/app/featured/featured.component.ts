import { LocationsApiService } from './../locations-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  featuredLocation;

  constructor(public apiProvider: LocationsApiService) { 

    console.log(apiProvider.getFeaturedLocation());

  }

  ngOnInit() {

this.featuredLocation = this.apiProvider.getFeaturedLocation();

  }
  

}
