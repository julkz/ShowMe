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

  constructor(private route: ActivatedRoute, private apiProvider: LocationsApiService) { }


  async getFeaturedLocation(){
    const response = await this.apiProvider.getLocationById(this.id);
    const myJson =  await response; //extract JSON from the http response
    this.location = myJson;
    return myJson;
  }

  ngOnInit() {
   this.route.paramMap
   .subscribe(params =>  {
     this.id = params.get('id')
   })
   this.getFeaturedLocation();
  }

}
