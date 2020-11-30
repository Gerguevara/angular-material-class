import { Component, OnInit, Inject} from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styles: [
  ]
})
export class OtherComponent implements OnInit {


 constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close(): void{
    this.dialogRef.close('custon close');
  }

}
