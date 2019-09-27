import { Injectable, Input } from '@angular/core';

@Injectable()
export class UtilitiesService {

brandName = "ShowMe";

 companyMotto = ` Este site destina-se a propositos de demonstraçao apenas simulando 
 uma aplicaçao de turismo no formato OnePageApplication`;

getLocationsList(){
  return ["Sao Miguel", "Terceira","Sao Jorge","Santa Maria","Pico"];
}

  constructor() { }
}
