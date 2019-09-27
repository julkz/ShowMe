import { LocationsApiService } from './../locations-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {

  constructor(public apiProvider: LocationsApiService) { }

  ngOnInit() {
  }

}
