import { Injectable } from '@angular/core';
import { UtilitiesService } from './utilities.service';

Injectable()
export class LocationsApiService {

 
// Returns an array of top visited places    TODO
async requestApiHighlights () {
  const response = await fetch(UtilitiesService.NgrokIP);
  const myJson =  await response.json(); //extract JSON from the http response
  console.log(myJson);
  return myJson;
}

// Gets location by id identifier
async getLocationById(id){    // TODO
  const response = await fetch(UtilitiesService.NgrokIP+'/location/'+id);
  const myJson =  await response.json(); //extract JSON from the http response
  console.log(myJson);
  return myJson;
}

// Gets Location with Featured identifier
 async getFeaturedLocation(){
  const response = await fetch(UtilitiesService.NgrokIP + '/featured');
  const myJson =  await response.json(); //extract JSON from the http response
  console.log(myJson);
  return myJson;
}

// TODO
getLocationList(){
 return ["Sao miguel", "Terceira","Graciosa","Sao Jorge", "PICO CRLH"]
}







  constructor() { }
}