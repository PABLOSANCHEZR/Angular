import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';



@NgModule({
  declarations: [
    MainpageComponent,
    PersonajesComponent
  ],

  exports:[

    MainpageComponent

  ],

  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
