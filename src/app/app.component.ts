import { Component, ViewChild, AfterViewInit } from '@angular/core';


// interface para tipo de datos (opcional) pero buena practica



export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {


  title = 'Material-Tutorial';
  openend = false; // por el sidebar

  numbers: number[]  = []
  constructor() {

    for (let i = 0; i < 1000; i++){
      this.numbers.push(i)
    }

  }

}

/**
 *  nota:
 * si no se despliega un cabecera tambopo de mostrara la columa
 * se debe respetar el ordern
 * se pueden implmentar eventos con el ng click en un row
 */
