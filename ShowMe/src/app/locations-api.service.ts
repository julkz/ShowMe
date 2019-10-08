import { Injectable } from '@angular/core';

Injectable()
export class LocationsApiService {

  Locations = [{
    id: 1,
    imageSrc: "https://i.pinimg.com/originals/51/38/77/513877e16457c6c0a7e525e63b9ba556.jpg",
    Featued: false,
    title: "Miradouro Sra. da Paz",
    location: "Vila Franca do Campo",
    description: `Este miradouro localiza-se no concelho de Vila Franca do Campo no topo de uma colina.
      Nao só é alvo pela sua chegada relaçao religiosa, como tambem pela vista que possui sobre a vila. `
    },
     {
      id:2,
      imageSrc: "https://images.turismoenportugal.org/Miradouro-Pico-do-Ferro.jpg",
      Featued: false,
      title: "Miradouro Pico do Ferro",
      location: "Furnas",
      description: `  Situado na freguesia das furnas este miradouro previligia-se pela vista,
       estando a uma altitude consideravel acima da freguesia, é possivel deslumbrar a lagoa e as caldeiras,
       zona protegida com elevada atividade vulcanica.  `
      },
       {
        id:3,
        imageSrc: "https://thebestofazores.com/wp-content/uploads/2019/03/ferraria.jpg",
        Featued: true,
        title: "Ponta da Ferraria",
        location: "Ponta Delgada",
        description: ` Passagem obrigatória. Situado a Oeste de Ponta Delgada ao longo da costa sul,
        aqui é possivel tomar banho numa zona com uma fonte vulcanica chegando a haver zonas da agua a atingir 26º `
        }]

// Returns an array of top visited places    TODO
requestApiHighlights(){
  return this.Locations;
}

// Gets location by id identifier
getLocationById(id){
 return this.returnLocation(id);
}

// Gets Location with Featured identifier
getFeaturedLocation(){
   for (let x = 0; x < this.Locations.length; x++) {
     const element = this.Locations[x];
     if(element.Featued) {
       return element;
     }
   }

  return null;
}


private returnLocation(idAux){
  for(let x=0; x <idAux; x++) {
    if(this.Locations[x].id == idAux ) {
      return this.Locations[x];
    }
  }
}

  constructor() { }
}