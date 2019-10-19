import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrls: ['./createlocation.component.scss']
})
export class CreatelocationComponent implements OnInit {

  createLocation(formTitle,formImageSrc,formDescription,formLocation){

    console.log(" Activated button")
  
    $.ajax({
      type: "POST",
      url:'http://192.168.1.66:4300',
      data: {
        title: formTitle,
        imageSrc: formImageSrc,
        description: formDescription,
        location: formLocation},
      success: success,
      dataType: "json"
    });
  
   
  }
  
  constructor() { }

  ngOnInit() {
  }

}


// Implementar pedidos posts com Aja



function success(data, textstatus) {
 console.log( "DATA:  " + data);
 console.log("\n textStatus:  " + textstatus);
}
