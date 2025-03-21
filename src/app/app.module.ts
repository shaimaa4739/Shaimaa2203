import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { MovieDetailsComponent } from './modules/pages/movie-details/movie-details.component';
import { BranchesComponent } from './modules/pages/branches/branches.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { CardComponent } from './modules/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    BranchesComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
