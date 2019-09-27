import { LocationsApiService } from './../locations-api.service';
import { UtilitiesService } from './../utilities.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  
   id;
   location;

  constructor(private route: ActivatedRoute, private locationsApi: LocationsApiService) { }

  ngOnInit() {
   this.route.paramMap
   .subscribe(params =>  {
     this.id = +params.get('id')
   })
   this.location = this.locationsApi.getLocationById(this.id);
  }

}
