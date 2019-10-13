import { Injectable, Input } from '@angular/core';

@Injectable()
export class UtilitiesService {

brandName = "ShowMe";

ApiListeningPort : 4300;

        // If api is requesting outer network
static  NgrokIP = "http://70b7632f.ngrok.io";

        // If api is listenning to local 
static  LocalhostIP = "http://localhost:{{4300}}";

 companyMotto = ` Este site destina-se a propositos de demonstraçao apenas simulando 
 uma aplicaçao de turismo no formato OnePageApplication`;

  constructor() { }
}
