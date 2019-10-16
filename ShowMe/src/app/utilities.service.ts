import { Injectable, Input } from '@angular/core';

@Injectable()
export class UtilitiesService {

brandName = "ShowMe";

ApiListeningPort : 4300;

        // Insert the output ip of ngrok  from Server      <-> If using ngrok <->
static  NgrokIP = "http://29ba3a76.ngrok.io";

        // Insert your local ip and server listening port
static  LocalIP = "http://192.168.1.66:4300";

 companyMotto = ` Este site destina-se a propositos de demonstraçao apenas simulando 
 uma aplicaçao de turismo no formato OnePageApplication`;

  constructor() { }
}
