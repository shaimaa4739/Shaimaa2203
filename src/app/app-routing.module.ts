import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { MovieDetailsComponent } from './modules/pages/movie-details/movie-details.component';
import { BranchesComponent } from './modules/pages/branches/branches.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'details', 
    component: MovieDetailsComponent
  },
  {
    path: 'details/:categoryId/:movieId', 
    component: MovieDetailsComponent
  },
  {
    path: 'branches',
    component: BranchesComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
