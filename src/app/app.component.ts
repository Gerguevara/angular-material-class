import { Component } from '@angular/core';

// interface para tipo de datos (opcional) pero buena practica
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
];

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material-Tutorial';
  openend = false; // por el sidebar
  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']; // cabecera
  dataSource = ELEMENT_DATA; // toma la data de este array que debe coinciir

}
