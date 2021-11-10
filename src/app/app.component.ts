import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base : number = 5;

  //sumar(){
  //  this.numero+=1;
  //}

  //restar(){
  //  this.numero-=1;
  //}

  //base:number=5;

  operar(base : number ){

    this.numero += base;

  }

  acumular(valor : number ){
    this.numero += valor;
  }
}
