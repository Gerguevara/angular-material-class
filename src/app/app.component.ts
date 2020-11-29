import { OtherComponent } from './components/other/other.component';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material-Tutorial';
  openend = false;
  isLinear = false;

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string): void {
    const snackBarRef = this.snackBar.open(message, action, { duration: 2000, }); // se crea una referencia

    snackBarRef.afterDismissed().subscribe(() => { // nos subscribimos a este evento que el evento default
      console.log('stacbar was dismmis');
    })

    //pero asi mismo existe un observable solo para el action

    snackBarRef.onAction().subscribe(() => { // nos subscribimos a este evento que el evento default
      console.log('stacbar was triggered');
    });
    // ambos hacen casi lo mismo
  }


  openCustonSnackBar(){
    this.snackBar.openFromComponent(OtherComponent, { duration: 2000 });
  }






}
