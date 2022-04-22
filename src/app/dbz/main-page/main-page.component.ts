import {Component} from '@angular/core';
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

    nuevo: Personaje={
        nombre: 'Truncks',
        poder: 14000
    }

    agregar(){
        if(this.nuevo.nombre.trim().length === 0){
            return;
        }
       this.personajes.push(this.nuevo);
       this.nuevo = {nombre: '', poder: 0};
    }
}