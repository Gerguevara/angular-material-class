import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';

const MaterialComponents = [
  MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule, MatMenuModule
  ,MatDividerModule , MatGridListModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents
    ]
})
export class MaterialModule { }
