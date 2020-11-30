import { OtherComponent } from './components/other/other.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

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
  isLinear = false;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(OtherComponent, {
      width: '550px',
    data: {name: 'Gerado'}
    });
    dialogRef.afterClosed().subscribe(result => { // nop subscribimos a su evento close
      console.log('The dialog was closed:', result); // el result viene de la etiqueta creada
    });
  }


}
