import { Injectable, Input } from '@angular/core';

@Injectable()
export class UtilitiesService {

brandName = "ShowMe";

 companyMotto = ` Este site destina-se a propositos de demonstraçao apenas simulando 
 uma aplicaçao de turismo no formato OnePageApplication`;

getLocationsList(){
  return ["Ponta Delgada", "Suiça","Sao Pedro","Lisboa","Vila franca"];
}

  constructor() { }
}
