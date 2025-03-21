import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    BackBtnComponent,
    NoDataFoundComponent,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackBtnComponent,
    NoDataFoundComponent,
    SearchPipe
  ]
})
export class SharedModule { }
