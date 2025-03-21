import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';



@NgModule({
  declarations: [
    BackBtnComponent,
    NoDataFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
