import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-locationlist',
  templateUrl: './locationlist.component.html',
  styleUrls: ['./locationlist.component.scss']
})
export class LocationlistComponent implements OnInit {

  constructor(private utils: UtilitiesService) { }

  ngOnInit() {
  }

}
