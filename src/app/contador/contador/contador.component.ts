import  {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl:'contador.component.html'
})

export class ContadorComponent{
    public title: string = 'Contador App';
    numero: number = 0;
    base  : number = 5;

    public acumular(valor:number){
        this.numero+=valor;
      }
}