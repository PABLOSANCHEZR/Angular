import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
<h3>La base es: <strong>{{base}} </strong></h3>

<button (click)=" operar(base) "> +5 </button>

<span>{{numero}}</span>

<button (click)=" operar(-base) "> -5 </button>
    
    `
})
export class ContadorComponent {

    titulo: string = 'Contador App';
    numero: number = 10;
    base : number = 5;
  
    operar(base : number ){
  
      this.numero += base;
  
    }

}