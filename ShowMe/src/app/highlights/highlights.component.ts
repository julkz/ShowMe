import { LocationsApiService } from './../locations-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {

   highlights;

   executor;

  constructor(public apiProvider: LocationsApiService) {
    console.log(this.highlights);
   }

   async getHighlightsApi() {
    const response = await this.apiProvider.requestApiHighlights();
    const myJson =  await response; //extract JSON from the http response
    // do something with myJson
    console.log(myJson);
    this.highlights = myJson;
    return myJson;
   }

  ngOnInit() {
    this.getHighlightsApi();
  }
  

}
