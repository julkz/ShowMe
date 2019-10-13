import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../utilities.service';
import { LocationsApiService } from '../locations-api.service';

@Component({
  selector: 'app-locationlist',
  templateUrl: './locationlist.component.html',
  styleUrls: ['./locationlist.component.scss']
})
export class LocationlistComponent implements OnInit {

  constructor(public serviceApi: LocationsApiService) { }

  ngOnInit() {
  }

}
