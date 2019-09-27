import { Injectable } from '@angular/core';

Injectable()
export class LocationsApiService {

 /* Location = {
    title: "Miradouro Sra. da Paz",
    location: "Vila Franca do Campo",
    description: `Este miradouro localiza-se no concelho de Vila Franca do Campo no topo de uma colina.
      Nao só é alvo pela sua chegada relaçao religiosa, como tambem pela vista que possui sobre a vila. `
    }
    Location2 = {
      title: "Miradouro Pico do Ferro",
      location: "Furnas",
      description: `  Situado na freguesia das furnas este miradouro previligia-se pela vista,
       estando a uma altitude consideravel acima da freguesia, é possivel deslumbrar a lagoa e as caldeiras,
       zona protegida com elevada atividade vulcanica.  `
      }  */

  Locations = [{
    imageSrc: "https://i.pinimg.com/originals/51/38/77/513877e16457c6c0a7e525e63b9ba556.jpg",
    title: "Miradouro Sra. da Paz",
    location: "Vila Franca do Campo",
    description: `Este miradouro localiza-se no concelho de Vila Franca do Campo no topo de uma colina.
      Nao só é alvo pela sua chegada relaçao religiosa, como tambem pela vista que possui sobre a vila. `
    }, {
      imageSrc: "https://images.turismoenportugal.org/Miradouro-Pico-do-Ferro.jpg",
      title: "Miradouro Pico do Ferro",
      location: "Furnas",
      description: `  Situado na freguesia das furnas este miradouro previligia-se pela vista,
       estando a uma altitude consideravel acima da freguesia, é possivel deslumbrar a lagoa e as caldeiras,
       zona protegida com elevada atividade vulcanica.  `
      },  {
        imageSrc: "https://thebestofazores.com/wp-content/uploads/2019/03/ferraria.jpg",
        title: "Ponta da Ferraria",
        location: "Ponta Delgada",
        description: ` Passagem obrigatória. Situado a Oeste de Ponta Delgada ao longo da costa sul,
        aqui é possivel tomar banho numa zona com uma fonte vulcanica chegando a haver zonas da agua a atingir 26º `
        }  ]


requestApiHighlights(){
  return this.Locations;
}

  constructor() { }
}