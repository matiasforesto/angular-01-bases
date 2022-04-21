import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[]= ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Dead Pool'];
  borrado: string = '';
  
  borrarHeroe(){ 
    const borrado = this.heroes.shift() || '';
    this.borrado = borrado;
  }

  iniciarHeroes(){
    this.heroes=['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Dead Pool'];
  }

  agregarHeroe(){
    const ran = Math.random();
    const nuevo= 'RANDOM '+ran;
    this.heroes.push(nuevo);
  }
}
