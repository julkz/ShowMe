import { UtilitiesService } from './../utilities.service';
import { Component, OnInit } from '@angular/core';
//<h2>Homepage text </h2>
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',  
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(public utils: UtilitiesService) { }

  ngOnInit() {
  }

}
