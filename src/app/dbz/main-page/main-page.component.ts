import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent{
    
    personajes: Personaje[] = [
        {
            nombre:'Goku',
            poder:15000
        },
        {
            nombre:'Vegueta',
            poder:12000
        }
      ];
    
      nuevo: Personaje = {
          nombre:'Maestro Roshi',
          poder:1000
      }

      agregarNuevoPersonaje(p: Personaje){
          this.personajes.push(p);
      }
      
}