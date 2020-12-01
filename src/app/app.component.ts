import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

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
export class AppComponent implements AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;

  title = 'Material-Tutorial';
  openend = false; // por el sidebar
  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']; // cabecera
  dataSource = new MatTableDataSource(ELEMENT_DATA); // toma la data de este array que debe coinciir



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

// metodo para filtar
  applyFilter(filterText: string): void {
    this.dataSource.filter = filterText.trim().toLocaleLowerCase();
  }
}

/**
 *  nota:
 * si no se despliega un cabecera tambopo de mostrara la columa
 * se debe respetar el ordern
 * se pueden implmentar eventos con el ng click en un row
 */
