import { Injectable, Input } from '@angular/core';

@Injectable()
export class UtilitiesService {

brandName = "ShowMe";

getLocationsList(){
  return ["Ponta Delgada", "Suiça","Sao Pedro","Lisboa","Vila franca"];
}

  constructor() { }
}
